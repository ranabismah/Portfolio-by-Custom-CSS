// src/app/contact/page.tsx

import Contact from '../components/Contact'; // Import the Contact component
import styles from '../styles/contact.module.css'; // Import styles for the Contact page

const ContactPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Contact /> {/* Render the Contact component */}
    </div>
  );
};

export default ContactPage;
