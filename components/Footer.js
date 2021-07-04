import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a onClick={() => window.open("https://www.dynamic-juice.com/")}>
        <img
          className="logo-footer"
          src="https://res.cloudinary.com/ddgevj2yp/image/upload/c_scale,h_20/v1619345869/Logo-02_PNG_2_iozyex.png"
          alt="LogoFooter"
        />
      </a>

      <p>
        &copy;
        {new Date().getFullYear()}&nbsp;| All Rights Reserved
      </p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
