import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";
import { FaBrain, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            TOK{" "}
            <span>
              <FaBrain size={30} />
            </span>
          </a>
        </Link>
      </div>
      <Search />

      <nav>
        <ul className={styles.navbar}>
          <li className={styles.navlink}>
            <Link href="/events">
              <a> Events</a>
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/events/add">
              <a> Add Event</a>
            </Link>
          </li>
          <li className={styles.navlink}>
            <Link href="/about">
              <a> About</a>
            </Link>
          </li>

          <li className={styles.navlink}>
            <Link href="/account/login">
              <a
                className="btn-secondary btn-icon"
                style={{ backgroundColor: "#475d43" }}
              >
                <FaSignInAlt /> Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
