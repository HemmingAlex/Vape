import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
// import backgroundImage from "'../public/Header_Home_Desktop.JPG"
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Head>
        <title>Vape website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.lefty}>
          <div className={styles.influencer}>
            PUBLISH <div className={styles.orange}>VAPE</div>
            <br />
            CONTENT AND
            <br />
            GET <div className={styles.orange}>PAID</div>
            <br />
            <img
              className={styles.image}
              src="/message_us.png"
              height={50}
              width={50}
            />
          </div>
          <div className={styles.details}>
            Vape Want to earn money for creating killer vape social content?
            Vape Influencer is for you!
            <br />
            <br />
            Start earning by showcasing your creativity. Sign up today to get
            access to fast and simple tasks today!
          </div>

          <div className={styles.buttons}>
            <button className={styles.enrole}>Start Enrolling Now!</button>
            <button className={styles.moreInfo}>More info</button>
          </div>
        </div>

        <div className={styles.breakWords}>
          MAKE MONEY BY COMPLETING TASKS
          <img
            className={styles.image}
            src="/message_us.png"
            height={50}
            width={50}
          />
        </div>
      </main>
      <br />
      <br />
      <div className={styles.carousel}>
        <Carousel />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <footer className={styles.footer}>
        Vape Influencer Lydon House 10th Floor, Rmy, 62 Hagley Road, Birmingham,
        United Kingdom, B16 8PE
      </footer>
    </div>
  );
}
