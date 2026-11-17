import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** full lockup vs monogram-only mark */
  variant?: "full" | "mark";
  priority?: boolean;
};

/** Official Cayla Cook logo artwork. */
export function Logo({
  className,
  variant = "full",
  priority = false,
}: LogoProps) {
  const isMark = variant === "mark";

  return (
    <Image
      src={isMark ? "/brand/logo-mark.png" : "/brand/logo.png"}
      alt="Cayla Cook"
      width={isMark ? 648 : 1774}
      height={isMark ? 432 : 887}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}

export function Wordmark({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-[0.7rem] font-medium tracking-[0.42em] text-cream uppercase sm:text-xs",
        className,
      )}
    >
      Cayla Cook
    </span>
  );
}
