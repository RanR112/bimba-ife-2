import type { Metadata, Viewport } from "next";
import "./globals.scss";

const SITE_URL = "https://www.bimbaife.my.id";
const SITE_NAME = "Bimba IFE";
const SITE_TITLE = "Bimba IFE - Belajar Seru Bareng!";
const SITE_DESCRIPTION =
    "Lembaga bimbingan belajar anak usia 3-7 tahun terpercaya. Program Calistung, English, dan Jarimatika yang menyenangkan dan inovatif.";
const AUTHOR_URL = "https://www.randyrafael.my.id";
const AUTHOR_NAME = "Randy Rafael";

export const metadata: Metadata = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: [
        "bimba ife",
        "bimbel anak",
        "calistung",
        "english",
        "jarimatika",
        "les anak karawang",
    ],
    authors: [{ name: AUTHOR_NAME, url: AUTHOR_URL }],
    creator: AUTHOR_NAME,

    // ---- Canonical URL ----
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: "/" },

    // ---- Robots ----
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },

    // ---- Open Graph ----
    openGraph: {
        type: "website",
        locale: "id_ID",
        url: SITE_URL,
        siteName: SITE_NAME,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [
            {
                url: "/og-image.png", // 1200×630 — place in /public
                width: 1200,
                height: 630,
                alt: `${SITE_NAME}`,
            },
        ],
    },

    // ---- Twitter / X ----
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        // creator:  '@yourhandle', // uncomment when you have one
        images: ["/og-image.png"],
    },

    // ---- Favicon / Icons ----
    // Place these files in /public/icons/
    icons: {
        icon: "/icons/logo.png",
        shortcut: "/icons/logo.png",
        apple: "/icons/logo.png",
        other: [
            {
                rel: "icon",
                url: "/icons/logo.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                rel: "icon",
                url: "/icons/logo.png",
                sizes: "16x16",
                type: "image/png",
            },
        ],
    },

    // ---- Manifest ----
    manifest: "/site.webmanifest",
};

// ---- Viewport ----
export const viewport: Viewport = {
    themeColor: "#FF6B1A",
    width: "device-width",
    initialScale: 1,
    // Prevent font bump on iOS orientation change
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="id">
            <body>{children}</body>
        </html>
    );
}
