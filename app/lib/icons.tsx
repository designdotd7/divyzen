import {
	Activity,
	Bandage,
	BedDouble,
	Brain,
	Dumbbell,
	HandHeart,
	Heart,
	HeartHandshake,
	HeartPulse,
	Home,
	PhoneCall,
	Stethoscope,
	Syringe,
	TestTube,
	Users2,
} from "lucide-react";
import type { ServiceIcon } from "@/app/lib/siteConfig";
import type { Tone } from "@/app/components/ArtPanel";

export const serviceIconMap: Record<ServiceIcon, typeof Activity> = {
	ICU: Activity,
	Critical: HeartPulse,
	Injection: Syringe,
	PostOp: Bandage,
	Elder: Users2,
	Dementia: Brain,
	Physio: Dumbbell,
	Sample: TestTube,
	Equipment: BedDouble,
	Caregiver: HandHeart,
};

// One distinct hue per service so photo tints, icon badges and buttons don't
// all read as the same teal/pink pairing.
export const serviceToneMap: Record<ServiceIcon, Tone> = {
	ICU: "sky",
	Critical: "rose",
	Injection: "amber",
	PostOp: "violet",
	Elder: "emerald",
	Dementia: "fuchsia",
	Physio: "orange",
	Sample: "cyan",
	Equipment: "indigo",
	Caregiver: "teal",
};

export const serviceIconBg: Record<ServiceIcon, string> = {
	ICU: "bg-linear-to-br from-sky-500 to-sky-600",
	Critical: "bg-linear-to-br from-rose-500 to-rose-600",
	Injection: "bg-linear-to-br from-amber-500 to-amber-600",
	PostOp: "bg-linear-to-br from-violet-500 to-violet-600",
	Elder: "bg-linear-to-br from-emerald-500 to-emerald-600",
	Dementia: "bg-linear-to-br from-fuchsia-500 to-fuchsia-600",
	Physio: "bg-linear-to-br from-orange-500 to-orange-600",
	Sample: "bg-linear-to-br from-cyan-500 to-cyan-600",
	Equipment: "bg-linear-to-br from-indigo-500 to-indigo-600",
	Caregiver: "bg-linear-to-br from-teal-500 to-teal-600",
};

export const serviceButtonBg: Record<ServiceIcon, string> = {
	ICU: "bg-sky-600 hover:bg-sky-700",
	Critical: "bg-rose-600 hover:bg-rose-700",
	Injection: "bg-amber-600 hover:bg-amber-700",
	PostOp: "bg-violet-600 hover:bg-violet-700",
	Elder: "bg-emerald-600 hover:bg-emerald-700",
	Dementia: "bg-fuchsia-600 hover:bg-fuchsia-700",
	Physio: "bg-orange-600 hover:bg-orange-700",
	Sample: "bg-cyan-600 hover:bg-cyan-700",
	Equipment: "bg-indigo-600 hover:bg-indigo-700",
	Caregiver: "bg-teal-600 hover:bg-teal-700",
};

export const serviceTextColor: Record<ServiceIcon, string> = {
	ICU: "text-sky-600",
	Critical: "text-rose-600",
	Injection: "text-amber-600",
	PostOp: "text-violet-600",
	Elder: "text-emerald-600",
	Dementia: "text-fuchsia-600",
	Physio: "text-orange-600",
	Sample: "text-cyan-600",
	Equipment: "text-indigo-600",
	Caregiver: "text-teal-600",
};

export const whyChooseIconMap = {
	Heart,
	Home,
	Stethoscope,
	HeartHandshake,
	PhoneCall,
};

export const whyChooseIconBg: Record<keyof typeof whyChooseIconMap, string> = {
	Heart: "bg-linear-to-br from-rose-500 to-rose-700",
	Home: "bg-linear-to-br from-sky-500 to-sky-700",
	Stethoscope: "bg-linear-to-br from-emerald-500 to-emerald-700",
	HeartHandshake: "bg-linear-to-br from-amber-500 to-amber-700",
	PhoneCall: "bg-linear-to-br from-violet-500 to-violet-700",
};

export const stepAccentColor = ["text-sky-500", "text-rose-500", "text-amber-500", "text-emerald-500"];
