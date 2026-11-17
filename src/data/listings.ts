export type Listing = {
  id: string;
  name: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  status: "Available" | "Coming Soon" | "Under Contract";
};

/** Sample homes for layout preview — replace with live MLS listings. */
export const listings: Listing[] = [
  {
    id: "willow-ridge",
    name: "Willow Ridge Residence",
    location: "Franklin, TN",
    price: "$2,450,000",
    beds: 5,
    baths: 4.5,
    sqft: "4,820",
    image: "/images/listing-1.jpg",
    status: "Available",
  },
  {
    id: "cedar-court",
    name: "Cedar Court Modern",
    location: "Brentwood, TN",
    price: "$1,875,000",
    beds: 4,
    baths: 3.5,
    sqft: "3,640",
    image: "/images/listing-2.jpg",
    status: "Coming Soon",
  },
  {
    id: "lake-terrace",
    name: "Lake Terrace Estate",
    location: "Hendersonville, TN",
    price: "$3,200,000",
    beds: 6,
    baths: 5,
    sqft: "5,410",
    image: "/images/listing-3.jpg",
    status: "Under Contract",
  },
];
