import Footer from "@/components/core/footer";
import styles from "@/components/layout/styles/authLayout.module.css";
import Image from "next/image";
import authPageImage from "@/public/assets/picture/background2.jpg";



export default function Authlayout({children}) {
    return (
        
<div className={styles.authLayout}>
        <Image
            className={styles.image}
            src={authPageImage}
            alt="NYC Landscape"
        />
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
                <Footer />
        </div>
</div>

        
    );
}
