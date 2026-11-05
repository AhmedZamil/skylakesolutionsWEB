import Image from "next/image";

export function StudyFrame({
  src,
  alt = "",
  pending = "Screenshot pending",
}: {
  src?: string;
  alt?: string;
  pending?: string;
}) {
  if (src) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-[#071422]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(min-width: 768px) 640px, 100vw" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden bg-[#071422]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 28% 40%, rgba(31, 107, 255, 0.38), transparent 56%), radial-gradient(circle at 74% 68%, rgba(0, 216, 240, 0.16), transparent 48%)",
        }}
      />
      <p className="absolute bottom-4 left-5 text-[11px] tracking-[0.2em] text-cyan/80 uppercase">{pending}</p>
    </div>
  );
}
