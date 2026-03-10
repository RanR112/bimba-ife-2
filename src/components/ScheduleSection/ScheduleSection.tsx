"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, MoveRight } from "lucide-react";
import styles from "./ScheduleSection.module.scss";

type DayData = {
    day: string;
    lessons: string[];
    headerClass: string;
    isOff?: boolean;
};

const schedule: DayData[] = [
    {
        day: "Senin",
        lessons: ["Calistung", "Senin Ceria"],
        headerClass: styles.hdMon,
    },
    {
        day: "Selasa",
        lessons: ["Calistung", "Montessori"],
        headerClass: styles.hdTue,
    },
    {
        day: "Rabu",
        lessons: ["Calistung", "Kreativitas"],
        headerClass: styles.hdWed,
    },
    {
        day: "Kamis",
        lessons: ["Calistung", "Bhs. Inggris"],
        headerClass: styles.hdThu,
    },
    {
        day: "Jumat",
        lessons: ["Calistung", "Agama / Arab"],
        headerClass: styles.hdFri,
    },
    {
        day: "Sabtu",
        lessons: [],
        headerClass: styles.hdSat,
        isOff: true,
    },
];

export default function ScheduleSection() {
    const headerRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });
    const tableInView = useInView(tableRef, {
        once: true,
        margin: "-60px" as `${number}px`,
    });

    return (
        <section className={styles.section} id="schedule">
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
                        <CalendarDays size={13} strokeWidth={2.5} />
                        Jadwal Bimba
                    </div>
                    <h2 className={styles.title}>
                        Jadwal{" "}
                        <span className={styles.titleAccent}>Mingguan</span>
                    </h2>
                    <p className={styles.desc}>
                        Tersedia berbagai program setiap hari. Pilih waktu
                        terbaik untuk si kecil!
                    </p>
                </motion.div>

                {/* Scroll hint – mobile only */}
                <div className={styles.scrollHint}>
                    <MoveRight size={14} />
                    Geser ke kanan untuk lihat semua hari
                </div>

                {/* Schedule table with horizontal scroll on mobile */}
                <div ref={tableRef} className={styles.tableScroll}>
                    <div className={styles.table}>
                        {schedule.map((d, i) => (
                            <motion.div
                                key={d.day}
                                className={styles.dayCard}
                                initial={{ opacity: 0, y: 28 }}
                                animate={
                                    tableInView ? { opacity: 1, y: 0 } : {}
                                }
                                transition={{
                                    duration: 0.45,
                                    delay: i * 0.08,
                                    ease: [0.34, 1.2, 0.64, 1],
                                }}
                                whileHover={{ y: -5 }}
                            >
                                <div
                                    className={`${styles.dayHead} ${d.headerClass}`}
                                >
                                    <span className={styles.dayName}>
                                        {d.day}
                                    </span>
                                </div>
                                <div className={styles.dayBody}>
                                    {d.lessons.map((lesson) => (
                                        <div
                                            key={lesson}
                                            className={styles.lesson}
                                        >
                                            {lesson}
                                        </div>
                                    ))}
                                    {d.isOff && (
                                        <div className={styles.halfDay}>
                                            LIBUR
                                            <br />
                                            <br />
                                            KECUALI YANG MENGAMBIL KELAS SABTU
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
