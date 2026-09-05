import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashokmalhi.pro"),
  title: "Dr. Ashok Malhi | Assistant Professor | Lovely Professional University",
  description:
    "Official academic website of Dr. Ashok Malhi, Assistant Professor at Lovely Professional University, India. Research interests include artificial intelligence, digital marketing, blockchain, IoT, data analytics, and emerging technologies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ashokmalhi.pro/",
    title: "Dr. Ashok Malhi | Assistant Professor | Lovely Professional University",
    description:
      "Official academic website of Dr. Ashok Malhi, Assistant Professor at Lovely Professional University, India.",
    siteName: "Dr. Ashok Malhi",
  },
  twitter: {
    card: "summary",
    title: "Dr. Ashok Malhi | Assistant Professor",
    description:
      "Official academic website of Dr. Ashok Malhi, Assistant Professor at Lovely Professional University.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Ashok Malhi",
  alternateName: ["Ashok Malhi", "Ashok Singh Malhi"],
  url: "https://ashokmalhi.pro/",
  jobTitle: "Assistant Professor",
  worksFor: {
    "@type": "Organization",
    name: "Lovely Professional University",
  },
  sameAs: [
    "https://in.linkedin.com/in/ashok-malhi",
    "https://orcid.org/0000-0001-9756-5865",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
