import type { Metadata } from "next";
import { siteConfig } from "@/app/lib/siteConfig";
import Reveal from "@/app/components/Reveal";
import BlobBackground from "@/app/components/BlobBackground";

export const metadata: Metadata = {
	title: "Privacy Policy | Divyzen Care Solutions",
	description: "How Divyzen Care Solutions collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
	return (
		<div>
			<section className="relative overflow-hidden bg-linear-to-br from-brand-50 via-white to-accent-100 py-16 md:py-20">
				<BlobBackground />
				<Reveal className="relative max-w-4xl mx-auto px-6 text-center">
					<span className="text-accent-600 text-sm font-semibold uppercase tracking-wide">Legal</span>
					<h1 className="mt-3 text-4xl md:text-5xl font-bold text-brand-900">Privacy Policy</h1>
				</Reveal>
			</section>

			<Reveal className="max-w-3xl mx-auto px-6 py-16 md:py-20 space-y-6 text-sm text-gray-600 leading-relaxed">
				<p>
					{siteConfig.name} ({siteConfig.website}) respects your privacy. This page explains, in brief, how information you share with us — such as
					through our enquiry forms, phone calls or WhatsApp messages — is used.
				</p>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Information We Collect</h2>
					<p>
						When you contact us or submit an enquiry, we may collect your name, phone number, and details about the care or service you are
						requesting, so that our team can respond appropriately.
					</p>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">How We Use Your Information</h2>
					<p>
						Information you share is used only to respond to your enquiry, coordinate the requested service, and communicate with you about your
						care. We do not sell your information to third parties.
					</p>
				</div>
				<div>
					<h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
					<p>
						For any privacy-related questions, reach us at{" "}
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
