// src/app/components/Hero.tsx

import styles from '../styles/hero.module.css'; // Import your styles
import Image from 'next/image'; // Import Next.js Image component
import Link from 'next/link'; // Import Link component from Next.js

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Text and button section */}
        <div className={styles.heroText}>
          <h1>Hi, I'm <span className={styles.name}>Rana Bisma Qasim</span></h1>
          <p>I am a passionate Full Stack Developer creating engaging web applications.</p>
          
          {/* "Hire me" button */}
          <Link href="/contact">
            <button className={styles.heroButton}>Hire me</button>
          </Link>
        </div>

        {/* Profile image section */}
        <div className={styles.heroImage}>
          {/* No need to import the image, just use the correct path */}
          <Image
            src="/images/profile.JPG" // Relative path to image in public folder
            alt="Rana Bisma Qasim"
            width={250}  // Image size
            height={250} // Image size
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
