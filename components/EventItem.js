import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.medium.url
              : "/images/event-default.png"
          }
          width={600}
          height={354}
        />
      </div>
      <div className={styles.info}>
        <span className={styles.date}>
          {new Date(evt.date).toLocaleDateString("en-gb")} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
        <div className={styles.link}>
          <Link href={`/events/${evt.slug}`}>
            <a className="btn">Details</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
