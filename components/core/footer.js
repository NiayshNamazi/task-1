import React from 'react';
import{
    Youtube
}from "iconsax-react";
import styles from "@/components/core/styles/footer.module.css";
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
        <Link href={""} className={styles.footerItemWrapper}>
            <Youtube/>
            <div className={styles.footerItemText}>Youtube</div>
        </Link>
        <Link href={""} className={styles.footerItemWrapper}>
            <Youtube/>
            <div className={styles.footerItemText}>Youtube</div>
        </Link>
        <Link href={""} className={styles.footerItemWrapper}>
            <Youtube/>
            <div className={styles.footerItemText}>Youtube</div>
        </Link>
    </div>
  )
}

export default Footer