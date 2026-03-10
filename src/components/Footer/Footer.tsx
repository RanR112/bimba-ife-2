import { Star } from "lucide-react";
import styles from "./Footer.module.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_ACCOUNT;

const menuLinks = [
    { label: "Keunggulan", href: "#why" },
    { label: "Tentang Kami", href: "#about" },
    { label: "Program", href: "#programs" },
    { label: "Jadwal", href: "#schedule" },
    { label: "Cara Daftar", href: "#registration" },
    { label: "Ketentuan", href: "#rules" },
];

const contactLinks = [
    { label: "Telp / WhatsApp", href: `https://wa.me/${whatsapp}` },
    { label: "Instagram", href: `https://instagram.com/${instagram}` },
    { label: "Lokasi Unit Kami", href: "#contact" },
    { label: "Formulir Pendaftaran", href: "#registration" },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Brand column */}
                    <div className={styles.brandCol}>
                        <div className={styles.brand}>
                            <Image
                                src={Logo}
                                alt="Logo"
                                className={styles.brandMark}
                            />
                            <span className={styles.brandName}>
                                Bimba<em>IFE</em>
                            </span>
                        </div>
                        <p className={styles.brandDesc}>
                            Lembaga bimbingan belajar anak usia 3-7 tahun yang
                            berfokus pada Calistung, English, dan Jarimatika.
                            Belajar seru bersama Bimba IFE!
                        </p>
                    </div>

                    {/* Menu links */}
                    <div>
                        <h5 className={styles.colTitle}>Menu Utama</h5>
                        <ul className={styles.linkList}>
                            {menuLinks.map((l) => (
                                <li key={l.href}>
                                    <a className={styles.link} href={l.href}>
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact links */}
                    <div>
                        <h5 className={styles.colTitle}>Kontak</h5>
                        <ul className={styles.linkList}>
                            {contactLinks.map((l) => (
                                <li key={l.label}>
                                    <a
                                        className={styles.link}
                                        href={l.href}
                                        target={
                                            l.href.startsWith("http")
                                                ? "_blank"
                                                : undefined
                                        }
                                        rel="noopener noreferrer"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className={styles.bottom}>
                    <Link
                        href={"https://www.randyrafael.my.id/en"}
                        target={"_blank"}
                    >
                        © 2025{" "}
                        <span className={styles.bottomAccent}>Bimba IFE</span>.
                        All rights reserved.
                    </Link>
                </div>
            </div>
        </footer>
    );
}