"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Globe, Hand, Clock, BadgeDollarSign } from "lucide-react";
import styles from "./ProgramsSection.module.scss";

type Program = {
  id: string;
  icon: React.ElementType;
  title: string;
  desc: string;
  scheduleLabel: string;
  priceLabel: string;
  bannerClass: string;
  chipClass: string;
};

const programs: Program[] = [
  {
    id: "calistung",
    icon: BookOpen,
    title: "Program Calistung",
    desc: "Belajar baca, tulis, dan hitung dengan metode yang menyenangkan. Fondasi terbaik untuk perjalanan akademik anak Anda.",
    scheduleLabel: "Senin - Jumat",
    priceLabel: "Mulai Rp 220.000/bln",
    bannerClass: styles.bannerOrange,
    chipClass: styles.chipOrange,
  },
  {
    id: "english",
    icon: Globe,
    title: "Program English",
    desc: "Belajar bahasa Inggris sejak dini lewat lagu, permainan, dan cerita menjadi cara paling menyenangkan untuk anak-anak.",
    scheduleLabel: "Rabu - Sabtu",
    priceLabel: "Mulai Rp 160.000/bln",
    bannerClass: styles.bannerBlue,
    chipClass: styles.chipBlue,
  },
  {
    id: "jarimatika",
    icon: Hand,
    title: "Program Jarimatika",
    desc: "Teknik berhitung cepat menggunakan jari tangan yang unik, seru, dan terbukti melatih kecerdasan logika anak secara efektif.",
    scheduleLabel: "Selasa - Sabtu",
    priceLabel: "Mulai Rp 160.000/bln",
    bannerClass: styles.bannerPurple,
    chipClass: styles.chipPurple,
  },
];

export default function ProgramsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef   = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" as `${number}px` });
  const gridInView   = useInView(gridRef,   { once: true, margin: "-60px" as `${number}px` });

  return (
    <section className={styles.section} id="programs">
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
            <BookOpen size={13} strokeWidth={2.5} />
            Program Studi
          </div>
          <h2 className={styles.title}>
            Program <span className={styles.titleAccent}>Unggulan</span> Kami
          </h2>
          <p className={styles.desc}>
            Tiga program terbaik untuk mempersiapkan fondasi akademik si kecil dengan cara yang seru dan berkesan.
          </p>
        </motion.div>

        {/* Cards */}
        <div ref={gridRef} className={styles.grid}>
          {programs.map((p, i) => (
            <motion.article
              key={p.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.34, 1.2, 0.64, 1] }}
              whileHover={{ y: -10 }}
            >
              {/* Banner */}
              <div className={`${styles.banner} ${p.bannerClass}`}>
                <div className={styles.bannerDots} />
                <motion.div
                  className={styles.bannerIcon}
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 4, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p.icon size={60} color="white" strokeWidth={1.5} />
                </motion.div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>

                <div className={styles.meta}>
                  <span className={`${styles.chip} ${p.chipClass}`}>
                    <Clock size={12} strokeWidth={2.5} />
                    {p.scheduleLabel}
                  </span>
                  <span className={`${styles.chip} ${p.chipClass}`}>
                    <BadgeDollarSign size={12} strokeWidth={2.5} />
                    {p.priceLabel}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
