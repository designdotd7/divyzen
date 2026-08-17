export const siteConfig = {
	name: "Divyzen Care Solutions",
	shortName: "Divyzen",
	tagline: "Hamari Seva, Aapke Apnepan Ke Saath",
	description: "Trusted home healthcare & care services for you and your loved ones — delivered where comfort matters most: home.",

	phonePrimary: "+91 92141 45550",
	emergencyPhone: "+91 92141 45550",
	whatsappNumber: "919214145550",
	email: "care@divyzen.com",
	website: "www.divyzen.com",

	address: {
		line1: "B.S. Lodhi Plaza, Near Medanta Hospital, Gate No. 5",
		line2: "Sushant Golf City, Lucknow, Uttar Pradesh 226002",
	},

	hours: [{ day: "All Days", value: "Open 24 Hours" }],

	social: {
		facebook: "#",
		instagram: "#",
		twitter: "#",
		linkedin: "#",
	},

	nav: [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "Services", href: "/services" },
		{ label: "Why Choose Us", href: "/#why-choose-us" },
		{ label: "Contact Us", href: "/contact" },
	],

	mission: "To provide reliable, compassionate and personalized care to people in the comfort of their homes.",
	vision: "To become a trusted name in home healthcare and care services by providing quality support with compassion, dignity and responsibility.",

	disclaimer:
		"Divyzen Care Solutions provides home healthcare and support services through appropriate healthcare professionals and caregivers. Services are provided based on individual requirements and applicable professional/medical guidance. In case of a medical emergency, please contact the appropriate emergency medical service immediately.",
};

export type ServiceIcon = "ICU" | "Critical" | "Injection" | "PostOp" | "Elder" | "Dementia" | "Physio" | "Sample" | "Equipment" | "Caregiver";

export const coreServices: {
	slug: string;
	title: string;
	icon: ServiceIcon;
	summary: string;
	buttonLabel: string;
}[] = [
	{
		slug: "icu-care-at-home",
		title: "ICU Care at Home",
		icon: "ICU",
		summary: "घर पर ICU-level care की आवश्यकता वाले patients के लिए professional healthcare support और आवश्यक monitoring की सुविधा।",
		buttonLabel: "Book Service",
	},
	{
		slug: "critical-care-at-home",
		title: "Critical Care at Home",
		icon: "Critical",
		summary: "गंभीर स्वास्थ्य स्थिति वाले patients के लिए घर पर आवश्यक professional care और healthcare support।",
		buttonLabel: "Book Service",
	},
	{
		slug: "dressing-injection",
		title: "Dressing & Injection Services",
		icon: "Injection",
		summary: "Qualified healthcare professionals के माध्यम से घर पर dressing, wound care और prescribed injection services।",
		buttonLabel: "Book Service",
	},
	{
		slug: "post-operative-care",
		title: "Post-Operative Care",
		icon: "PostOp",
		summary: "Surgery के बाद patient की recovery के दौरान daily care, assistance और आवश्यक support।",
		buttonLabel: "Book Service",
	},
	{
		slug: "elder-care-at-home",
		title: "Elder Care at Home",
		icon: "Elder",
		summary: "बुजुर्गों के लिए daily activities, personal assistance, companionship और आवश्यक care support।",
		buttonLabel: "Book Service",
	},
	{
		slug: "dementia-alzheimers-care",
		title: "Dementia & Alzheimer's Care",
		icon: "Dementia",
		summary: "Dementia और Alzheimer's से प्रभावित elderly individuals के लिए patient, compassionate और personalized care support।",
		buttonLabel: "Book Service",
	},
	{
		slug: "physiotherapy-at-home",
		title: "Physiotherapy at Home",
		icon: "Physio",
		summary: "Patient की आवश्यकता के अनुसार घर पर physiotherapy और rehabilitation support।",
		buttonLabel: "Book Service",
	},
	{
		slug: "blood-urine-sample-collection",
		title: "Blood & Urine Sample Collection",
		icon: "Sample",
		summary: "Patients की सुविधा के लिए घर से blood और urine sample collection की सुविधा।",
		buttonLabel: "Book Sample Collection",
	},
	{
		slug: "medical-equipment-on-rent",
		title: "Medical Equipment on Rent",
		icon: "Equipment",
		summary: "जरूरत के अनुसार विभिन्न medical equipment को rental basis पर उपलब्ध कराने की सुविधा।",
		buttonLabel: "View Equipment",
	},
	{
		slug: "caregiver-attendant-services",
		title: "Caregiver / Attendant Services",
		icon: "Caregiver",
		summary: "Patients और elderly individuals के लिए daily assistance, personal care और companionship support।",
		buttonLabel: "Enquire Now",
	},
];

export const whyChooseUs = [
	{
		icon: "Heart" as const,
		title: "Compassionate Care",
		text: "हर patient की जरूरत, comfort और dignity को ध्यान में रखकर care support।",
	},
	{
		icon: "Home" as const,
		title: "Care at Home",
		text: "अपने घर के आरामदायक और familiar environment में care की सुविधा।",
	},
	{
		icon: "Stethoscope" as const,
		title: "Professional Support",
		text: "Healthcare requirements के अनुसार trained/qualified professionals और caregivers के माध्यम से services।",
	},
	{
		icon: "HeartHandshake" as const,
		title: "Personalized Attention",
		text: "हर patient की जरूरत एक जैसी नहीं होती। इसलिए care को individual requirements के अनुसार व्यवस्थित किया जाता है।",
	},
	{
		icon: "PhoneCall" as const,
		title: "Easy & Reliable Support",
		text: "Service enquiry और assistance के लिए आसान communication और support।",
	},
];

export const howItWorks = [
	{
		step: "01",
		title: "Contact Us",
		text: "Call या WhatsApp के माध्यम से अपनी requirement बताएं।",
	},
	{
		step: "02",
		title: "Share Your Requirement",
		text: "Patient की condition और required service के बारे में basic information दें।",
	},
	{
		step: "03",
		title: "Care Planning",
		text: "आपकी requirement के अनुसार suitable service और care support की व्यवस्था की जाती है।",
	},
	{
		step: "04",
		title: "Care at Your Home",
		text: "हमारी service निर्धारित आवश्यकता के अनुसार आपके घर पर उपलब्ध कराई जाती है।",
	},
];
