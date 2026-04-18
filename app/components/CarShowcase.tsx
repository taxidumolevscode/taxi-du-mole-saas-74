import Image from "next/image";

type CarShowcaseProps = {
  carClassName?: string;
  containerClassName?: string;
};

export function CarShowcase({
  carClassName = "max-w-[320px]",
  containerClassName = "",
}: CarShowcaseProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[30px] border border-black/10 bg-white p-6 ${containerClassName}`.trim()}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute inset-y-0 left-0 w-full">
          <Image
            alt=""
            aria-hidden="true"
            className="object-contain object-left-bottom opacity-100"
            fill
            priority={false}
            src="https://taxidumole.com/wp-content/uploads/2026/04/%E2%80%94Pngtree%E2%80%94winding-road-on-transparant-design_5504221-scaled.png"
          />
        </div>
        <div className="absolute inset-x-8 bottom-[14%] h-20 rounded-full bg-black/12 blur-3xl" />
      </div>

      <div className="relative z-10 flex justify-center">
        <Image
          alt="Visuel Taxi Du Môle"
          className={`h-auto w-full ${carClassName}`.trim()}
          height={320}
          src="https://taxidumole.com/wp-content/uploads/2025/10/ChatGPT_Image_16_juil._2025_13_12_45.png"
          width={320}
        />
      </div>
    </div>
  );
}
