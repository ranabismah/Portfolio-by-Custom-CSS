
import './styles/global.css';  
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website!',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;



