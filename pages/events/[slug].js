import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import EventMap from "@/components/EventMap";
import { API_URL, NEXT_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  const router = useRouter();

  const BASE_URL = "http://172.0.0.1";

  return (
    <Layout title={`Masterclass Event: ${evt.name}`}>
      <div className={styles.event}>
        <span>
          {new Date(evt.date).toLocaleDateString("en-gb")} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        <ToastContainer />
        {evt.image && (
          <div className={styles.image}>
            <Image
              src={evt.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <div style={{ marginBottom: "10px" }}>
          <FacebookShareButton
            url={`${NEXT_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <FacebookIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </FacebookShareButton>

          <TwitterShareButton
            url={`${NEXT_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <TwitterIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </TwitterShareButton>

          <LinkedinShareButton
            url={`${NEXT_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <LinkedinIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`${NEXT_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <WhatsappIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </WhatsappShareButton>
        </div>

        <div className={styles.details}>
          <div className={styles.info}>
            <h3>Class Master</h3>
            <p>{evt.performers}</p>
            <h3>what is on</h3>
            <p>{evt.description}</p>
            <h3>Venue </h3>
            <p>
              <strong>{evt.venue}</strong>
            </p>
            <p>{evt.address}</p>
          </div>

          <div className={styles.map}>{/* <EventMap evt={evt} /> */}</div>
        </div>

        <Link href="/events">
          <a className={styles.back}>
            <FaArrowAltCircleLeft /> Go Back
          </a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
