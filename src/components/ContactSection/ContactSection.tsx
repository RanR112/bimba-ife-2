"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import styles from "./ContactSection.module.scss";
import Link from "next/link";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;

const contacts = [
    {
        icon: MapPin,
        title: "Unit Perumahan Taman Palumbon Asri",
        content: "Perumahan Taman Palumbon Asri, Blok A no 21",
        href: "https://maps.app.goo.gl/zAWhkLa9ixbyGdSU8",
    },
    {
        icon: MapPin,
        title: "Unit Perumahan Bumi Cipta Laras",
        content:
            "Perumahan Bumi Cipta Laras Blok A no 26, Jl. Selaras 1 Blok A no 26 Klari",
        href: "https://maps.app.goo.gl/afNTFjayyny9VU2p9",
    },
    {
        icon: WhatsappIcon,
        title: "WhatsApp",
        content: whatsapp,
        href: `https://wa.me/${whatsapp}`,
    },
    {
        icon: Instagram,
        title: "Instagram",
        content: `@${instagram}`,
        href: `https://instagram.com/${instagram}`,
    },
];

export default function ContactSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const cardsInView = useInView(cardsRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const ctaInView = useInView(ctaRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });

    return (
        <section className={styles.section} id="contact">
            {/* Background orbs */}
            <div className={styles.orbTopRight} />
            <div className={styles.orbBottomLeft} />

            <div className={`container ${styles.inner}`}>
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 28 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.34, 1, 0.64, 1] }}
                >
                    <div className={styles.eyebrow}>
                        <MapPin size={13} strokeWidth={2.5} />
                        Hubungi Kami
                    </div>
                    <h2 className={styles.title}>
                        Yuk, Hubungi{" "}
                        <span className={styles.titleAccent}>Bimba IFE!</span>
                    </h2>
                    <p className={styles.desc}>
                        Kami siap menjawab semua pertanyaan Anda dengan senang
                        hati dan secepat mungkin!
                    </p>
                </motion.div>

                {/* Cards */}
                <div ref={cardsRef} className={styles.cardsGrid}>
                    {contacts.map((c, i) => (
                        <motion.div
                            key={c.title}
                            className={styles.contactCard}
                            initial={{ opacity: 0, y: 28 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.45,
                                delay: i * 0.1,
                                ease: [0.34, 1.2, 0.64, 1],
                            }}
                            whileHover={{
                                y: -4,
                                backgroundColor: "rgba(255,255,255,.28)",
                            }}
                        >
                            <Link
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.cardIcon}>
                                    <c.icon
                                        size={28}
                                        color="white"
                                        strokeWidth={2}
                                    />
                                </span>
                                <h4 className={styles.cardTitle}>{c.title}</h4>
                                <p className={styles.cardText}>{c.content}</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    ref={ctaRef}
                    className={styles.ctaWrap}
                    initial={{ opacity: 0, y: 24 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.34, 1, 0.64, 1] }}
                >
                    <a
                        className={styles.waBtn}
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsappIcon
                            size={40}
                            strokeWidth={2}
                            color={"#FF6B1A"}
                        />
                        Chat di WhatsApp Sekarang
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export function WhatsappIcon({
    size = 20,
    strokeWidth = 2,
    color = "#FFFFFF",
    ...props
}: React.SVGProps<SVGSVGElement> & {
    size?: number;
    strokeWidth?: number;
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            width={size}
            height={size}
            fill={color}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
        </svg>
    );
}
