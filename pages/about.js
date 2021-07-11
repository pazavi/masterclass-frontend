import Layout from "@/components/Layout";
import Image from "next/image";
import { FaBrain } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Layout title="About TOK - Tree of knowledge">
      <h1>Giving is Receiving</h1>
      <p>
        Today’s world is full of people WANTING and GETTING and looking out for
        self. It’s a dog eat dog world, they say. But what happens when someone
        comes along giving and sharing knowledge freely?
      </p>

      <p>
        It’s not just a sign that you are confident in your product or service.
        After all, when you give away knowledge freely, the whole world is a
        reviewer and a potential customer.
      </p>

      <p style={{ backgroundColor: "#bfcfff", padding: "5px" }}>
        By giving away knowledge freely, you are encouraging and building your
        own audience base that follows you willingly – These are the strongest
        and most effective captive audiences you can build.
      </p>

      <p>
        Giving away your knowledge could be seen as a ‘loss’ when you could be
        charging for it – but charging for it doesn’t make you ‘exceptional’, it
        just makes you another business.
      </p>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/ddgevj2yp/image/upload/e_grayscale/v1625899237/concert-768722_1920_nuz1yl.jpg"
          }
          width={960}
          height={600}
        />
      </div>
      <p>
        Although having paid content may be a very important part of your
        business, it’s worth giving away some stuff for free at the bottom of
        your funnel, in order to pursue the larger, greater payoff and reward.
        Shifting from this short-term to long-term vision in your marketing is
        an investment you’ll thank yourself for.
      </p>

      <p>What do you know that could help your audience?</p>

      <p>
        Why not package up that expertise and create an 'offline' masterclass
        event with it and release some of that knowledge for free?
      </p>

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
