export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  content: BlogSection[];
}

export interface BlogSection {
  heading?: string;
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ultimate-guide-to-moving-home-in-hertfordshire",
    title: "The Ultimate Guide to Moving Home in Hertfordshire",
    excerpt:
      "Moving home is one of life's biggest events. This step-by-step guide covers everything from setting a timeline to settling into your new Hertfordshire home — with local tips you won't find elsewhere.",
    metaTitle:
      "Guide to Moving Home in Hertfordshire | Moving Tips | Herts Man With A Van",
    metaDescription:
      "Complete guide to moving home in Hertfordshire. Timeline, checklists, local council tips, and practical advice from Herts Man With A Van.",
    date: "2025-11-15",
    readTime: "8 min read",
    category: "Moving Guide",
    image: "/assets/images/about-furniture.jpg",
    imageAlt: "Family moving home in Hertfordshire",
    content: [
      {
        heading: "Start Planning Early — At Least 8 Weeks Out",
        body: "The biggest mistake we see as a removals company is people leaving everything to the last minute. Ideally, you want to start planning your move at least eight weeks before your moving date. Create a timeline and work backwards from moving day.\n\nStart by decluttering room by room. Be ruthless — if you haven't used something in the past year, it's probably not worth paying to move it. You'll save money on your removal because fewer items means fewer trips and less time loading. Plus, you can sell unwanted items on Facebook Marketplace or Gumtree to put some cash back in your pocket.",
      },
      {
        heading: "6 Weeks Before: Get Your Quotes and Book Early",
        body: "Don't leave booking your removals company until the last week. Good companies get booked up, especially at the end of the month and during summer. Get at least two or three quotes so you can compare. When you call us at Herts Man With A Van on 01438 500156, we'll give you a free, no-obligation quote over the phone — no need for a survey for most jobs.\n\nAt this stage, you should also start notifying important services of your address change: your bank, GP, dentist, DVLA, employers, and HMRC. It's easy to forget, so keep a running list on your phone.",
      },
      {
        heading: "4 Weeks Before: Start Packing Non-Essentials",
        body: "Start with rooms and items you don't use every day — loft contents, spare bedrooms, books, ornaments, and seasonal clothes. Label every box clearly on the top and at least one side with the room it belongs to and a brief description of contents. Trust us, you'll thank yourself on the other end.\n\nIf you don't fancy packing yourself, we offer a professional packing service. We bring all the materials — boxes, bubble wrap, packing paper, and tape — and we'll pack everything carefully so it's protected during transit.",
      },
      {
        heading: "2 Weeks Before: Utilities, Post, and the Final Push",
        body: "Contact your energy suppliers, broadband provider, and water company to arrange disconnection at your old address and connection at your new one. Set up a Royal Mail redirect — it costs around £35 for three months but it's worth every penny to catch anything you've missed.\n\nIf you're in a flat or a property with restricted access, check whether you need a parking permit or bay suspension for the removal van. In areas like St Albans or Hertford town centre, parking can be tricky, so plan ahead. We can advise on this when you book with us.",
      },
      {
        heading: "Moving Day: Our Top Tips",
        body: "Strip beds first thing and put the bedding in labelled bags — you'll want to make up beds as soon as you arrive at your new place. Pack a \"first night\" box with essentials: kettle, mugs, tea bags, toilet roll, phone chargers, basic tools, and any medication. Keep it in your car so you can access it straight away.\n\nWe always recommend doing a final walkthrough of every room, including cupboards, the loft, garden shed, and garage. You'd be surprised how often people leave things behind. Check the meter readings at both properties and take photos for your records.\n\nFinally, if you have pets or small children, try to arrange for them to be looked after elsewhere on moving day. It reduces stress for everyone — including the movers!",
      },
      {
        heading: "After the Move: Settling Into Your New Home",
        body: "Unpack room by room, starting with the kitchen and bedrooms — these are the essentials. Don't feel pressured to unpack everything on day one. Get the basics sorted, order a takeaway, and give yourself a break.\n\nRegister with a new GP and dentist, update your address on the electoral roll, and check your council tax band. If you've moved within Hertfordshire, you may be in a different borough now — for example, moving from Stevenage (Stevenage Borough Council) to Welwyn Garden City (Welwyn Hatfield Borough Council) means different bin collection days and council services.",
      },
    ],
  },
  {
    slug: "how-to-pack-for-a-house-move",
    title: "How to Pack for a House Move: A Room-by-Room Guide",
    excerpt:
      "Packing is the most time-consuming part of any house move. This room-by-room guide shares professional tips we've learned from thousands of moves across Hertfordshire.",
    metaTitle:
      "How to Pack for a House Move | Packing Tips | Herts Man With A Van",
    metaDescription:
      "Professional packing tips for your house move. Room-by-room guide with advice on materials, fragile items, and common mistakes from Herts Man With A Van.",
    date: "2025-12-03",
    readTime: "7 min read",
    category: "Packing Tips",
    image: "/assets/images/packing-service.webp",
    imageAlt: "Professional packing for a house move",
    content: [
      {
        heading: "Gather Your Packing Materials First",
        body: "Before you start boxing anything up, make sure you have enough supplies. You'll need sturdy double-walled cardboard boxes (not flimsy ones from the supermarket — they collapse under weight), packing tape, bubble wrap, packing paper or newspaper, marker pens, and bin bags for soft items like bedding and clothes.\n\nFor an average three-bedroom house, expect to use around 30–40 boxes. You can buy boxes from us or from places like B&Q and Screwfix. Wardrobe boxes are brilliant for hanging clothes — they save ironing time and keep everything crease-free.\n\nTop tip: don't use black bin bags for packing. They look like rubbish and things can accidentally get thrown away on moving day.",
      },
      {
        heading: "Kitchen — The Trickiest Room",
        body: "The kitchen is where most breakages happen, so take extra care. Wrap each plate, bowl, and glass individually in packing paper or bubble wrap. Stack plates vertically in the box (like records, not like a stack of plates) — they're much less likely to break this way.\n\nPut heavier items like pans and casserole dishes at the bottom of boxes. Fill gaps with scrunched-up paper or tea towels so nothing shifts during transit. Don't forget to empty and defrost the fridge-freezer at least 24 hours before moving day.\n\nFor small appliances like the kettle and toaster, wrap them in bubble wrap and pack them in a separate box. Drain any water from the kettle first.",
      },
      {
        heading: "Living Room — Books, Electronics, and Fragile Items",
        body: "Books are deceptively heavy. Use small boxes and only fill them halfway — then top up with lighter items like cushion covers. A large box filled entirely with books will be almost impossible to lift safely.\n\nFor TVs and monitors, the original box is ideal. If you don't have it, wrap the screen in a blanket or bubble wrap and transport it upright. We carry blankets and straps in our van to secure large items.\n\nRemove batteries from remotes and game controllers to avoid leakage. Take photos of the back of your TV unit and router before unplugging cables — it makes reconnecting everything at the other end much easier.",
      },
      {
        heading: "Bedrooms — Clothes, Mattresses, and Wardrobes",
        body: "Drawers full of folded clothes can often stay in the chest of drawers — we'll just wrap the whole unit in blankets and secure the drawers with stretch wrap. This saves boxing up and unboxing all your clothes.\n\nFor hanging clothes, wardrobe boxes or simply bin bags pulled up over the hangers from the bottom work brilliantly — you can hang them straight back up at the other end.\n\nMattresses should ideally be covered. You can buy mattress bags cheaply online. For children's rooms, let them pack a small box of their favourite toys and books to keep them occupied during the move.",
      },
      {
        heading: "Bathroom and Toiletries",
        body: "Liquids are the danger zone. Put lids on tightly and then seal with tape or cling film before putting items in a waterproof bag. Pack them upright in a box and mark it clearly. Nobody wants shampoo all over their towels.\n\nMedicines and prescriptions should go in your \"first night\" box so they're always accessible. The same goes for any daily toiletries you'll need that evening.",
      },
      {
        heading: "Common Packing Mistakes to Avoid",
        body: "We've seen it all over the years. Here are the most common packing mistakes:\n\n• Overpacking boxes — if you can't lift it comfortably, it's too heavy. Aim for no more than 20kg per box.\n• Not labelling — you will forget what's in unlabelled boxes. Label the top and at least one side.\n• Packing items you should get rid of — don't pay to move things you don't want. Declutter before you pack.\n• Leaving everything to the night before — packing always takes longer than you think. Start early.\n• Forgetting to empty drawers of loose items — small items rattle around and can damage furniture. Remove anything loose.\n\nIf packing feels overwhelming, give us a call. Our packing service takes the stress out completely and we can pack a full house in a single day.",
      },
    ],
  },
  {
    slug: "how-to-get-rid-of-unwanted-furniture-in-hertfordshire",
    title:
      "How to Get Rid of Unwanted Furniture and Waste in Hertfordshire",
    excerpt:
      "Don't want to take everything with you? Here's a complete guide to getting rid of furniture, appliances, and household waste in Hertfordshire — including free and low-cost council services most people don't know about.",
    metaTitle:
      "How to Get Rid of Furniture in Hertfordshire | Council Waste Services | Herts Man With A Van",
    metaDescription:
      "Guide to disposing of unwanted furniture and waste in Hertfordshire. Council bulky waste collections, recycling centres, charity donations, and tips from Herts Man With A Van.",
    date: "2026-01-10",
    readTime: "9 min read",
    category: "Waste & Recycling",
    image: "/assets/images/removals-van.jpg",
    imageAlt: "Clearing unwanted items before a move",
    content: [
      {
        heading: "Why Decluttering Before a Move Saves You Money",
        body: "Every item you move costs time and space in the van. If you're paying for a removals service, fewer items means a faster move and potentially a lower price. Before your move, go through each room and separate items into four piles: keep, sell, donate, and dispose.\n\nWe always advise our customers to use their local council services for waste disposal rather than private waste companies — they're significantly cheaper and often provide collection right from your doorstep. Here's how each council in Hertfordshire handles bulky waste.",
      },
      {
        heading: "Welwyn Hatfield Borough Council (Welwyn Garden City & Hatfield)",
        body: "If you're in Welwyn Garden City or Hatfield, Welwyn Hatfield Borough Council offers a bulky waste collection service for items like sofas, mattresses, fridges, and washing machines. You can book online at welhat.gov.uk or call the council directly.\n\nThe service typically costs around £35 for up to three large items, which is far cheaper than hiring a private clearance company. Items are collected from outside your property on a scheduled day.\n\nAlternatively, Hertfordshire County Council runs a Household Waste Recycling Centre at Cole Green Lane (near Welwyn Garden City). It's free to use for Hertfordshire residents — you can drop off furniture, electrical items, garden waste, textiles, and much more. You may need to book a slot online in advance at hertfordshire.gov.uk.",
      },
      {
        heading: "Stevenage Borough Council",
        body: "Stevenage Borough Council runs its own bulky waste collection service. You can book a collection for items like furniture, white goods, and mattresses. The cost is typically around £30–£40 depending on the number of items. Book online at stevenage.gov.uk or call the council.\n\nStevenage also has a Household Waste Recycling Centre on Caxton Way, managed by Hertfordshire County Council. It accepts a wide range of waste including wood, metal, electrical items, and furniture. It's free for residents and is open seven days a week, though you may need to book a slot during busy periods.",
      },
      {
        heading: "East Hertfordshire District Council (Hertford Area)",
        body: "For residents in Hertford and the surrounding area, East Hertfordshire District Council provides a bulky waste collection service. You can typically have up to three items collected for around £40. Book through eastherts.gov.uk or by phone.\n\nThe nearest Household Waste Recycling Centre for Hertford residents is at Ware (Westmill), off the A10. It's free, accepts most household items, and is a good option if you have a car and several items to dispose of. Remember to take proof of your Hertfordshire address.",
      },
      {
        heading: "St Albans City & District Council",
        body: "St Albans City & District Council offers bulky waste collections for residents. You can book online at stalbans.gov.uk. Costs are typically around £35–£45 for up to three items. They'll collect sofas, beds, mattresses, fridges, freezers, and other large items.\n\nThere's a Household Waste Recycling Centre on Civic Close in St Albans, open daily. It's free for Hertfordshire residents and accepts furniture, electrical items, metals, wood, garden waste, and more. For anything containing refrigerant gas (fridges, freezers), the recycling centre is usually the best option as these need specialist handling.",
      },
      {
        heading: "North Hertfordshire District Council (Hitchin & Letchworth)",
        body: "If you're in Hitchin or Letchworth Garden City, North Hertfordshire District Council provides bulky waste collections. Booking is available at north-herts.gov.uk and the costs are typically around £30–£40 for a collection of up to three items.\n\nThe nearest Household Waste Recycling Centre for Hitchin is at Blackhorse Road, Letchworth. It's free and open to all Hertfordshire residents. It accepts a wide range of items including furniture, carpets, mattresses, and electrical waste.",
      },
      {
        heading: "Hertsmere Borough Council (Potters Bar)",
        body: "Potters Bar residents can use Hertsmere Borough Council's bulky waste collection service. Bookings can be made at hertsmere.gov.uk and prices are typically around £35 for up to three items.\n\nThe nearest Household Waste Recycling Centre is on Cranborne Road in Potters Bar. It's free for Hertfordshire residents and accepts furniture, electrical waste, garden waste, and much more.",
      },
      {
        heading: "Free Alternatives: Charity Donations and Freecycle",
        body: "Before you pay for disposal, consider whether your items could be reused. Charities like the British Heart Foundation, Emmaus, and local charity shops often collect furniture for free — especially if it's in reasonable condition.\n\nWebsites like Freecycle (freecycle.org) and the Facebook Marketplace \"Free\" section are great for giving away items locally. Post a photo and description, and often someone will come and collect within a day or two.\n\nFor electrical items in working condition, organisations like Restart Project and local repair cafés may be interested. If the item works, someone can use it.",
      },
      {
        heading: "What We Do and Don't Do",
        body: "At Herts Man With A Van, we focus on removals — moving your belongings from A to B safely and efficiently. We don't offer a waste disposal service, but we're always happy to advise our customers on the best and cheapest options for getting rid of items they don't want to take with them.\n\nOur experience is that the council services are by far the best value. A bulky waste collection for three items costs around £30–£40, while private waste removal companies can charge £100+ for the same job. And the Household Waste Recycling Centres across Hertfordshire are completely free.\n\nIf you need help working out what to keep and what to get rid of before your move, just ask us when you call for a quote. We're happy to help.",
      },
    ],
  },
  {
    slug: "tips-for-moving-with-pets-and-children",
    title: "Moving Home With Pets and Children: Stress-Free Tips",
    excerpt:
      "Moves are stressful enough without worrying about the kids and the dog. Here are our tried-and-tested tips for keeping everyone calm and happy on moving day.",
    metaTitle:
      "Moving With Pets & Children | Stress-Free Tips | Herts Man With A Van",
    metaDescription:
      "Practical tips for moving home with pets and children. Keep everyone safe, calm, and happy during your move with advice from Herts Man With A Van.",
    date: "2026-02-05",
    readTime: "6 min read",
    category: "Moving Guide",
    image: "/assets/images/hero-bg.jpg",
    imageAlt: "Family preparing for a home move",
    content: [
      {
        heading: "Moving Day Is Chaotic — Plan Around It",
        body: "Moving day involves doors propped open, heavy items being carried through hallways, and unfamiliar people in your home. This isn't ideal for small children, dogs, cats, or other pets. The single best piece of advice we give to families is: if at all possible, arrange for children and pets to spend moving day with a friend, family member, or childminder.\n\nIf that's not possible, designate one room as a \"safe zone\" — ideally the last room to be emptied — where children and pets can stay out of the way with some toys, snacks, and water.",
      },
      {
        heading: "Preparing Children for the Move",
        body: "Children can find moving unsettling, especially if they're leaving behind friends or a school. Talk to them early about the move and involve them in the process. Let them pack a special box with their favourite toys, books, and comfort items.\n\nFor younger children, picture books about moving can help them understand what's happening. For older children, show them their new room and let them have some say in how it's decorated — it gives them something to look forward to.\n\nOn moving day, pack a bag with snacks, drinks, chargers, a tablet or books, and any comfort items. If the drive to your new home is long, plan a stop along the way.",
      },
      {
        heading: "Moving With Dogs",
        body: "Dogs are creatures of routine, and a move disrupts everything they know. In the weeks before the move, maintain their routine as much as possible — same walk times, feeding times, and bedtime.\n\nOn moving day, keep dogs in a secure room or crate until the van is loaded. If possible, have someone take them for a long walk while the loading happens. Keep their lead, food, water bowl, bed, and favourite toy easily accessible — not packed in a box at the bottom of the van.\n\nAt your new home, introduce them to one room first and gradually let them explore. Keep them on a lead in the garden until you're sure the fences are secure. Update your address on their microchip registration and with your vet.",
      },
      {
        heading: "Moving With Cats",
        body: "Cats are territorial animals and moves are particularly stressful for them. On moving day, put your cat in a secure carrier in a quiet room with the door closed. Put a sign on the door so the movers know not to open it.\n\nAt your new home, set up a \"base camp\" room with their litter tray, food, water, bed, and a few familiar-smelling items. Keep them in this room for at least 24–48 hours before gradually allowing them to explore the rest of the house.\n\nKeep cats indoors for at least two to three weeks at your new home. This allows them to recognise it as their territory. When you do let them out, do it just before a mealtime so they have an incentive to come back. Update their microchip and vet records with your new address.",
      },
      {
        heading: "Small Pets, Fish, and Reptiles",
        body: "Small pets like hamsters, guinea pigs, and rabbits should travel in their own cage or carrier, secured so it doesn't slide around. Cover the cage with a towel to reduce stress.\n\nFish need special attention. For short moves, transport them in sealed bags with tank water (not tap water). For longer moves, battery-powered air pumps can keep oxygen levels up. Move the tank empty and refill at your new home with treated water.\n\nReptiles need to stay warm during transport. Use a heat pack or hot water bottle (wrapped in a towel) in their travel container. Keep them in a dark, quiet space during the journey.\n\nWhatever pets you have, make sure they're one of the first things you sort out when you arrive at your new home. A familiar-smelling blanket or toy goes a long way.",
      },
      {
        heading: "Registering With a New Vet",
        body: "If your move takes you to a different area, registering with a new vet should be one of the first things you do. Ask your current vet to transfer your records. In Hertfordshire, there are excellent veterinary practices in every town — a quick search on the Royal College of Veterinary Surgeons website (findavet.rcvs.org.uk) will show you your options.\n\nDon't forget to update your pet's microchip with your new address. You can usually do this through the microchip company's website. It's a legal requirement for dogs to be microchipped with up-to-date details.",
      },
    ],
  },
  {
    slug: "choosing-a-removals-company-what-to-look-for",
    title: "Choosing a Removals Company: What to Look For",
    excerpt:
      "Not all removals companies are created equal. Here's what to check before you book, how to spot red flags, and why insurance and professionalism matter more than the cheapest quote.",
    metaTitle:
      "How to Choose a Removals Company | What to Look For | Herts Man With A Van",
    metaDescription:
      "What to look for when choosing a removals company. Insurance, reviews, red flags, and how to get the best value for your move. Advice from Herts Man With A Van.",
    date: "2026-02-20",
    readTime: "6 min read",
    category: "Moving Guide",
    image: "/assets/images/storage-service.webp",
    imageAlt: "Professional removals van and team",
    content: [
      {
        heading: "Don't Just Go for the Cheapest Quote",
        body: "We get it — moving is expensive and you want to save where you can. But the cheapest removals quote isn't always the best value. Uninsured, unregistered operators can offer rock-bottom prices, but if something goes wrong — damaged furniture, a scratched wall, items going missing — you've got no comeback.\n\nGet at least two or three quotes and compare what's included. Does the price include blankets and straps? Is there a fuel surcharge? Are they charging by the hour or a fixed price? A slightly higher quote from a professional, insured company is usually money well spent.",
      },
      {
        heading: "Check They're Properly Insured",
        body: "This is the single most important thing to check. Any legitimate removals company should have goods-in-transit insurance (which covers your belongings while they're on the van) and public liability insurance (which covers damage to property).\n\nAt Herts Man With A Van, we carry full goods-in-transit insurance and public liability cover. We're also proud members of the Road Haulage Association and the UK House Clearance Association, which means we're held to industry standards.\n\nDon't be afraid to ask for proof of insurance — any reputable company will be happy to provide it. If they can't or won't, that's a massive red flag.",
      },
      {
        heading: "Read Real Reviews — Not Just Testimonials",
        body: "Anyone can put glowing testimonials on their website. What matters are independent reviews on platforms like Google, Trustpilot, and Facebook. Look at the overall rating, but also read recent reviews to get a sense of what the experience is actually like.\n\nPay attention to how the company responds to negative reviews. Every business gets the occasional complaint, but how they handle it says a lot about their professionalism.\n\nWe're proud of our Google reviews — they're from real customers and we respond to every single one. Have a look and see what people say about working with us.",
      },
      {
        heading: "Ask the Right Questions Before Booking",
        body: "Before you commit, ask these questions:\n\n• Are you fully insured? What does your insurance cover?\n• Is the quote a fixed price or hourly rate?\n• What happens if the move takes longer than expected?\n• Do you provide blankets, straps, and trolleys?\n• Can you handle stairs, narrow doorways, or difficult access?\n• What's your cancellation policy?\n• How do you handle fragile or high-value items?\n\nA professional company will answer all of these confidently and transparently. If you get vague answers or feel pressured, look elsewhere.",
      },
      {
        heading: "Red Flags to Watch Out For",
        body: "In over eight years of operating in Hertfordshire, we've heard plenty of horror stories from customers who've been let down by other companies. Here are the red flags:\n\n• No insurance or unwilling to provide proof — walk away immediately.\n• A quote that's dramatically lower than everyone else — there's usually a reason.\n• No fixed address or professional branding — legitimate companies aren't hiding.\n• Cash-only payments with no receipt — this suggests they're not registered for tax.\n• Last-minute price increases on the day — a reputable company gives you a fixed quote and sticks to it.\n• No reviews or only reviews on their own website — check Google and Facebook.\n\nA genuine, professional removals company will have clear branding, insurance documentation, visible reviews, and a transparent pricing structure.",
      },
      {
        heading: "Why Local Matters",
        body: "Choosing a local removals company has real practical benefits. We're based in Welwyn Garden City, which means we know every road, estate, and potential parking challenge across Hertfordshire. We know which council requires parking permits, which roads are tricky for vans, and which areas have restricted access.\n\nLocal also means lower costs — we're not travelling for an hour just to reach you, so you're not paying for dead mileage. And if anything ever needs following up after the move, we're right here.\n\nIf you're moving within Hertfordshire or from Hertfordshire to anywhere in the UK, give us a call on 01438 500156. We'll give you an honest quote, we're fully insured, and we'll look after your move as if it were our own.",
      },
    ],
  },
];

/** Get a blog post by slug */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Get all blog slugs for static generation */
export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

/** Format a date string for display */
export function formatBlogDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
