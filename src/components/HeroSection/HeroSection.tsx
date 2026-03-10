"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Award, Clock, Users } from "lucide-react";
import styles from "./HeroSection.module.scss";
import Image from "next/image";
import Hero from "@/assets/hero.jpg";

// ─── ANIMATION VARIANTS ────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: [0.34, 1.1, 0.64, 1] },
    }),
};

const floatVariant = {
    animate: (delay = 0) => ({
        y: [0, -14, 0],
        transition: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" },
    }),
};

// Cloud drifts horizontally — each with its own distance & speed
const cloudDrift = (x: number, duration: number, delay = 0) => ({
    animate: {
        x: [0, x, 0],
        transition: { duration, delay, repeat: Infinity, ease: "easeInOut" },
    },
});

// Bird flies across — loops by resetting position via CSS
const birdFloat = (delay = 0) => ({
    animate: {
        y: [0, -6, 0],
        transition: { duration: 3, delay, repeat: Infinity, ease: "easeInOut" },
    },
});

const chips = [
    { icon: Users, label: "100+ Siswa Aktif", color: "#52C96B" },
    { icon: Award, label: "Guru Bersertifikat", color: "#35B8E0" },
    { icon: BookOpen, label: "3 Program Unggulan", color: "#FFB830" },
];

const bubbles = [
    {
        id: "b1",
        icon: TrendingUp,
        iconBg: "#E8F9EC",
        iconColor: "#52C96B",
        title: "Prestasi Meningkat",
        sub: "+85% murid lebih percaya diri",
        className: styles.bubbleTopRight,
        delay: 0.5,
    },
    {
        id: "b2",
        icon: Award,
        iconBg: "#E6F7FD",
        iconColor: "#35B8E0",
        title: "Pengajar Profesional",
        sub: "Terlatih & Bersertifikat",
        className: styles.bubbleBottomLeft,
        delay: 1.0,
    },
    {
        id: "b3",
        icon: Clock,
        iconBg: "#FFF8E6",
        iconColor: "#FFB830",
        title: "Jadwal Fleksibel",
        sub: "6 hari seminggu",
        className: styles.bubbleBottomRight,
        delay: 1.5,
    },
];

export default function HeroSection() {
    return (
        <section className={styles.hero} id="hero">
            {/* ══════════════════════════════════════════════
          BACKGROUND — Cloud Playground
      ══════════════════════════════════════════════ */}

            {/* Sky gradient base */}
            <div className={styles.heroBg} />

            {/* Glowing sun */}
            <motion.div
                className={styles.sun}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* ── Clouds ── */}
            {/* Large cloud — top right, slow drift */}
            <motion.div
                className={`${styles.cloud} ${styles.cloudLg} ${styles.cloudTR}`}
                {...cloudDrift(32, 14, 0)}
            >
                <div className={styles.cloudBody} />
                <div className={`${styles.cloudBump} ${styles.bumpA}`} />
                <div className={`${styles.cloudBump} ${styles.bumpB}`} />
                <div className={`${styles.cloudBump} ${styles.bumpC}`} />
            </motion.div>

            {/* Medium cloud — top left */}
            <motion.div
                className={`${styles.cloud} ${styles.cloudMd} ${styles.cloudTL}`}
                {...cloudDrift(22, 18, 2)}
            >
                <div className={styles.cloudBody} />
                <div className={`${styles.cloudBump} ${styles.bumpA}`} />
                <div className={`${styles.cloudBump} ${styles.bumpB}`} />
            </motion.div>

            {/* Small cloud — mid right */}
            <motion.div
                className={`${styles.cloud} ${styles.cloudSm} ${styles.cloudMR}`}
                {...cloudDrift(18, 11, 5)}
            >
                <div className={styles.cloudBody} />
                <div className={`${styles.cloudBump} ${styles.bumpA}`} />
                <div className={`${styles.cloudBump} ${styles.bumpB}`} />
            </motion.div>

            {/* Wispy cloud — lower left, very slow */}
            <motion.div
                className={`${styles.cloud} ${styles.cloudWisp} ${styles.cloudBL}`}
                {...cloudDrift(14, 20, 8)}
            >
                <div className={styles.cloudBody} />
                <div className={`${styles.cloudBump} ${styles.bumpA}`} />
            </motion.div>

            {/* ── Birds ── */}
            <motion.div
                className={`${styles.bird} ${styles.bird1}`}
                {...birdFloat(0)}
            >
                <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                    <path
                        d="M2,8 Q8,2 16,8 Q24,2 30,8"
                        stroke="#7A6552"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.35"
                    />
                </svg>
            </motion.div>
            <motion.div
                className={`${styles.bird} ${styles.bird2}`}
                {...birdFloat(1.5)}
            >
                <svg width="22" height="11" viewBox="0 0 22 11" fill="none">
                    <path
                        d="M1,5.5 Q5.5,1 11,5.5 Q16.5,1 21,5.5"
                        stroke="#7A6552"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.28"
                    />
                </svg>
            </motion.div>
            <motion.div
                className={`${styles.bird} ${styles.bird3}`}
                {...birdFloat(3)}
            >
                <svg width="18" height="9" viewBox="0 0 18 9" fill="none">
                    <path
                        d="M1,4.5 Q4.5,1 9,4.5 Q13.5,1 17,4.5"
                        stroke="#7A6552"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        fill="none"
                        opacity="0.22"
                    />
                </svg>
            </motion.div>

            {/* ══════════════════════════════════════════════
          LANDSCAPE BOTTOM — Ground + Grass unified
          Both sit at bottom:0, stacked in z-order:
          ground fill (z-index 3) → grass waves (z-index 4) → section transition (z-index 5)
      ══════════════════════════════════════════════ */}

            {/* 1. Ground fill — solid amber strip that covers the very bottom edge,
             ensuring zero white gap regardless of viewport height */}
            {/* <div className={styles.groundFill} aria-hidden="true" /> */}

            {/* 2. Grass waves — two undulating SVG paths that sit on top of the ground.
             Uses preserveAspectRatio="none" so it stretches edge-to-edge without gaps */}
            <div className={styles.grassLayer} aria-hidden="true">
                <svg
                    viewBox="0 0 1440 260"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    {/* Back grass */}
                    <path
                        d="M0,110 C200,10 420,150 720,60 C1000,10 1200,140 1440,80 L1440,260 L0,260 Z"
                        fill="rgba(126,200,126,0.45)"
                    />

                    {/* Front grass */}
                    <path
                        d="M0,150 C260,40 540,170 860,90 C1120,30 1300,130 1440,110 L1440,260 L0,260 Z"
                        fill="rgba(72,185,96,0.72)"
                    />
                </svg>
            </div>

            {/* 3. Section transition wave — matches the next section's background (#FFFBF3)
             so the hero bleeds seamlessly into WhySection with no hard edge */}
            <div className={styles.sectionTransition} aria-hidden="true">
                <svg
                    viewBox="0 0 1440 72"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,36 C160,72 400,8 640,44 C880,80 1120,16 1440,52 L1440,72 L0,72 Z"
                        fill="#FFFBF3"
                    />
                </svg>
            </div>
            <div className={styles.heroBody}>
                <div className={`container ${styles.heroInner}`}>
                    {/* Left: Text content */}
                    <div className={styles.heroText}>
                        {/* Badge */}
                        <motion.div
                            className={styles.heroBadge}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0}
                        >
                            <span className={styles.badgeDot} />
                            Tempat Belajar Terbaik untuk Si Kecil
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className={styles.heroTitle}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.1}
                        >
                            Ayo Mulai{" "}
                            <span className={styles.titleOrange}>
                                <span className={styles.waveUnderline}>
                                    Petualangan
                                </span>
                            </span>{" "}
                            <span className={styles.titleBlue}>
                                Belajar Bersama
                            </span>{" "}
                            <span className={styles.titleSun}>Bimba IFE!</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className={styles.heroSubtitle}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.18}
                        >
                            Cara Asik Belajar Calistung
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            className={styles.heroDesc}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.2}
                        >
                            Bergabung dengan ratusan anak yang belajar membaca,
                            berhitung, bahasa Inggris, dan Jarimatika dengan
                            cara yang seru, penuh warna, dan penuh semangat!
                        </motion.p>

                        {/* Actions */}
                        <motion.div
                            className={styles.heroActions}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.3}
                        >
                            <a
                                className={styles.btnPrimary}
                                href="#registration"
                            >
                                Daftar Sekarang
                            </a>
                            <a className={styles.btnOutline} href="#programs">
                                Lihat Program
                            </a>
                        </motion.div>

                        {/* Trust chips */}
                        <motion.div
                            className={styles.heroChips}
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={0.4}
                        >
                            {chips.map((chip) => (
                                <div className={styles.chip} key={chip.label}>
                                    <span
                                        className={styles.chipDot}
                                        style={{ background: chip.color }}
                                    />
                                    <chip.icon size={14} color={chip.color} />
                                    <span>{chip.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Visual card */}
                    <motion.div
                        className={styles.heroVisual}
                        initial={{ opacity: 0, y: 32 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 0.15,
                            ease: [0.34, 1.1, 0.64, 1],
                        }}
                    >
                        {/* Main card */}
                        <motion.div
                            className={styles.heroCardMain}
                            variants={floatVariant}
                            animate="animate"
                            custom={0}
                        >
                            <div className={styles.cardScene}>
                                <Image
                                    src={Hero}
                                    alt="Kids learning illustration"
                                    fill
                                    priority
                                    className={styles.sceneBg}
                                />
                            </div>

                            <div className={styles.cardLabel}>
                                Belajar Setiap Hari, Makin Pintar!
                            </div>

                            <div className={styles.cardSub}>
                                Calistung · English · Jarimatika
                            </div>
                        </motion.div>

                        {/* Floating bubbles */}
                        {bubbles.map((b) => (
                            <motion.div
                                key={b.id}
                                className={`${styles.heroBubble} ${b.className}`}
                                initial={{ opacity: 0, scale: 0.7 }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    opacity: { duration: 0.4, delay: b.delay },
                                    scale: { duration: 0.4, delay: b.delay },
                                    y: {
                                        duration: 4 + b.delay,
                                        delay: b.delay,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                }}
                            >
                                <span
                                    className={styles.bubbleIcon}
                                    style={{ background: b.iconBg }}
                                >
                                    <b.icon
                                        size={14}
                                        color={b.iconColor}
                                        strokeWidth={2.5}
                                    />
                                </span>
                                <div>
                                    <div className={styles.bubbleTitle}>
                                        {b.title}
                                    </div>
                                    <div className={styles.bubbleSub}>
                                        {b.sub}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Kid() {
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            {/* Head */}
            <circle cx="36" cy="22" r="16" fill="#FFCBA4" />
            {/* Eyes */}
            <circle cx="30" cy="20" r="2.5" fill="#2D2014" />
            <circle cx="42" cy="20" r="2.5" fill="#2D2014" />
            {/* Smile */}
            <path
                d="M29 26 Q36 32 43 26"
                stroke="#2D2014"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
            />
            {/* Body */}
            <rect x="24" y="38" width="24" height="20" rx="6" fill="#FF8C47" />
            {/* Arms */}
            <rect x="12" y="40" width="12" height="6" rx="3" fill="#FF8C47" />
            <rect x="48" y="40" width="12" height="6" rx="3" fill="#FF8C47" />
            {/* Hair */}
            <path d="M20 22 Q20 6 36 6 Q52 6 52 22" fill="#2D2014" />
            {/* Legs */}
            <rect x="27" y="56" width="8" height="12" rx="4" fill="#FFCBA4" />
            <rect x="37" y="56" width="8" height="12" rx="4" fill="#FFCBA4" />
        </svg>
    );
}

function Message() {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect x="2" y="6" width="28" height="20" rx="4" fill="#35B8E0" />
            <rect
                x="6"
                y="10"
                width="20"
                height="2"
                rx="1"
                fill="white"
                opacity="0.8"
            />
            <rect
                x="6"
                y="14"
                width="14"
                height="2"
                rx="1"
                fill="white"
                opacity="0.6"
            />
            <rect
                x="6"
                y="18"
                width="17"
                height="2"
                rx="1"
                fill="white"
                opacity="0.6"
            />
        </svg>
    );
}
