
import type { Event, Testimonial, TeamMember, Partner } from "@/lib/types";

export const partners: Partner[] = [
    { name: "UNHCR", avatarUrl: "https://picsum.photos/seed/unhcr/48/48" },
    { name: "Absa Bank", avatarUrl: "https://picsum.photos/seed/absa/48/48", isVerified: true },
    { name: "Safaricom", avatarUrl: "https://picsum.photos/seed/safaricom/48/48", isVerified: true },
    { name: "Kenya Forest Service", avatarUrl: "https://picsum.photos/seed/kfs/48/48" },
    { name: "Greenpeace", avatarUrl: "https://picsum.photos/seed/greenpeace/48/48" }
]

export const events: Event[] = [
  {
    id: "1",
    title: "Sunrise Hike at Ngong Hills",
    category: "Hike",
    date: "2024-08-15",
    location: "Ngong Hills, Kajiado",
    image: { id: "event-hiking", url: "https://picsum.photos/seed/hike1/600/400", hint: "group hiking" },
    difficulty: "Intermediate",
    distance: 12,
    snacks: true,
    eventType: "Community",
  },
  {
    id: "2",
    title: "Nairobi City Marathon for Conservation",
    category: "Marathon",
    date: "2024-09-05",
    location: "Nairobi, Kenya",
    image: { id: "event-marathon", url: "https://picsum.photos/seed/marathon1/600/400", hint: "marathon runners" },
    difficulty: "Advanced",
    distance: 42,
    cause: "Climate Action",
    snacks: true,
    eventType: "Corporate",
    partners: [
        partners.find(p => p.name === "UNHCR")!,
        partners.find(p => p.name === "Absa Bank")!
    ]
  },
  {
    id: "3",
    title: "Great Rift Valley Cycling Tour",
    category: "Cycling",
    date: "2024-08-20",
    location: "Great Rift Valley, Kenya",
    image: { id: "event-cycling", url: "https://picsum.photos/seed/cycling1/600/400", hint: "cyclist mountain" },
    difficulty: "Intermediate",
    distance: 60,
    snacks: true,
    eventType: "Corporate",
    partners: [
        partners.find(p => p.name === "Safaricom")!
    ]
  },
  {
    id: "4",
    title: "Beginner's Climb at Hell's Gate",
    category: "Mountain Climb",
    date: "2024-09-10",
    location: "Hell's Gate National Park",
    image: { id: "event-climbing", url: "https://picsum.photos/seed/climbing1/600/400", hint: "rock climbing" },
    difficulty: "Beginner",
    snacks: false,
    eventType: "Community",
  },
  {
    id: "5",
    title: "Karura Forest Tree Planting Day",
    category: "Impact",
    date: "2024-08-25",
    location: "Karura Forest, Nairobi",
    image: { id: "event-impact", url: "https://picsum.photos/seed/impact1/600/400", hint: "volunteers planting" },
    difficulty: "Beginner",
    cause: "Life on Land",
    snacks: true,
    eventType: "Community",
     partners: [
        partners.find(p => p.name === "Kenya Forest Service")!,
        partners.find(p => p.name === "Greenpeace")!
    ]
  },
  {
    id: "6",
    title: "Lakeside Yoga at Lake Naivasha",
    category: "Hike",
    date: "2024-09-01",
    location: "Lake Naivasha, Kenya",
    image: { id: "event-yoga", url: "https://picsum.photos/seed/yoga1/600/400", hint: "outdoor yoga" },
    difficulty: "Beginner",
    snacks: true,
    eventType: "Community",
  },
  {
    id: "7",
    title: "Advanced Kayaking on Tana River",
    category: "Impact",
    date: "2024-09-15",
    location: "Tana River, Kenya",
    image: { id: "event-kayaking", url: "https://picsum.photos/seed/kayak1/600/400", hint: "kayaking lake" },
    difficulty: "Advanced",
    distance: 20,
    cause: "Clean Water",
    snacks: false,
    eventType: "Corporate",
  },
    {
    id: "8",
    title: "Charity Run for Local Schools in Kibera",
    category: "Marathon",
    date: "2022-10-01",
    location: "Kibera, Nairobi",
    image: { id: "event-marathon", url: "https://picsum.photos/seed/marathon2/600/400", hint: "city runners" },
    difficulty: "Beginner",
    distance: 5,
    cause: "Quality Education",
    snacks: true,
    eventType: "Community",
    partners: [
       partners.find(p => p.name === "UNHCR")!
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Wanjiku N.",
    role: "Avid Hiker",
    quote: "TrekTribe helped me find a community of fellow nature lovers here in Kenya. The AI search made it so easy to find the perfect weekend hike in the Ngong Hills!",
    image: { id: "testimonial-1", url: "https://picsum.photos/seed/person1/100/100", hint: "woman smiling" },
  },
  {
    id: "2",
    name: "David O.",
    role: "Corporate Organizer",
    quote: "Organizing our company's wellness event at Karura Forest through TrekTribe was seamless. It was a fantastic team-building experience that aligned with our CSR goals.",
    image: { id: "testimonial-2", url: "https://picsum.photos/seed/person2/100/100", hint: "man portrait" },
  },
  {
    id: "3",
    name: "Fatuma A.",
    role: "Marathon Runner",
    quote: "I've discovered so many meaningful marathons in Nairobi that support great causes. TrekTribe is more than just an event platform; it's a movement for positive change.",
    image: { id: "testimonial-3", url: "https://picsum.photos/seed/person3/100/100", hint: "person smiling" },
  },
  {
    id: "4",
    name: "Omar Raza",
    role: "CEO",
    quote: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: { id: "testimonial-4", url: "https://picsum.photos/seed/person4/100/100", hint: "man portrait" },
  },
  {
    id: "5",
    name: "Zainab Hussain",
    role: "Project Manager",
    quote: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: { id: "testimonial-5", url: "https://picsum.photos/seed/person5/100/100", hint: "woman portrait" },
  },
  {
    id: "6",
    name: "Aliza Khan",
    role: "Business Analyst",
    quote: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: { id: "testimonial-6", url: "https://picsum.photos/seed/person6/100/100", hint: "woman portrait" },
  },
];

export const teamMembers: TeamMember[] = [
    {
        id: "1",
        name: "Jomo Kenyatta",
        role: "Founder & CEO",
        bio: "An avid mountaineer and environmentalist, Jomo founded TrekTribe to connect Kenyans with nature and each other, fostering a national community dedicated to adventure and impact.",
        image: { id: "team-member-1", url: "https://picsum.photos/seed/team1/400/400", hint: "professional headshot" },
        department: "Leadership",
    },
    {
        id: "2",
        name: "Achieng Otieno",
        role: "Head of Technology",
        bio: "With a passion for AI and user experience, Achieng leads the development of TrekTribe's innovative platform, ensuring a seamless and personalized journey for every user in Kenya.",
        image: { id: "team-member-2", url: "https://picsum.photos/seed/team2/400/400", hint: "woman professional" },
        department: "Engineering",
    },
    {
        id: "3",
        name: "Maina Kamau",
        role: "Partnerships Director",
        bio: "Maina builds bridges between TrekTribe and Kenyan organizations that share our vision. He is dedicated to creating synergistic partnerships that amplify our collective impact.",
        image: { id: "team-member-3", url: "https://picsum.photos/seed/team3/400/400", hint: "man smiling" },
        department: "Community",
    },
    {
        id: "4",
        name: "Pendo Mwangi",
        role: "Community Manager",
        bio: "Pendo is the heart of the TrekTribe community in Kenya. She engages with users, supports event organizers, and ensures everyone feels welcome and inspired on their adventures.",
        image: { id: "team-member-4", url: "https://picsum.photos/seed/team4/400/400", hint: "professional woman" },
        department: "Community",
    },
]
