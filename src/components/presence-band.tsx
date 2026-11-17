import Image from "next/image";

export function PresenceBand() {
  return (
    <section aria-label="Cayla in home" className="relative bg-ink">
      <div className="relative h-[52vw] max-h-[580px] min-h-[280px] w-full overflow-hidden">
        <Image
          src="/images/cayla-dining.jpg"
          alt="Cayla Cook at a dining table in a contemporary home"
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
          <p className="max-w-lg font-display text-2xl leading-snug text-cream sm:text-3xl md:text-4xl">
            Middle Tennessee homes with presence — and a realtor who knows how
            to present them.
          </p>
        </div>
      </div>
    </section>
  );
}
