import styles from '../styles/hero.module.css'; 
import Image from 'next/image'; 
import Link from 'next/link'; 

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
          
          <Image
            src="/images/profile.JPG" 
            alt="Rana Bisma Qasim"
            width={250}  
            height={250}
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
