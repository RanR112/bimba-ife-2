"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Wind,
    Puzzle,
    Award,
    BookMarked,
    LayoutPanelLeft,
    Leaf,
} from "lucide-react";
import styles from "./AboutSection.module.scss";
import Image from "next/image";
import tentang1 from "@/assets/tentang1.jpg";
import tentang2 from "@/assets/tentang2.jpg";
import tentang3 from "@/assets/tentang3.jpg";

const facilities = [
    { icon: Wind, label: "Ruang Belajar AC" },
    { icon: Puzzle, label: "Area Bermain" },
    { icon: Award, label: "Guru Bersertifikat" },
    { icon: BookMarked, label: "Koleksi Buku Lengkap" },
    { icon: LayoutPanelLeft, label: "Dekorasi Edukatif" },
    { icon: Leaf, label: "Metode Inovatif" },
];

const stats = [
    { num: "100+", label: "Siswa Aktif" },
    { num: "3+", label: "Tahun Berdiri" },
    { num: "2", label: "Unit Bimba" },
];

const mosaic = [
    { img: tentang1, span: true },
    { img: tentang2, span: false },
    { img: tentang3, span: false },
];

export default function AboutSection() {
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const leftInView = useInView(leftRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const rightInView = useInView(rightRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });

    return (
        <section className={styles.section} id="about">
            <div className="container">
                <div className={styles.inner}>
                    {/* ── Left: text ── */}
                    <motion.div
                        ref={leftRef}
                        className={styles.left}
                        initial={{ opacity: 0, y: 32 }}
                        animate={leftInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.55,
                            ease: [0.34, 1, 0.64, 1],
                        }}
                    >
                        <div className={styles.eyebrow}>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="#FF6B1A"
                            >
                                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                            </svg>
                            Tentang Kami
                        </div>

                        <h2 className={styles.title}>
                            Apa itu{" "}
                            <span className={styles.titleAccent}>
                                Bimba IFE?
                            </span>
                        </h2>

                        <p className={styles.body}>
                            Bimba IFE adalah lembaga bimbingan belajar
                            berkualitas untuk anak usia{" "}
                            <strong>3-7 tahun</strong>. Dengan metode
                            pembelajaran inovatif dan menyenangkan, kami
                            memastikan setiap anak berkembang secara optimal.
                        </p>
                        <p className={styles.body}>
                            Dipercaya oleh ratusan orang tua, Bimba
                            IFE menjadi rumah kedua bagi si kecil dalam
                            menemukan kesenangan belajar.
                        </p>

                        {/* Facilities */}
                        <div className={styles.facilityGrid}>
                            {facilities.map((f) => (
                                <div
                                    key={f.label}
                                    className={styles.facilityItem}
                                >
                                    <f.icon
                                        size={18}
                                        color="#FF6B1A"
                                        strokeWidth={2}
                                    />
                                    <span>{f.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats ribbon */}
                        <div className={styles.statsRibbon}>
                            {stats.map((s) => (
                                <div key={s.label} className={styles.statCell}>
                                    <div className={styles.statNum}>
                                        {s.num}
                                    </div>
                                    <div className={styles.statLbl}>
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: mosaic ── */}
                    <motion.div
                        ref={rightRef}
                        className={styles.right}
                        initial={{ opacity: 0, y: 32 }}
                        animate={rightInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                            duration: 0.55,
                            delay: 0.2,
                            ease: [0.34, 1, 0.64, 1],
                        }}
                    >
                        <div className={styles.mosaic}>
                            {mosaic.map((m, i) => (
                                <motion.div
                                    key={i}
                                    className={`${styles.mosaicCell} ${m.span ? styles.mosaicSpan : ""}`}
                                    whileHover={{ scale: 1.04 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                    }}
                                >
                                    <Image
                                        src={m.img}
                                        alt=""
                                        fill
                                        className={styles.mosaicImage}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
