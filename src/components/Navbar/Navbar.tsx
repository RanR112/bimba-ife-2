"use client";

import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import styles from "./Navbar.module.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";

const navLinks = [
    { label: "Keunggulan", href: "#why" },
    { label: "Program", href: "#programs" },
    { label: "Jadwal", href: "#schedule" },
    { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
    const [solid, setSolid] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Trigger when scroll passes halfway through the hero section
            const hero = document.getElementById("hero");
            const threshold = hero ? hero.offsetHeight / 2 : 200;
            setSolid(window.scrollY > threshold);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Run once on mount so state is correct on hard-refresh mid-page
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`${styles.navbar} ${solid ? styles.solid : styles.transparent}`}
        >
            <div className={styles.inner}>
                {/* Brand */}
                <a className={styles.brand} href="#">
                    <span className={styles.brandMark}>
                        {/* <Star size={18} strokeWidth={2.5} /> */}
                        <Image
                            src={Logo}
                            alt="Logo"
                            className={styles.brandLogo}
                        />
                    </span>
                    <div className={styles.brandText}>
                        <span className={styles.brandTitle}>
                            Bimba<em>IFE</em>
                        </span>
                        <span className={styles.brandSubtitle}>
                            Cara Asik Belajar Calistung
                        </span>
                    </div>
                </a>

                {/* Nav links – hidden on mobile */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a className={styles.navPill} href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a className={styles.navCta} href="#registration">
                    Daftar Sekarang
                </a>
            </div>
        </nav>
    );
}
