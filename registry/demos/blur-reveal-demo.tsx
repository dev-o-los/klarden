import { BlurRevealText } from "@/registry/klarden-ui/blur-reveal";

export default function BlurRevealTextDemo() {
  return (
    <div className="relative min-h-30 flex items-center justify-center">
      <BlurRevealText duration={0.8} blurStrength={10}>
        You can just ship things.
      </BlurRevealText>
    </div>
  );
}
