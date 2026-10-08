export interface CouncilWasteInfo {
  councilName: string;
  councilWebsite: string;
  bulkyWasteInfo: string;
  recyclingCentre: string;
  recyclingCentreAddress: string;
}

export interface Location {
  slug: string;
  name: string;
  county: string;
  postcodeAreas: string[];
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  /** Distance from Welwyn Garden City in miles */
  distanceFromBase: number;
  /** Nearby landmarks or areas for local flavour */
  landmarks: string[];
  /** Local-specific FAQ items */
  faqs: { question: string; answer: string }[];
  /** Latitude / longitude for map embeds & structured data */
  coordinates: { lat: number; lng: number };
  /** Council waste disposal information */
  councilWaste: CouncilWasteInfo;
}

export const locations: Location[] = [
  {
    slug: "stevenage",
    name: "Stevenage",
    county: "Hertfordshire",
    postcodeAreas: ["SG1", "SG2"],
    description:
      "Herts Man With A Van provides trusted, fully insured removals in Stevenage and surrounding areas. Whether you're moving from the Old Town, Pin Green, Shephall, or Bedwell, our experienced team delivers fast, reliable service at competitive prices.",
    metaTitle:
      "Removals in Stevenage | Man With A Van Stevenage | Herts Man With A Van",
    metaDescription:
      "Looking for reliable removals in Stevenage? Herts Man With A Van offers fully insured house & office removals, single-item moves, and same-day service across SG1 & SG2.",
    heroHeading: "Trusted Removals Service in Stevenage",
    heroDescription:
      "Herts Man With A Van is your local, fully insured removals company serving Stevenage. From single items to complete house and office moves, we deliver fast, careful, and affordable removals you can rely on.",
    distanceFromBase: 7,
    landmarks: [
      "Stevenage Old Town",
      "The Forum",
      "Fairlands Valley Park",
      "Stevenage Leisure Centre",
      "Lister Hospital",
    ],
    coordinates: { lat: 51.9022, lng: -0.2018 },
    councilWaste: {
      councilName: "Stevenage Borough Council",
      councilWebsite: "https://www.stevenage.gov.uk",
      bulkyWasteInfo: "Stevenage Borough Council offers a bulky waste collection service for items such as sofas, mattresses, fridges, and washing machines. Collections typically cost around £30–£40 depending on the number of items and can be booked online or by calling the council. This is far cheaper than using a private clearance company.",
      recyclingCentre: "Stevenage Household Waste Recycling Centre",
      recyclingCentreAddress: "Caxton Way, Stevenage SG1 2DF — free for Hertfordshire residents, open 7 days a week. Accepts furniture, electrical items, garden waste, wood, metal, and much more. You may need to book a slot in advance at hertfordshire.gov.uk.",
    },
    faqs: [
      {
        question: "How much does a man with a van cost in Stevenage?",
        answer:
          "Prices depend on the size of the job, distance, and time required. We offer free, no-obligation quotes — just call us on 07479 645823 or fill in our contact form for a personalised price.",
      },
      {
        question: "Do you cover all areas of Stevenage?",
        answer:
          "Yes! We cover the entire Stevenage area including the Old Town, Pin Green, Shephall, Bedwell, Symonds Green, Chells, and all SG1/SG2 postcodes.",
      },
      {
        question: "Can you do same-day removals in Stevenage?",
        answer:
          "We offer same-day service subject to availability. Give us a call and we can often accommodate last-minute moves in Stevenage.",
      },
      {
        question: "Are your removals in Stevenage fully insured?",
        answer:
          "Absolutely. We carry full goods-in-transit insurance and public liability cover, so your belongings are protected throughout the entire move.",
      },
    ],
  },
  {
    slug: "welwyn-garden-city",
    name: "Welwyn Garden City",
    county: "Hertfordshire",
    postcodeAreas: ["AL7", "AL8"],
    description:
      "Based in Welwyn Garden City, Herts Man With A Van is your local removals expert. We know every road, estate, and neighbourhood in WGC — from Panshanger and Peartree to Handside and Woodhall.",
    metaTitle:
      "Removals in Welwyn Garden City | Man With A Van WGC | Herts Man With A Van",
    metaDescription:
      "Local removals experts based in Welwyn Garden City. Fully insured house moves, office relocations, and single-item pickups across AL7 & AL8. Call 07479 645823.",
    heroHeading: "Your Local Removals Company in Welwyn Garden City",
    heroDescription:
      "Based right here in Welwyn Garden City, Herts Man With A Van offers fast, fully insured removals for homes and businesses. From Panshanger to Peartree, we're your trusted local mover.",
    distanceFromBase: 0,
    landmarks: [
      "Howard Centre",
      "Panshanger Park",
      "Gosling Sports Park",
      "Campus West",
      "Stanborough Park",
    ],
    coordinates: { lat: 51.8014, lng: -0.2066 },
    councilWaste: {
      councilName: "Welwyn Hatfield Borough Council",
      councilWebsite: "https://www.welhat.gov.uk",
      bulkyWasteInfo: "Welwyn Hatfield Borough Council offers a bulky waste collection service for items like sofas, beds, mattresses, fridges, and washing machines. The service typically costs around £35 for up to three large items. You can book online at welhat.gov.uk or call the council directly. Items are collected from outside your property on a scheduled day.",
      recyclingCentre: "Cole Green Household Waste Recycling Centre",
      recyclingCentreAddress: "Cole Green Lane, Welwyn Garden City AL7 4AQ — free for all Hertfordshire residents. Accepts furniture, electrical items, garden waste, textiles, and more. You may need to book a slot online in advance at hertfordshire.gov.uk.",
    },
    faqs: [
      {
        question: "Where are you based in Welwyn Garden City?",
        answer:
          "We're based at 134 Oakdale, Welwyn Garden City AL8 7QX — right in the heart of WGC. Being local means faster service and lower costs for our neighbours.",
      },
      {
        question: "How quickly can you do a move in Welwyn Garden City?",
        answer:
          "As we're based in WGC, we can often arrange same-day or next-day moves. Call us on 07479 645823 and we'll do our best to fit you in.",
      },
      {
        question: "Do you cover all WGC postcodes?",
        answer:
          "Yes — we cover every part of Welwyn Garden City including AL7 and AL8 postcodes, from Panshanger and Peartree to Handside and Woodhall.",
      },
      {
        question: "Can you help with a small single-item move in WGC?",
        answer:
          "Absolutely. We handle everything from single sofas and washing machines to full house moves. No job is too small.",
      },
    ],
  },
  {
    slug: "hatfield",
    name: "Hatfield",
    county: "Hertfordshire",
    postcodeAreas: ["AL9", "AL10"],
    description:
      "Need a reliable removals service in Hatfield? Herts Man With A Van covers all areas of Hatfield including Old Hatfield, Birchwood, Roe Green, and the University of Hertfordshire campus.",
    metaTitle:
      "Removals in Hatfield | Man With A Van Hatfield | Herts Man With A Van",
    metaDescription:
      "Affordable and insured removals in Hatfield. House moves, office relocations, and student moves near the University of Hertfordshire. Free quotes — call 07479 645823.",
    heroHeading: "Reliable Removals Service in Hatfield",
    heroDescription:
      "Herts Man With A Van provides fast, fully insured removals in Hatfield. Whether you're a student near the University of Hertfordshire or a family in Old Hatfield, we make moving simple.",
    distanceFromBase: 5,
    landmarks: [
      "Hatfield House",
      "Galleria Shopping Centre",
      "University of Hertfordshire",
      "Hatfield Town Centre",
      "Mill Green Museum",
    ],
    coordinates: { lat: 51.7635, lng: -0.2283 },
    councilWaste: {
      councilName: "Welwyn Hatfield Borough Council",
      councilWebsite: "https://www.welhat.gov.uk",
      bulkyWasteInfo: "Hatfield falls under Welwyn Hatfield Borough Council, which offers a bulky waste collection service for items such as sofas, beds, mattresses, and white goods. The service typically costs around £35 for up to three large items. Book online at welhat.gov.uk or by phone.",
      recyclingCentre: "Cole Green Household Waste Recycling Centre",
      recyclingCentreAddress: "Cole Green Lane, Welwyn Garden City AL7 4AQ — the nearest HWRC for Hatfield residents. Free for Hertfordshire residents. Accepts furniture, electrical items, garden waste, textiles, and more.",
    },
    faqs: [
      {
        question: "Do you offer student removals in Hatfield?",
        answer:
          "Yes! We regularly help students moving to and from the University of Hertfordshire. Our affordable single-item and small-load service is perfect for student moves.",
      },
      {
        question: "How far is Hatfield from your base?",
        answer:
          "We're local to the Hatfield area, so we can offer fast response times and competitive prices for Hatfield moves.",
      },
      {
        question: "Do you cover all parts of Hatfield?",
        answer:
          "Yes — Old Hatfield, Birchwood, Roe Green, South Hatfield, and all AL9/AL10 postcodes are fully covered.",
      },
      {
        question: "Can you move furniture from the Galleria area?",
        answer:
          "Of course! We regularly collect and deliver items across the Hatfield area, including near the Galleria Shopping Centre and surrounding estates.",
      },
    ],
  },
  {
    slug: "hertford",
    name: "Hertford",
    county: "Hertfordshire",
    postcodeAreas: ["SG13", "SG14"],
    description:
      "Herts Man With A Van provides professional removals in the historic town of Hertford. From Bengeo to Hertford Heath, we offer insured moves at affordable prices.",
    metaTitle:
      "Removals in Hertford | Man With A Van Hertford | Herts Man With A Van",
    metaDescription:
      "Professional removals in Hertford, Hertfordshire. Fully insured house & office moves across SG13 & SG14. Trusted since 2017. Call 07479 645823 for a free quote.",
    heroHeading: "Professional Removals in Hertford",
    heroDescription:
      "Moving in or out of Hertford? Herts Man With A Van offers fully insured, affordable removals across the county town. From Bengeo to the town centre, we've got you covered.",
    distanceFromBase: 6,
    landmarks: [
      "Hertford Castle",
      "Hertford Theatre",
      "Hartham Common",
      "Bengeo",
      "Hertford East Station",
    ],
    coordinates: { lat: 51.7966, lng: -0.0783 },
    councilWaste: {
      councilName: "East Hertfordshire District Council",
      councilWebsite: "https://www.eastherts.gov.uk",
      bulkyWasteInfo: "East Hertfordshire District Council provides a bulky waste collection service for Hertford residents. You can typically have up to three items collected for around £40. Items accepted include furniture, mattresses, and white goods. Book through eastherts.gov.uk or by phone.",
      recyclingCentre: "Ware Household Waste Recycling Centre",
      recyclingCentreAddress: "Westmill, Ware SG12 0EE (off the A10) — the nearest HWRC for Hertford residents. Free for Hertfordshire residents. Accepts most household items including furniture, electrical waste, and garden waste.",
    },
    faqs: [
      {
        question: "Do you cover all areas of Hertford?",
        answer:
          "Yes, we cover the whole of Hertford including Bengeo, Hertford Heath, Hertingfordbury, and all SG13/SG14 postcodes.",
      },
      {
        question: "How much does a removal in Hertford cost?",
        answer:
          "Every job is different. Contact us for a free, no-obligation quote tailored to your specific move. Call 07479 645823 or use our online form.",
      },
      {
        question: "Can you navigate Hertford's narrow streets?",
        answer:
          "Absolutely. Our clean, professional van is sized perfectly for both main roads and narrower town-centre streets that larger lorries can't access.",
      },
      {
        question: "Do you offer weekend removals in Hertford?",
        answer:
          "Yes! We operate Monday to Sunday, 08:00–18:00, so we can fit around your schedule including weekends.",
      },
    ],
  },
  {
    slug: "st-albans",
    name: "St Albans",
    county: "Hertfordshire",
    postcodeAreas: ["AL1", "AL2", "AL3", "AL4"],
    description:
      "Looking for a man with a van in St Albans? Herts Man With A Van provides fully insured removals across the cathedral city — from Marshalswick to London Colney and everywhere in between.",
    metaTitle:
      "Removals in St Albans | Man With A Van St Albans | Herts Man With A Van",
    metaDescription:
      "Fully insured removals in St Albans. House moves, office relocations & more across AL1–AL4. Trusted Hertfordshire removals company. Call 07479 645823.",
    heroHeading: "Insured Removals Service in St Albans",
    heroDescription:
      "Herts Man With A Van offers reliable, fully insured removals throughout St Albans. From Marshalswick to London Colney, we provide careful, efficient moves at competitive prices.",
    distanceFromBase: 12,
    landmarks: [
      "St Albans Cathedral",
      "Verulamium Park",
      "The Maltings Shopping Centre",
      "St Albans City Station",
      "Clarence Park",
    ],
    coordinates: { lat: 51.7519, lng: -0.3362 },
    councilWaste: {
      councilName: "St Albans City & District Council",
      councilWebsite: "https://www.stalbans.gov.uk",
      bulkyWasteInfo: "St Albans City & District Council offers bulky waste collections for residents. Costs are typically around £35–£45 for up to three items. They collect sofas, beds, mattresses, fridges, freezers, and other large items. Book online at stalbans.gov.uk or by phone.",
      recyclingCentre: "St Albans Household Waste Recycling Centre",
      recyclingCentreAddress: "Civic Close, St Albans AL1 3LD — open daily, free for Hertfordshire residents. Accepts furniture, electrical items, metals, wood, garden waste, and more. Items containing refrigerant gas are handled here with specialist equipment.",
    },
    faqs: [
      {
        question: "How long does a move from St Albans take?",
        answer:
          "It depends on the size of the job. A single-item pickup might take under an hour, while a full house move could take half a day. We'll give you an accurate time estimate with your free quote.",
      },
      {
        question: "Do you cover London Colney and Park Street?",
        answer:
          "Yes, we cover all areas within the St Albans district including London Colney, Park Street, Marshalswick, Fleetville, and all AL1–AL4 postcodes.",
      },
      {
        question: "Can you move items to/from St Albans on the same day?",
        answer:
          "We offer same-day service subject to availability. We regularly serve St Albans and can often fit in same-day requests.",
      },
      {
        question: "Is there parking for the van in St Albans city centre?",
        answer:
          "We're experienced with city-centre moves in St Albans. We'll discuss access and parking during the quoting process and can arrange permits if needed.",
      },
    ],
  },
  {
    slug: "hitchin",
    name: "Hitchin",
    county: "Hertfordshire",
    postcodeAreas: ["SG4", "SG5"],
    description:
      "Herts Man With A Van offers professional removals in Hitchin. From the Market Place to Westmill, we provide insured, affordable man-and-van services throughout the town.",
    metaTitle:
      "Removals in Hitchin | Man With A Van Hitchin | Herts Man With A Van",
    metaDescription:
      "Trusted man with a van in Hitchin. Fully insured removals for homes and businesses across SG4 & SG5. Free quotes — call 07479 645823.",
    heroHeading: "Affordable Removals in Hitchin",
    heroDescription:
      "Need a removal in Hitchin? Herts Man With A Van provides fast, fully insured moves for homes and businesses. From single items to full house moves, we've got Hitchin covered.",
    distanceFromBase: 12,
    landmarks: [
      "Hitchin Market Place",
      "Hitchin Lavender",
      "St Mary's Church",
      "Bancroft Gardens",
      "Hitchin Town Centre",
    ],
    coordinates: { lat: 51.9469, lng: -0.2838 },
    councilWaste: {
      councilName: "North Hertfordshire District Council",
      councilWebsite: "https://www.north-herts.gov.uk",
      bulkyWasteInfo: "North Hertfordshire District Council provides bulky waste collections for Hitchin residents. Booking is available at north-herts.gov.uk and costs are typically around £30–£40 for a collection of up to three items. Accepted items include furniture, mattresses, and white goods.",
      recyclingCentre: "Letchworth Household Waste Recycling Centre",
      recyclingCentreAddress: "Blackhorse Road, Letchworth Garden City SG6 1HB — the nearest HWRC for Hitchin residents. Free for Hertfordshire residents. Accepts furniture, carpets, mattresses, electrical waste, and more.",
    },
    faqs: [
      {
        question: "Do you cover all of Hitchin?",
        answer:
          "Yes — we cover every part of Hitchin including Westmill, Walsworth, Ickleford, and all SG4/SG5 postcodes.",
      },
      {
        question: "How much is a man with a van in Hitchin?",
        answer:
          "Prices vary based on job size and distance. Call 07479 645823 or use our contact form for a free, no-obligation quote.",
      },
      {
        question: "Can you help with a house clearance in Hitchin?",
        answer:
          "Yes! We're members of the UK House Clearance Association and can help with full or partial house clearances in Hitchin.",
      },
      {
        question: "Do you offer packing services in Hitchin?",
        answer:
          "Absolutely. We offer professional packing services using high-quality materials to protect your belongings during the move.",
      },
    ],
  },
  {
    slug: "letchworth",
    name: "Letchworth Garden City",
    county: "Hertfordshire",
    postcodeAreas: ["SG6"],
    description:
      "Herts Man With A Van provides reliable removals in Letchworth Garden City. Whether you're moving within the world's first garden city or heading further afield, we deliver insured, hassle-free moves.",
    metaTitle:
      "Removals in Letchworth | Man With A Van Letchworth | Herts Man With A Van",
    metaDescription:
      "Reliable removals in Letchworth Garden City. Fully insured man with a van service for homes & offices in SG6. Call 07479 645823 for a free quote.",
    heroHeading: "Reliable Removals in Letchworth Garden City",
    heroDescription:
      "From the world's first garden city to anywhere in the UK — Herts Man With A Van provides fully insured, professional removals in Letchworth. Affordable prices, careful service.",
    distanceFromBase: 14,
    landmarks: [
      "Broadway Gardens",
      "Standalone Farm",
      "Letchworth Town Centre",
      "Norton Common",
      "The Spirella Building",
    ],
    coordinates: { lat: 51.9782, lng: -0.2268 },
    councilWaste: {
      councilName: "North Hertfordshire District Council",
      councilWebsite: "https://www.north-herts.gov.uk",
      bulkyWasteInfo: "Letchworth Garden City falls under North Hertfordshire District Council, which provides bulky waste collections. Costs are typically around £30–£40 for up to three items. Book at north-herts.gov.uk or by phone. Items accepted include furniture, mattresses, and white goods.",
      recyclingCentre: "Letchworth Household Waste Recycling Centre",
      recyclingCentreAddress: "Blackhorse Road, Letchworth Garden City SG6 1HB — conveniently located for Letchworth residents. Free for Hertfordshire residents. Accepts furniture, carpets, mattresses, electrical waste, garden waste, and more.",
    },
    faqs: [
      {
        question: "Do you serve all of Letchworth Garden City?",
        answer:
          "Yes — we cover all areas of Letchworth Garden City including Jackmans, Grange, and all SG6 postcodes.",
      },
      {
        question: "How far is Letchworth from your base?",
        answer:
          "We regularly serve the Letchworth area and it's a convenient location for us to cover, keeping prices affordable.",
      },
      {
        question: "Can you do an office move in Letchworth?",
        answer:
          "Yes! We handle commercial moves of all sizes, from small office relocations to larger business moves. We can work around your schedule to minimise disruption.",
      },
      {
        question: "Do you provide free quotes for Letchworth moves?",
        answer:
          "Of course. Every quote is free with no obligation. Just call 07479 645823 or fill in our contact form.",
      },
    ],
  },
  {
    slug: "potters-bar",
    name: "Potters Bar",
    county: "Hertfordshire",
    postcodeAreas: ["EN6"],
    description:
      "Herts Man With A Van covers Potters Bar and the surrounding area with reliable, fully insured removals. From Darkes Lane to South Mimms, we make moving stress-free.",
    metaTitle:
      "Removals in Potters Bar | Man With A Van Potters Bar | Herts Man With A Van",
    metaDescription:
      "Professional removals in Potters Bar, Hertfordshire. Fully insured man with a van for house moves, deliveries & office moves in EN6. Call 07479 645823.",
    heroHeading: "Professional Removals in Potters Bar",
    heroDescription:
      "Herts Man With A Van provides fast, fully insured removals across Potters Bar. Whether you're moving locally or further afield, we deliver a careful, reliable service every time.",
    distanceFromBase: 12,
    landmarks: [
      "Potters Bar Town Centre",
      "South Mimms Services",
      "Gobions Woodland Trust",
      "Wyllyotts Theatre",
      "Potters Bar Station",
    ],
    coordinates: { lat: 51.6936, lng: -0.1721 },
    councilWaste: {
      councilName: "Hertsmere Borough Council",
      councilWebsite: "https://www.hertsmere.gov.uk",
      bulkyWasteInfo: "Potters Bar residents can use Hertsmere Borough Council's bulky waste collection service. Prices are typically around £35 for up to three items. Bookings can be made at hertsmere.gov.uk or by phone. Accepted items include sofas, beds, mattresses, fridges, and other large household items.",
      recyclingCentre: "Potters Bar Household Waste Recycling Centre",
      recyclingCentreAddress: "Cranborne Road, Potters Bar EN6 3JN — free for Hertfordshire residents. Accepts furniture, electrical waste, garden waste, wood, metal, textiles, and much more.",
    },
    faqs: [
      {
        question: "Do you cover Potters Bar and South Mimms?",
        answer:
          "Yes, we cover all of Potters Bar including South Mimms, Brookmans Park, and all EN6 postcodes.",
      },
      {
        question: "Can you do a removal to or from London from Potters Bar?",
        answer:
          "Absolutely. Potters Bar sits right on the Herts/London border and we regularly move people to and from London. We cover all of the UK.",
      },
      {
        question: "Are you insured for removals in Potters Bar?",
        answer:
          "Yes — we carry full goods-in-transit insurance and are proud members of the Road Haulage Association.",
      },
      {
        question: "How do I book a removal in Potters Bar?",
        answer:
          "Simply call us on 07479 645823 or fill in our online contact form. We'll arrange a free quote and find a time that suits you.",
      },
    ],
  },
];

/** Helper to find a location by slug */
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/** All slugs for static generation */
export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
