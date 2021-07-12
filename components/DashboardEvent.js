import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/DashboardEvent.module.css";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

export default function DashboardEvent({ evt, handleDelete }) {
  return (
    <div className={styles.event}>
      {evt.image && (
        <div className={styles.img}>
          <Image src={evt.image.formats.medium.url} width={350} height={219} />
        </div>
      )}
      <h4>
        <Link href={`/events/${evt.slug}`}>
          <a>{evt.name}</a>
        </Link>
      </h4>
      <Link href={`/events/edit/${evt.id}`}>
        <a className={styles.edit}>
          <FaPencilAlt /> <span>EDIT</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(evt.id)}
      >
        <FaTimes /> <span>DELETE</span>
      </a>
    </div>
  );
}
