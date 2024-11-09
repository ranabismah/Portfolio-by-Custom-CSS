// src/app/about/page.tsx
// src/app/about/page.tsx

import About from '../components/About'; // Import About component
import styles from '../styles/about.module.css'; // Import styles for About page

const AboutPage = () => {
  return (
    <div className={styles.pageContainer}> {/* Apply container styles */}
      <About /> {/* Render the About component */}
    </div>
  );
};

export default AboutPage;
