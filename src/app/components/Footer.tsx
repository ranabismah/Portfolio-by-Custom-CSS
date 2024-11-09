import styles from '../styles/footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaGithub size={24} className={styles.icon} /> {/* GitHub Icon */}
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <FaLinkedin size={24} className={styles.icon} /> {/* LinkedIn Icon */}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

