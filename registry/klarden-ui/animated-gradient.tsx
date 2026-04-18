"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedGradientProps {
  className?: string;
  variant?: "mist" | "lava" | "prism" | "plasma" | "pulse" | "vortex";
  speed?: number;
  opacity?: number;
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;
  
  varying vec2 v_uv;
  uniform float u_time;
  uniform vec2 u_resolution;
  
  #define PI 3.14159265359
  
  float wave(float x, float y, float t) {
    return sin(x * 3.0 + y * 2.0 + t) * 0.5 + 0.5;
  }
  
  float wave2(float x, float y, float t) {
    return sin(x * 5.0 - y * 3.0 + t * 1.2) * 0.5 + 0.5;
  }
  
  float wave3(float x, float y, float t) {
    return sin(x * 2.0 + y * 4.0 + t * 0.8 + PI) * 0.5 + 0.5;
  }
  
  void main() {
    vec2 uv = v_uv;
    float t = u_time * 0.3;
    
    float aspect = u_resolution.x / u_resolution.y;
    uv.x *= aspect;
    
    vec2 center = vec2(0.5 * aspect, 0.5);
    vec2 d = uv - center;
    float dist = length(d);
    float edgeDist = smoothstep(0.0, 0.5, dist);
    float cornerDist = smoothstep(0.3, 0.5, abs(d.x) + abs(d.y));
    
    float n1 = wave(uv.x, uv.y, t);
    float n2 = wave2(uv.x + 10.0, uv.y, t);
    float n3 = wave3(uv.x, uv.y + 5.0, t);
    
    float flow = d.x * 0.7 + d.y * 0.3 + t;
    
    float w1 = sin(flow * 6.0 + n1 * 4.0) * 0.5 + 0.5;
    float w2 = sin(flow * 9.0 + n2 * 5.0 + PI) * 0.5 + 0.5;
    float w3 = sin(flow * 4.0 + n3 * 3.0 + PI * 0.5) * 0.5 + 0.5;
    
    float b1 = pow(w1, 3.0) * pow(w2, 2.0);
    float b2 = pow(w2, 2.5) * pow(w3, 2.0) * 0.6;
    float b3 = pow(w3, 4.0) * 0.4;
    
    float intensity = 0.0;
    intensity = intensity + b1 * (1.0 - edgeDist * 0.6);
    intensity = intensity + b2 * (1.0 - edgeDist * 0.4);
    intensity = intensity + b3 * (1.0 - cornerDist * 0.7);
    intensity = intensity * (1.0 - smoothstep(0.0, 0.2, dist));
    
    float glow = (n1 + n2 * 0.5) * 0.15 * (1.0 - edgeDist);
    intensity = intensity + glow;
    
    vec3 pink1 = vec3(1.0, 0.05, 0.5);
    vec3 pink2 = vec3(0.9, 0.15, 0.7);
    vec3 purple = vec3(0.6, 0.1, 0.75);
    vec3 magenta = vec3(0.8, 0.05, 0.6);
    
    float colorMix = n1;
    vec3 col = mix(pink1, pink2, colorMix);
    col = mix(col, purple, n2 * 0.4);
    col = mix(col, magenta, smoothstep(0.3, 0.7, colorMix) * 0.3);
    
    col = col * intensity * 1.6;
    col = pow(col, vec3(0.9));
    
    float alpha = smoothstep(0.0, 0.05, intensity);
    col = col * alpha;
    
    gl_FragColor = vec4(col, 1.0);
  }
`;

const variants = [
  "mist",
  "lava",
  "prism",
  "plasma",
  "pulse",
  "vortex",
] as const;

export function AnimatedGradient({
  className,
  variant = "mist",
  speed = 1,
  opacity = 1,
}: AnimatedGradientProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const startTime = Date.now();

    const render = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      gl.uniform1f(timeLocation, elapsed * speed);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteBuffer(buffer);
    };
  }, [variant, speed]);

  return (
    <div className={cn("relative overflow-hidden bg-black", className)}>
      <canvas ref={canvasRef} className="h-full w-full" style={{ opacity }} />
    </div>
  );
}