import Image from "next/image";

type RoadAccentProps = {
  className?: string;
  imageClassName?: string;
  blendClassName?: string;
};

export function RoadAccent({
  className = "",
  imageClassName = "",
  blendClassName = "",
}: RoadAccentProps) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`.trim()}
      aria-hidden="true"
    >
      <div className={`road-accent-drift relative h-full w-full ${blendClassName}`.trim()}>
        <Image
          alt=""
          className={`road-accent-image object-contain ${imageClassName}`.trim()}
          fill
          priority={false}
          src="https://taxidumole.com/wp-content/uploads/2026/04/%E2%80%94Pngtree%E2%80%94winding-road-on-transparant-design_5504221-scaled.png"
        />
      </div>
    </div>
  );
}
