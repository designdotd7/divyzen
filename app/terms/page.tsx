import type { Metadata } from "next";
import { siteConfig } from "@/app/lib/siteConfig";
import Reveal from "@/app/components/Reveal";
import BlobBackground from "@/app/components/BlobBackground";

export const metadata: Metadata = {
	title: "Terms & Conditions | Divyzen Care Solutions",
	description: "Terms and conditions for using Divyzen Care Solutions' services.",
};

export default function TermsPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Legal</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">Terms &amp; Conditions</h1>
				</Reveal>
			</section>

			<Reveal className="max-w-3xl mx-auto px-6 py-16 md:py-20 space-y-6 text-sm text-gray-600 leading-relaxed">
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Services</h2>
					<p>
						{siteConfig.name} provides home healthcare and support services through appropriate healthcare professionals and caregivers, based on
						individual patient requirements and applicable professional/medical guidance.
					</p>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Bookings & Enquiries</h2>
					<p>
						Service requests submitted via phone, WhatsApp or our enquiry form are confirmed by our team based on caregiver availability and the
						nature of the request.
					</p>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Medical Disclaimer</h2>
					<p>{siteConfig.disclaimer}</p>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
					<p>
						For questions about these terms, reach us at{" "}
						<a href={`mailto:${siteConfig.email}`} className="text-brand-600 font-medium hover:text-brand-700">
							{siteConfig.email}
						</a>{" "}
						or {siteConfig.phonePrimary}.
					</p>
				</div>
			</Reveal>
		</div>
	);
}
