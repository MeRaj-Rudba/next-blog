import Head from "next/head";
import Image from "next/image";
import ContactForm from "../../components/contact-page/contact-form";

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </div>
  );
}
