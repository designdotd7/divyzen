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

export const whyChooseIconMap = {
	Heart,
	Home,
	Stethoscope,
	HeartHandshake,
	PhoneCall,
};
