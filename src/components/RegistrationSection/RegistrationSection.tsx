"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    ClipboardList,
    CreditCard,
    Package,
    PartyPopper,
    MessageCircle,
    ShieldCheck,
} from "lucide-react";
import styles from "./RegistrationSection.module.scss";

const steps = [
    {
        num: 1,
        icon: ClipboardList,
        title: "Isi Formulir Pendaftaran",
        desc: "Lengkapi data diri orang tua & anak pada formulir yang diberikan setelah mendaftar melalui WhatsApp.",
    },
    {
        num: 2,
        icon: CreditCard,
        title: "Bayar Biaya Pendaftaran",
        desc: "Lakukan pembayaran biaya administrasi & bimbingan bulanan pertama.",
    },
    {
        num: 3,
        icon: Package,
        title: "Terima Paket Belajar",
        desc: "Dapatkan kaos, buku dan perlengkapan belajar yang siap digunakan.",
    },
    {
        num: 4,
        icon: PartyPopper,
        title: "Anak Mulai Belajar!",
        desc: "Si kecil bergabung dengan teman-teman baru yang menyenangkan!",
    },
];

export default function RegistrationSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const stepsInView = useInView(stepsRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const ctaInView = useInView(ctaRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });

    return (
        <section className={styles.section} id="registration">
            <div className="container">
                {/* Header */}
                <motion.div
                    ref={headerRef}
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 28 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.34, 1, 0.64, 1] }}
                >
                    <div className={styles.eyebrow}>
                        <ClipboardList size={13} strokeWidth={2.5} />
                        Cara Mendaftar
                    </div>
                    <h2 className={styles.title}>
                        Daftar dalam{" "}
                        <span className={styles.titleAccent}>4 Langkah</span>{" "}
                        Mudah!
                    </h2>
                    <p className={styles.desc}>
                        Proses pendaftaran yang cepat dan mudah. Mulailah
                        perjalanan belajar si kecil sekarang!
                    </p>
                </motion.div>

                {/* Steps */}
                <div ref={stepsRef} className={styles.stepsGrid}>
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.num}
                            className={styles.stepCard}
                            initial={{ opacity: 0, y: 32 }}
                            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: [0.34, 1.2, 0.64, 1],
                            }}
                            whileHover={{ y: -5 }}
                        >
                            <div className={styles.stepNum}>{s.num}</div>
                            <div className={styles.stepIcon}>
                                <s.icon
                                    size={28}
                                    color="#FF6B1A"
                                    strokeWidth={2}
                                />
                            </div>
                            <h4 className={styles.stepTitle}>{s.title}</h4>
                            <p className={styles.stepDesc}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    ref={ctaRef}
                    className={styles.ctaBlock}
                    initial={{ opacity: 0, y: 28 }}
                    animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, ease: [0.34, 1, 0.64, 1] }}
                >
                    <a
                        className={styles.waBtn}
                        href="https://wa.me/+621316334626"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsappIcon size={40} strokeWidth={2} />
                        Daftar Lewat WhatsApp
                    </a>
                    <p className={styles.ctaNote}>
                        <ShieldCheck
                            size={14}
                            color="#52C96B"
                            strokeWidth={2.5}
                        />
                        Gratis konsultasi · Tanpa biaya tersembunyi
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export function WhatsappIcon({
    size = 20,
    strokeWidth = 2,
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
            fill="#FFFFFF"
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
