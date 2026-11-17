export type ListingStatus = "For Sale" | "For Lease" | "Sold";

export type Listing = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  status: ListingStatus;
  /** External listing page, when one is public. */
  href?: string;
  mls?: string;
  /** Closed date for sold homes, e.g. "August 14, 2026". */
  closed?: string;
};

/** Current listings first, then recent sales. */
export const listings: Listing[] = [
  {
    id: "717-cottage-park",
    name: "717 Cottage Park Dr",
    location: "Nashville, TN 37207",
    price: "$385,000",
    beds: 2,
    baths: 2.5,
    sqft: "1,588",
    image: "/images/717-cottage-park.jpg",
    status: "For Sale",
    mls: "3612736",
    href: "https://www.realtracs.com/listings/7631542/address/717-cottage-park-dr-nashville-tn-37207",
  },
  {
    id: "436-merritt-ave",
    name: "436 Merritt Ave",
    location: "Wedgewood-Houston, Nashville, TN 37203",
    price: "$3,550/mo",
    beds: 3,
    baths: 3.5,
    sqft: "1,743",
    image: "/images/436-merritt-ave.jpg",
    status: "For Lease",
    mls: "3626712",
    href: "https://www.realtracs.com/listings/7683403/address/436-merritt-ave-nashville-tn-37203",
  },
  {
    id: "407-mealer-st",
    name: "407 Mealer St",
    location: "Franklin, TN 37067",
    price: "$1,465,000",
    beds: 4,
    baths: 4.5,
    sqft: "4,313",
    image: "/images/407-mealer-st.jpg",
    status: "Sold",
    closed: "August 14, 2026",
  },
  {
    id: "5606-morrow-rd",
    name: "5606 Morrow Rd",
    location: "Nashville, TN 37209",
    price: "$579,900",
    beds: 3,
    baths: 3.5,
    sqft: "1,974",
    image: "/images/5606-morrow-rd.jpg",
    status: "Sold",
    closed: "April 27, 2026",
  },
  {
    id: "2066-nashboro-blvd",
    name: "2066 Nashboro Blvd",
    location: "Nashville, TN 37217",
    price: "$309,500",
    beds: 3,
    baths: 2.5,
    sqft: "1,488",
    image: "/images/2066-nashboro-blvd.jpg",
    status: "Sold",
    closed: "April 24, 2026",
  },
];
