import Image from 'next/image';
import styles from '../styles/about.module.css'; 


const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Image Section */}
          <div className={styles.imageWrapper}>
            <Image
              src="/images/profile.JPG" 
              alt="Rana Bisma Qasim"
              className={styles.profileImage}
              width={150}
              height={150}
            />
          </div>

          {/* Text Section */}
          <div className={styles.textWrapper}>
            <h1 className={styles.heading}>
              About <span className={styles.highlight}>Me!</span>
            </h1>
            <p className={styles.description}>
              Hi there! I’m Rana Bisma Qasim, a passionate Full Stack Developer just starting my journey in the tech industry. With a solid grasp of HTML, CSS, and JavaScript/TypeScript, I enjoy building engaging web applications using frameworks like Next.js and Tailwind CSS.
            </p>

            <h2 className={styles.subHeading}>
              My <span className={styles.highlight}>Mission</span>
            </h2>
            <p className={styles.missionText}>
              Delivering top-notch quality work to clients, exceeding expectations, and building long-lasting relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
