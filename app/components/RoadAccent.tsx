import Image from "next/image";

type RoadAccentProps = {
  className?: string;
  imageClassName?: string;
  blendClassName?: string;
  priority?: boolean;
};

export function RoadAccent({
  className = "",
  imageClassName = "",
  blendClassName = "",
  priority = false,
}: RoadAccentProps) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`.trim()}
      aria-hidden="true"
    >
      <div className={`road-accent-drift relative h-full w-full ${blendClassName}`.trim()}>
        <Image
          src="https://taxidumole.com/wp-content/uploads/2026/04/%E2%80%94Pngtree%E2%80%94winding-road-on-transparant-design_5504221-scaled.png"
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1280px) 54vw, (min-width: 768px) 52vw, 100vw"
          className={`road-accent-image object-contain ${imageClassName}`.trim()}
        />
      </div>
    </div>
  );
}