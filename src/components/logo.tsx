import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "cream" | "ink";
  showWordmark?: boolean;
};

/** Brand mark: interlocking CC monogram + optional wordmark. */
export function Logo({
  className,
  tone = "cream",
  showWordmark = true,
}: LogoProps) {
  const fill = tone === "cream" ? "#F2EDE4" : "#0B0B0B";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={showWordmark ? "0 0 520 320" : "0 0 520 210"}
      fill="none"
      role="img"
      aria-label="Cayla Cook"
      className={cn("overflow-visible", className)}
    >
      {/* Interlocking mirrored C monogram */}
      <g fill={fill}>
        <path d="M208 22c-60 0-109 49-109 109s49 109 109 109c34 0 64.5-14.8 85.5-38.2l-29.5-27.2C249 192.5 230 202 208 202c-39.2 0-71-31.8-71-71s31.8-71 71-71c22 0 41 9.5 54.5 24.6l29.5-27.2C272.5 36.8 242 22 208 22z" />
        <path d="M312 22c60 0 109 49 109 109s-49 109-109 109c-34 0-64.5-14.8-85.5-38.2l29.5-27.2c15 17.9 34 27.4 56 27.4 39.2 0 71-31.8 71-71s-31.8-71-71-71c-22 0-41 9.5-54.5 24.6l-29.5-27.2C247.5 36.8 278 22 312 22z" />
      </g>

      {showWordmark ? (
        <>
          <text
            x="260"
            y="268"
            textAnchor="middle"
            fill={fill}
            fontFamily="var(--font-display), Georgia, 'Times New Roman', serif"
            fontSize="30"
            letterSpacing="16"
            fontWeight="500"
          >
            CAYLA COOK
          </text>
          <line
            x1="118"
            y1="286"
            x2="232"
            y2="286"
            stroke={fill}
            strokeWidth="1.35"
          />
          <line
            x1="288"
            y1="286"
            x2="402"
            y2="286"
            stroke={fill}
            strokeWidth="1.35"
          />
        </>
      ) : null}
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "cream",
}: {
  className?: string;
  tone?: "cream" | "ink";
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <span
      className={cn(
        "font-display text-[0.7rem] font-medium tracking-[0.42em] uppercase sm:text-xs",
        color,
        className,
      )}
    >
      Cayla Cook
    </span>
  );
}
