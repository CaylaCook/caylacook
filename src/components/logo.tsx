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
      width={isMark ? 696 : 1248}
      height={isMark ? 502 : 696}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
