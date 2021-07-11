import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import { FaBrain } from "react-icons/fa";

// import styles from '../styles/Home.module.css'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1> Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
      <div className="about-home">
        <h3>Giving is Receiving</h3>
        <p>
          Today’s world is full of people WANTING and GETTING and looking out
          for self. It’s a dog eat dog world, they say. But what happens when
          someone comes along giving and sharing knowledge freely?{" "}
          <Link href="/about">Read more...</Link>
        </p>
      </div>

      <div className="terms">
        <h3>Terms & Privacy</h3>
        <p>
          <FaBrain /> {""} No data is being collected other than anonymized
          usage statistics
        </p>
        <p>
          <FaBrain />
          {""} No data is being shared or sold to other parties
        </p>
        <p>
          <FaBrain />
          {""} This product is not liable for any damage that might be caused by
          using it
        </p>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
