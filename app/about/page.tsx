import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Compass, HeartPulse, ShieldCheck, Target, Users } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import ArtPanel from "@/app/components/ArtPanel";
import BlobBackground from "@/app/components/BlobBackground";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
	title: "About Us | Divyzen Care Solutions",
	description: "Learn about Divyzen Care Solutions and our approach to home healthcare and care services.",
};

const values = [
	{ icon: HeartPulse, title: "Patient First", text: "Every decision starts with what's best for the person in our care, not the schedule." },
	{ icon: ShieldCheck, title: "Verified & Trained", text: "Every caregiver is background-checked, trained and supervised throughout their placement." },
	{ icon: Users, title: "Family Partnership", text: "We keep families informed and involved, treating care as a shared responsibility." },
];

export default function AboutPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">About Divyzen</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">About Divyzen Care Solutions</h1>
					<p className="mt-4 text-gray-600 leading-relaxed">&ldquo;{siteConfig.tagline}&rdquo;</p>
				</Reveal>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-16 items-center">
				<Reveal direction="left" className="relative h-105 md:h-115 order-2 md:order-1">
					<ArtPanel icon={HeartPulse} tone="brand" seed="divyzen-about-nurse" label="Home Care Visits" className="absolute top-0 left-0 w-[68%] h-[62%] shadow-xl shadow-brand-900/15" />
					<ArtPanel icon={Users} tone="accent" seed="divyzen-about-family" className="absolute bottom-0 right-0 w-[58%] h-[48%] shadow-xl shadow-accent-500/20 border-4 border-white" />
				</Reveal>

				<Reveal direction="right" delay={150} className="order-1 md:order-2 space-y-4 text-gray-600 leading-relaxed">
					<h2 className="text-3xl font-bold text-brand-900 mb-2">Who We Are</h2>
					<p>
						Divyzen Care Solutions एक home healthcare and care service company है, जिसका उद्देश्य लोगों को उनके घर पर भरोसेमंद और compassionate
						care support उपलब्ध कराना है।
					</p>
					<p>
						हमारा focus केवल service provide करना नहीं, बल्कि patient और उनके परिवार को care के दौरान comfort, support और peace of mind देना है।
					</p>
					<p>
						हम elderly care, critical care support, ICU care at home, post-operative care, dressing &amp; injection services, dementia &amp;
						Alzheimer&apos;s care, physiotherapy, home sample collection, caregiver services और medical equipment rental जैसी सुविधाएँ उपलब्ध
						कराने के लिए प्रतिबद्ध हैं।
					</p>
					<p>हम हर परिवार की जरूरत को समझने और उनके लिए उचित care solution उपलब्ध कराने पर ध्यान देते हैं।</p>
				</Reveal>
			</section>

			<section className="relative overflow-hidden bg-brand-50/60 py-16 md:py-20">
				<BlobBackground />
				<div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
					<Reveal className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
						<Target className="w-8 h-8 text-brand-600 mb-4" />
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
						<p className="text-sm text-gray-600 leading-relaxed">{siteConfig.mission}</p>
					</Reveal>
					<Reveal delay={100} className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
						<Compass className="w-8 h-8 text-accent-600 mb-4" />
						<h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
						<p className="text-sm text-gray-600 leading-relaxed">{siteConfig.vision}</p>
					</Reveal>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
				<Reveal className="max-w-2xl mx-auto text-center mb-12">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">What Drives Us</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Our Values</h2>
				</Reveal>
				<div className="grid md:grid-cols-3 gap-6">
					{values.map((v, i) => (
						<Reveal key={v.title} delay={i * 100}>
							<div className="group rounded-2xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
								<div className="w-12 h-12 rounded-xl bg-linear-to-br from-brand-500 to-accent-500 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
									<v.icon className="w-6 h-6 text-white" />
								</div>
								<h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
								<p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			<section className="relative overflow-hidden max-w-7xl mx-auto px-6 pb-16 md:pb-20">
				<Reveal className="relative overflow-hidden rounded-3xl bg-brand-900 text-white px-8 py-14 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
					<BlobBackground variant="dark" />
					<div className="relative text-center md:text-left">
						<Award className="w-8 h-8 text-accent-500 mb-4 mx-auto md:mx-0" />
						<h2 className="text-2xl md:text-3xl font-bold">Quality Home Care, Done Right</h2>
						<p className="mt-3 text-white/70 max-w-xl">&ldquo;{siteConfig.tagline}&rdquo;</p>
					</div>
					<Link
						href="/appointment"
						className="group relative shrink-0 inline-flex items-center gap-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3.5 shadow-lg shadow-accent-500/25 transition-all duration-200 hover:scale-105 active:scale-95">
						Book a Service
						<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
