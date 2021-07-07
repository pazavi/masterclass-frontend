import Link from "next/link";
import Search from "./Search";
import styles from "@/styles/Header.module.css";
import { FaBrain } from "react-icons/fa";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            Masterclass{" "}
            <span>
              <FaBrain size={30} />
            </span>
          </a>
        </Link>
      </div>
      <Search />

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
