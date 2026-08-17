import { MapPin } from "lucide-react";
import { siteConfig } from "@/app/lib/siteConfig";
import Reveal from "@/app/components/Reveal";

export default function LocationMap() {
	const address = `${siteConfig.address.line1}, ${siteConfig.address.line2}`;

	return (
		<section className="bg-brand-50/60 py-16 md:py-20">
			<div className="max-w-7xl mx-auto px-6">
				<Reveal className="max-w-2xl mx-auto text-center mb-10">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Find Us</span>
					<h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-900">Visit Our Office</h2>
					<p className="mt-4 text-gray-600 flex items-center justify-center gap-2">
						<MapPin className="w-4 h-4 text-accent-500 shrink-0" />
						{address}
					</p>
				</Reveal>
				<Reveal delay={100} className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm h-80 md:h-96">
					<iframe
						src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
						className="w-full h-full border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title={`${siteConfig.name} location map`}
					/>
				</Reveal>
			</div>
		</section>
	);
}
