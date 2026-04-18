import { AnimatedGradient } from "@/registry/klarden-ui/animated-gradient";

export default function AnimatedGradientDemo() {
  return (
    <AnimatedGradient
      variant="mist"
      speed={1}
      opacity={0.8}
      className="h-96 w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
    />
  );
}
