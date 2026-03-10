"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Info } from "lucide-react";
import styles from "./RulesSection.module.scss";

const rules = [
    "Pembayaran administrasi/SPP bulanan paling lambat tanggal 10 setiap bulannya.",
    "Pembayaran pendaftaran dan biaya bimbingan bulanan dilakukan saat pengisian formulir.",
    "Pendaftaran sebelum tanggal 15 dikenakan biaya bimbingan penuh, setelah tanggal 15 dikenakan 50% biaya bimbingan.",
    "Penggantian hari belajar diberikan jika siswa absen kurang dari 6 kali karena sakit atau kegiatan belajar diliburkan di luar hari libur bersama.",
    "Penggantian hari belajar diberikan jika tutor izin berurutan lebih dari 2 kali pertemuan.",
    "Pengajar pengganti hanya dapat dilakukan maksimal 1 kali per bulan yang sama.",
];

export default function RulesSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const gridInView = useInView(gridRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });

    return (
        <section className={styles.section} id="rules">
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
                        <Info size={13} strokeWidth={2.5} />
                        Ketentuan
                    </div>
                    <h2 className={styles.title}>
                        Ketentuan{" "}
                        <span className={styles.titleAccent}>Penting</span>
                    </h2>
                    <p className={styles.desc}>
                        Agar proses belajar berjalan lancar, harap perhatikan
                        ketentuan berikut.
                    </p>
                </motion.div>

                {/* Rules grid */}
                <div ref={gridRef} className={styles.grid}>
                    {rules.map((rule, i) => (
                        <motion.div
                            key={i}
                            className={styles.ruleCard}
                            initial={{ opacity: 0, y: 24 }}
                            animate={gridInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.45,
                                delay: Math.floor(i / 2) * 0.1 + (i % 2) * 0.05,
                                ease: [0.34, 1.2, 0.64, 1],
                            }}
                            whileHover={{ y: -3 }}
                        >
                            <div className={styles.ruleBadge}>{i + 1}</div>
                            <p className={styles.ruleText}>{rule}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
