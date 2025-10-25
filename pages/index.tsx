import Head from "next/head";
import Image from "next/image";
import styles from "../styles/landing.module.css";
import { Montserrat, Orbitron } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800'],
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  weight: ['400', '700', '900'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Levista Champions Trophy 2025 - Kodava Hockey Academy</title>
        <meta
          name="description"
          content="Kodava Hockey Academy presents Levista Champions Trophy 2025 Raffle with 15 exciting prizes. Join us from 26th-29th Dec 2025 in Murnad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Levista Champions Trophy 2025 - Kodava Hockey Academy" />
        <meta property="og:description" content="Kodava Hockey Academy presents Levista Champions Trophy 2025 Raffle with 15 exciting prizes. Join us from 26th-29th Dec 2025 in Murnad. Celebrating 25 Years of Kodava Hockey Festival!" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Kodava Hockey Academy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Levista Champions Trophy 2025 - Kodava Hockey Academy" />
        <meta name="twitter:description" content="Win amazing prizes! 15 exciting prizes including Ather Electric Scooter, LED TVs & more. Join the celebration of 25 Years Kodava Hockey Festival." />
        <meta name="twitter:image" content="/images/logo.png" />

        {/* Additional Meta Tags */}
        <meta name="keywords" content="Kodava Hockey, Levista Championship, Hockey Tournament, Raffle Prizes, Kodava Academy, Murnad, Hockey Festival" />
        <meta name="author" content="Kodava Hockey Academy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.container} ${montserrat.variable} ${orbitron.variable}`}>
        {/* Celebration Emblem */}
        <div className={styles.celebrationEmblem}>
          <div className={styles.emblemInner}>
            <div className={styles.emblemYear}>25</div>
            <div className={styles.emblemText}>YEARS of</div>
            <div className={styles.emblemSubtext}>Kodava Hockey Festival</div>
          </div>
        </div>

        {/* Logo and President Images */}
        <div className={styles.headerImages}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo.jpg"
              alt="Kodava Hockey Academy"
              width={120}
              height={120}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.presidentContainer}>
            <Image
              src="/images/profile.jpeg"
              alt="President"
              width={120}
              height={120}
              className={styles.presidentImage}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.gradient3}></div>
          </div>

          <div className={styles.heroContent}>

            <p className={styles.heroPresenter}>
              Kodava Hockey Academy<sup>®</sup> <br />presents
            </p>

            <h1 className={styles.heroTitle}>
              LEVISTA
              <span className={styles.heroTitleGradient}>CHAMPIONS</span>
              TROPHY 2025
            </h1>

            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Raffle Prizes</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statLabel}>Days Event</div>
              </div>
            </div>

            <div className={styles.eventInfo} id="details">
              <div className={styles.infoCard}>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>Event Dates</div>
                  <div className={styles.infoValue}>26th - 29th December 2025</div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className="flex items-center gap-2 justify-center w-100">
                  <div className={styles.infoIcon}>📍</div>
                  <div className="flex flex-col">
                    <div className={styles.infoLabel}>Location</div>
                    <div className={styles.infoValue}>Murnad</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className={styles.prizesSection} id="prizes">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>The Rewards</span>
            <h2 className={styles.sectionTitle}>Grand Prizes Await</h2>
            <p className={styles.sectionDesc}>15 incredible prizes for our lucky winners</p>
          </div>

          {/* Top 3 Prizes */}
          <div className={styles.topPrizes}>
            <div className={`${styles.prizeCard} ${styles.prize1}`}>
              <div className={styles.prizeRibbon}>1st Prize</div>
              <div className={styles.prizeImgContainer}>
                <Image
                  src="/images/prizes/ather.avif"
                  alt="Ather Electric Scooter"
                  width={400}
                  height={300}
                  className={styles.prizeImg}
                />
              </div>
              <div className={styles.prizeDetails}>
                <h3 className={styles.prizeTitle}>Ather Electric Scooter</h3>
              </div>
            </div>

            <div className={`${styles.prizeCard} ${styles.prize2}`}>
              <div className={styles.prizeRibbon}>2nd Prize</div>
              <div className={styles.prizeImgContainer}>
                <Image
                  src="/images/prizes/tv-55.webp"
                  alt="Sony 55 LED TV"
                  width={400}
                  height={300}
                  className={styles.prizeImg}
                />
              </div>
              <div className={styles.prizeDetails}>
                <h3 className={styles.prizeTitle}>Sony 55" LED TV</h3>
              </div>
            </div>

            <div className={`${styles.prizeCard} ${styles.prize3}`}>
              <div className={styles.prizeRibbon}>3rd Prize</div>
              <div className={styles.prizeImgContainer}>
                <Image
                  src="/images/prizes/tv-43.png"
                  alt="Sony 43 LED TV"
                  width={400}
                  height={300}
                  className={styles.prizeImg}
                />
              </div>
              <div className={styles.prizeDetails}>
                <h3 className={styles.prizeTitle}>Sony 43" LED TV</h3>
              </div>
            </div>
          </div>

          {/* Additional Prizes */}
          <div className={styles.additionalPrizes}>
            <h3 className={styles.additionalTitle}>More Amazing Prizes</h3>
            <div className={styles.prizeGrid}>
              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/music-system.jpg"
                    alt="Sony Music System"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>4th</div>
                <div className={styles.gridPrizeName}>Sony Music System</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/refrigerator.jpg"
                    alt="Refrigerator"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>5th</div>
                <div className={styles.gridPrizeName}>Refrigerator</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/chainsaw.webp"
                    alt="Stihl Chainsaw"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>6th</div>
                <div className={styles.gridPrizeName}>Stihl Chainsaw</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/airgun.jpg"
                    alt="Air Gun"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>7th</div>
                <div className={styles.gridPrizeName}>Air Gun</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/brush-cutter.jpg"
                    alt="Stihl Brush Cutter"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>8th</div>
                <div className={styles.gridPrizeName}>Stihl Brush Cutter</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/cycle.webp"
                    alt="Urban Terrain Bicycle"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>9th</div>
                <div className={styles.gridPrizeName}>Urban Terrain Bicycle</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/oven.avif"
                    alt="Microwave Oven"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>10th</div>
                <div className={styles.gridPrizeName}>Microwave Oven</div>
              </div>

              <div className={styles.gridPrizeCard}>
                <div className={styles.gridPrizeImgContainer}>
                  <Image
                    src="/images/prizes/hockey.webp"
                    alt="Hockey Stick"
                    width={250}
                    height={150}
                    className={styles.gridPrizeImg}
                  />
                </div>
                <div className={styles.gridPrizeRank}>11th-15th</div>
                <div className={styles.gridPrizeName}>Hockey Stick (5 Winners)</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}