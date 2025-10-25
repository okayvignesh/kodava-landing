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
        <title>Levista Championship Trophy 2025 - Kodava Hockey Academy</title>
        <meta
          name="description"
          content="Kodava Hockey Academy presents Levista Championship Trophy 2025 Raffle with 15 exciting prizes. Join us from 26th-29th Dec 2025 in Murnad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={`${styles.container} ${montserrat.variable} ${orbitron.variable}`}>
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
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              Championship 2025
            </div>

            <h1 className={styles.heroTitle}>
              LEVISTA
              <span className={styles.heroTitleGradient}>CHAMPIONSHIP</span>
              TROPHY
            </h1>

            <p className={styles.heroSubtitle}>
              Presented by Kodava Hockey Academy
            </p>

            <div className={styles.heroStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15</div>
                <div className={styles.statLabel}>Exciting Prizes</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>4</div>
                <div className={styles.statLabel}>Days Event</div>
              </div>
            </div>

            <div className={styles.eventInfo} id="details">
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📅</div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>Event Dates</div>
                  <div className={styles.infoValue}>26th - 29th December 2025</div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <div className={styles.infoText}>
                  <div className={styles.infoLabel}>Location</div>
                  <div className={styles.infoValue}>Murnad</div>
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
                <p className={styles.prizeDescription}>
                  Experience the future of mobility with Ather's premium electric scooter featuring smart technology
                </p>
              </div>
            </div>

            <div className={`${styles.prizeCard} ${styles.prize2}`}>
              <div className={styles.prizeRibbon}>2nd Prize</div>
              <div className={styles.prizeImgContainer}>
                <Image
                  src="/images/prizes/sony-55.webp"
                  alt="Sony 55 LED TV"
                  width={400}
                  height={300}
                  className={styles.prizeImg}
                />
              </div>
              <div className={styles.prizeDetails}>
                <h3 className={styles.prizeTitle}>Sony 55" LED TV</h3>
                <p className={styles.prizeDescription}>
                  Immersive entertainment with crystal clear 4K resolution and stunning colors
                </p>
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
                <p className={styles.prizeDescription}>
                  Perfect viewing experience with vibrant colors and smart features
                </p>
              </div>
            </div>
          </div>

          {/* Additional Prizes */}
          <div className={styles.additionalPrizes}>
            <h3 className={styles.additionalTitle}>More Amazing Prizes</h3>
            <div className={styles.prizeGrid}>
              {[
                { rank: "4th", icon: "🎵", name: "Sony Music System", color: "#FF6B6B" },
                { rank: "5th", icon: "❄️", name: "Refrigerator", color: "#4ECDC4" },
                { rank: "6th", icon: "⚡", name: "Stihl Chainsaw", color: "#FFD93D" },
                { rank: "7th", icon: "🎯", name: "Air Gun", color: "#95E1D3" },
                { rank: "8th", icon: "🌿", name: "Stihl Brush Cutter", color: "#A8E6CF" },
                { rank: "9th", icon: "🚲", name: "Urban Terrain Bicycle", color: "#FF8B94" },
                { rank: "10th", icon: "🔥", name: "Microwave Oven", color: "#C7CEEA" },
                { rank: "11th-15th", icon: "🏑", name: "Hockey Stick (5 Winners)", color: "#B4A7D6" },
              ].map((prize, index) => (
                <div key={index} className={styles.gridPrizeCard} >
                  <div className={styles.gridPrizeIcon}>{prize.icon}</div>
                  <div className={styles.gridPrizeRank}>{prize.rank}</div>
                  <div className={styles.gridPrizeName}>{prize.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}