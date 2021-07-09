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
import { API_URL } from "@/config/index";
import styles from "@/styles/Event.module.css";
import { useRouter } from "next/router";

export default function EventPage({ evt }) {
  const router = useRouter();
  const deleteEvent = async (e) => {
    if (confirm("Are you sure?")) {
      const res = await fetch(`${API_URL}/events/${evt.id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push("/events");
      }
    }
  };
  const BASE_URL = "http://172.0.0.1";

  return (
    <Layout title={`Masterclass Event: ${evt.name}`}>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <a className={styles.edit}> Edit Event</a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            Delete Event{" "}
          </a>
        </div>
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
            url={`${BASE_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <FacebookIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </FacebookShareButton>

          <TwitterShareButton
            url={`${BASE_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <TwitterIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </TwitterShareButton>

          <LinkedinShareButton
            url={`${BASE_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <LinkedinIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </LinkedinShareButton>

          <WhatsappShareButton
            url={`${BASE_URL}/events/${evt.slug}`}
            qoute={`Free Masterclass: ${evt.name} `}
            hashtag="#Masterclass"
          >
            <WhatsappIcon
              style={{ borderRadius: "50%", marginRight: "5px" }}
              size={30}
            />
          </WhatsappShareButton>
        </div>

        <h3>Class Master</h3>
        <p>{evt.performers}</p>
        <h3>what's on</h3>
        <p>{evt.description}</p>
        <h3>Venue </h3>
        <p>
          <strong>{evt.venue}</strong>
        </p>
        <p>{evt.address}</p>

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
