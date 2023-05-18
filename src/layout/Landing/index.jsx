import Footer from './Footer';
import Appbar from './Header';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Appbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
