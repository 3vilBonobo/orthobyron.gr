import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/routes/Home';
import Doctor from './components/routes/Doctor';
import Clinics from './components/routes/Clinics';
import Treatments from './components/routes/Treatments';
import InvisibleBraces from './components/OutletComponents/InvisibleBraces';
import TongueBraces from './components/OutletComponents/TongueBraces';
import MetalBraces from './components/OutletComponents/MetalBraces';
import MovingBraces from './components/OutletComponents/MovingBraces';
import Invisalign from './components/OutletComponents/Invisalign';
import AgeGroups from './components/routes/AgeGroups';
import OralHygiene from './components/routes/OralHygiene';
import Advice from './components/routes/Advice';
import FirstAid from './components/routes/FirstAid';
import Contact from './components/routes/Contact';
import Emergencies from './components/routes/Emergencies';
import Faq from './components/routes/Faq';
import NotFound from './components/routes/NotFound';
import Footer from './components/Footer';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const listenToScroll = () => {
    let heightToHideFrom = 50;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  });
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      <Header isVisible={isVisible} />

      <Routes location={background || location} key={location.key}>
        <Route path="doctor" element={<Doctor />} />
        <Route path="clinics" element={<Clinics />} />
        <Route path="ageGroups" element={<AgeGroups />} />
        <Route path="treatments" element={<Treatments />}>
          <Route path="invisibleBraces" element={<InvisibleBraces />} />
          <Route path="tongueBraces" element={<TongueBraces />} />
          <Route path="movingBraces" element={<MovingBraces />} />
          <Route path="metalBraces" element={<MetalBraces />} />
          <Route path="invisalign" element={<Invisalign />} />
          {background && (
            <Route>
              <Route path="invisibleBraces" element={<InvisibleBraces />} />
              <Route path="tongueBraces" element={<TongueBraces />} />
              <Route path="movingBraces" element={<MovingBraces />} />
              <Route path="metalBraces" element={<MetalBraces />} />
              <Route path="invisalign" element={<Invisalign />} />
            </Route>
          )}
        </Route>
        <Route path="oralHygiene" element={<OralHygiene />} />
        <Route path="advice" element={<Advice />} />
        <Route path="firstAid" element={<FirstAid />} />
        <Route path="emergencies" element={<Emergencies />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
