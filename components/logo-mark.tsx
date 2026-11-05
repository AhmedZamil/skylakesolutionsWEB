import Image from "next/image";

const spots = {
  mark: [
    { x: "50%", y: "13.4%" },
    { x: "76%", y: "50.5%" },
    { x: "50%", y: "84.1%" },
    { x: "23.8%", y: "50.5%" },
  ],
  logo: [
    { x: "50%", y: "10.8%" },
    { x: "68.8%", y: "35%" },
    { x: "50%", y: "57%" },
    { x: "31%", y: "35%" },
  ],
} as const;

export function LogoMark({
  variant,
  className,
  priority = false,
}: {
  variant: "mark" | "logo";
  className: string;
  priority?: boolean;
}) {
  const src = variant === "mark" ? "/mark.jpg" : "/logo.jpg";
  const size = variant === "mark" ? "w-[26%]" : "w-[15%]";
  return (
    <span className={`relative inline-block ${className}`}>
      <Image
        src={src}
        alt=""
        width={variant === "mark" ? 420 : 580}
        height={variant === "mark" ? 320 : 490}
        priority={priority}
        className="h-full w-auto mix-blend-screen"
      />
      <span className="pointer-events-none absolute inset-0" aria-hidden="true">
        {spots[variant].map((spot, index) => (
          <svg
            key={`${spot.x}-${spot.y}`}
            viewBox="0 0 24 24"
            className={`hex-glow absolute -translate-x-1/2 -translate-y-1/2 ${size}`}
            style={{ left: spot.x, top: spot.y, animationDelay: `${index * 0.6}s` }}
          >
            <polygon points="12,1.5 21.5,7 21.5,17 12,22.5 2.5,17 2.5,7" fill="#7ee7f5" />
          </svg>
        ))}
      </span>
    </span>
  );
}
