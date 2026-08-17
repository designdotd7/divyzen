// Placeholder business details — replace with your real address, phone numbers,
// email, founder name and social links before launch.
export const siteConfig = {
	name: "Divyzen Care Solutions",
	shortName: "Divyzen",
	tagline: "Home Nursing & Private Care Services",
	description: "Compassionate, professional home nursing and care services for your family — delivered where comfort matters most: home.",

	phonePrimary: "+91 90000 00000",
	phoneSecondary: "+91 90000 00001",
	emergencyPhone: "+91 90000 00001",
	email: "info@divyzen.com",

	address: {
		line1: "Opposite City Hospital, Gate No. 3",
		line2: "Your City, Your State - 000000",
	},

	hours: [
		{ day: "Monday", value: "Open 24 Hours" },
		{ day: "Tuesday", value: "Open 24 Hours" },
		{ day: "Wednesday", value: "Open 24 Hours" },
		{ day: "Thursday", value: "Open 24 Hours" },
		{ day: "Friday", value: "Open 24 Hours" },
		{ day: "Saturday", value: "Open 24 Hours" },
		{ day: "Sunday", value: "Open 24 Hours" },
	],

	founder: {
		name: "Founder Name",
		role: "Founder & Director",
	},

	social: {
		facebook: "#",
		instagram: "#",
		twitter: "#",
		linkedin: "#",
	},

	nav: [
		{ label: "Home", href: "/" },
		{ label: "Services", href: "/services" },
		{ label: "About Us", href: "/about" },
		{ label: "Contact Us", href: "/contact" },
		{ label: "Appointment", href: "/appointment" },
	],
};

export type ServiceIcon = "Home" | "Users" | "Activity";

export const coreServices: {
	slug: string;
	title: string;
	icon: ServiceIcon;
	summary: string;
	detail: string;
}[] = [
	{
		slug: "home-care",
		title: "Home Nursing Care",
		icon: "Home",
		summary: "Skilled nursing support delivered in the comfort and privacy of your own home.",
		detail:
			"From wound care and medication management to routine health monitoring, our trained nurses bring hospital-grade care into your living room, so recovery happens somewhere familiar.",
	},
	{
		slug: "senior-care",
		title: "Senior & Elder Care",
		icon: "Users",
		summary: "Dignified, patient-centred support built around the daily rhythms of ageing family members.",
		detail:
			"Mobility assistance, companionship, medication reminders and daily living support — designed to help seniors stay independent, safe and engaged at home.",
	},
	{
		slug: "intensive-care",
		title: "Critical & Intensive Care",
		icon: "Activity",
		summary: "Advanced, closely monitored care for patients with complex or post-surgical needs.",
		detail:
			"Our critical-care trained staff manage ventilator support, ICU-level monitoring equipment and post-operative recovery protocols, extending hospital-level vigilance into the home.",
	},
];

export const additionalOfferings = [
	"Nursing Care",
	"Patient Attendant Care",
	"Elder Care",
	"Baby & Postnatal Care",
	"Physiotherapy at Home",
	"Home Sample Collection & Blood Tests",
];

export const careStats = [
	{ label: "Home Nursing", value: 95 },
	{ label: "Patient Care", value: 92 },
	{ label: "Senior Care", value: 90 },
	{ label: "Baby & Postnatal Care", value: 88 },
	{ label: "Physiotherapy", value: 93 },
	{ label: "Diagnostic Sample Collection", value: 85 },
];

export const homeFeatures = [
	{
		title: "Our Care Promise",
		icon: "ShieldCheck" as const,
		text: "Every plan is built around your family's comfort and peace of mind, backed by regular check-ins and a team that's genuinely accountable for outcomes.",
	},
	{
		title: "Qualified Nursing Staff",
		icon: "Stethoscope" as const,
		text: "Every caregiver we place is verified, trained and experienced, so your loved ones are looked after by people who know exactly what they're doing.",
	},
	{
		title: "Transparent, Fair Pricing",
		icon: "Wallet" as const,
		text: "Clear, upfront pricing with no hidden charges — quality home care shouldn't mean choosing between good care and an honest bill.",
	},
];
