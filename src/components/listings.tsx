import Image from "next/image";
import { listings, type ListingStatus } from "@/data/listings";

const statusClass: Record<ListingStatus, string> = {
  "For Sale": "bg-ink text-cream",
  "For Lease": "border border-ink text-ink",
  Sold: "bg-ink/10 text-ink/65",
};

export function Listings() {
  return (
    <section id="homes" className="bg-parchment text-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-xl">
          <p className="font-sans text-[0.7rem] tracking-[0.32em] text-ink/55 uppercase">
            Featured homes
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Spaces with presence
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-ink/70">
            Homes on the market now, and recent sales across Nashville and
            Franklin.
          </p>
        </div>

        <ul className="mt-14 grid list-none gap-12 p-0 sm:gap-16">
          {listings.map((home, index) => (
            <li
              key={home.id}
              className="group grid items-center gap-6 md:grid-cols-12 md:gap-10"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                {home.href ? (
                  <a
                    href={home.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0"
                  >
                    <Image
                      src={home.image}
                      alt={`${home.name}, ${home.location}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </a>
                ) : (
                  <Image
                    src={home.image}
                    alt={`${home.name}, ${home.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                )}
              </div>

              <div
                className={`md:col-span-5 ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p
                    className={`inline-flex items-center px-2.5 py-1 font-sans text-[0.65rem] tracking-[0.28em] uppercase ${statusClass[home.status]}`}
                  >
                    {home.status}
                  </p>
                  {home.closed ? (
                    <p className="font-sans text-xs tracking-wide text-ink/55">
                      {home.closed}
                    </p>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                  {home.href ? (
                    <a
                      href={home.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-opacity hover:opacity-70"
                    >
                      {home.name}
                    </a>
                  ) : (
                    home.name
                  )}
                </h3>
                <p className="mt-2 font-sans text-sm tracking-wide text-ink/65">
                  {home.location}
                </p>
                {home.mls ? (
                  <p className="mt-1 font-sans text-xs tracking-[0.16em] text-ink/45 uppercase">
                    MLS {home.mls}
                  </p>
                ) : null}
                <p className="mt-6 font-display text-2xl text-ink">{home.price}</p>
                <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-sans text-sm text-ink/70">
                  <div>
                    <dt className="sr-only">Bedrooms</dt>
                    <dd>{home.beds} beds</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Bathrooms</dt>
                    <dd>{home.baths} baths</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Square feet</dt>
                    <dd>{home.sqft} sq ft</dd>
                  </div>
                </dl>
                <a
                  href="#contact"
                  className="mt-8 inline-flex border-b border-ink/30 pb-1 font-sans text-xs tracking-[0.24em] text-ink uppercase transition-colors hover:border-ink"
                >
                  Inquire
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
