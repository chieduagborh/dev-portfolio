// src/app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How I collect, use, and protect your personal information on this website.",
};

const LAST_UPDATED = "25 September 2025";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 prose prose-neutral dark:prose-invert">
      <div className="mb-14">
        <h1 className="text-5xl text-center">Privacy Policy</h1>
        <img
          src={"/assets/line.svg"}
          className="w-[70%] md:w-[23%] mx-auto h-auto mt-4 mb-2"
          aria-hidden
        />
      </div>

      <p>
        <strong>Last updated:</strong> {LAST_UPDATED}
      </p>

      <section className="mt-12">
        <h2>1. Information I Collect</h2>
        <p>I only collect personal information in the following ways:</p>
        <ul className="mt-4 space-y-2">
          <li>
            <strong>Contact:</strong> If you email or submit a form, I receive
            the details you provide (e.g. name, email, message).
          </li>
          <li>
            <strong>Analytics:</strong> I may use privacy-friendly analytics to
            understand site usage. Data is aggregated/anonymised and not used to
            identify you.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2>2. How I Use Your Information</h2>
        <ul className="mt-4 space-y-2">
          <li>Respond to enquiries and manage communication.</li>
          <li>Improve content, performance, and user experience.</li>
          <li>Analyse traffic on an aggregated basis.</li>
        </ul>
        <p className="mt-4">I do not sell or rent your personal data.</p>
      </section>

      <section className="mt-12">
        <h2>3. Cookies</h2>
        <p>
          This site may use cookies or similar technologies for essential
          functionality and analytics. You can control cookies in your browser
          settings at any time.
        </p>
      </section>

      <section className="mt-12">
        <h2>4. Data Storage & Security</h2>
        <p>
          I take reasonable measures to protect your information from
          unauthorised access, alteration, or disclosure and retain it only as
          long as necessary for the purposes above.
        </p>
      </section>

      <section className="mt-12">
        <h2>5. Your Rights</h2>
        <p>
          Under UK/EU data protection law (including GDPR), you may request
          access, correction, or deletion of your personal data, and withdraw
          consent where applicable.
          <br />
          Contact:{" "}
          <a href="mailto:chiedu.agborh@gmail.com" className="underline">
            chiedu.agborh@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2>6. Third-Party Links</h2>
        <p>
          This website may link to external sites. I'm not responsible for their
          content or privacy practices.
        </p>
      </section>

      <section className="mt-12">
        <h2>7. Changes to This Policy</h2>
        <p>
          I may update this policy from time to time. Any changes will be posted
          here with an updated date.
        </p>
      </section>
    </main>
  );
}
