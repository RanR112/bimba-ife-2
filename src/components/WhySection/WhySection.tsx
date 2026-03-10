"use client";

import { Gamepad2, GraduationCap, CalendarDays, Home } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./WhySection.module.scss";

const features = [
  {
    icon: Gamepad2,
    title: "Metode Menyenangkan",
    desc: "Belajar lewat permainan interaktif yang bikin anak semangat dan tidak bosan.",
    colorClass: styles.iconOrange,
  },
  {
    icon: GraduationCap,
    title: "Pengajar Berpengalaman",
    desc: "Tim guru profesional berdedikasi tinggi dalam mengembangkan potensi anak.",
    colorClass: styles.iconSky,
  },
  {
    icon: CalendarDays,
    title: "Jadwal Fleksibel",
    desc: "Pilih sesi pagi atau sore sesuai kebutuhan keluarga, tersedia 6 hari per minggu.",
    colorClass: styles.iconLeaf,
  },
  {
    icon: Home,
    title: "Lingkungan Nyaman",
    desc: "Ruang belajar bersih, colorful, dan penuh nuansa edukatif yang menyenangkan.",
    colorClass: styles.iconBerry,
  },
];

export default function WhySection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" as `${number}px` });
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" as `${number}px` });

  return (
    <section className={styles.section} id="why">
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF6B1A">
              <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
            </svg>
            Keunggulan Kami
          </div>
          <h2 className={styles.title}>
            Mengapa Pilih <span className={styles.titleAccent}>Bimba IFE?</span>
          </h2>
          <p className={styles.desc}>
            Kami merancang setiap detail agar si kecil belajar dengan nyaman, percaya diri, dan penuh semangat setiap harinya.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div ref={gridRef} className={styles.grid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.34, 1.2, 0.64, 1] }}
              whileHover={{ y: -8, boxShadow: "0 12px 40px rgba(0,0,0,.13)", rotate: -1 }}
            >
              <div className={`${styles.iconWrap} ${f.colorClass}`}>
                <f.icon size={26} strokeWidth={2} />
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
