import './App.css';
import { useState, useEffect } from 'react';
import DotLoader from 'react-spinners/DotLoader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/routes/Home';
import Doctor from './components/routes/Doctor';
import Clinics from './components/routes/Clinics';
import Treatments from './components/routes/Treatments';
import InvisibleBraces from './components/InvisibleBraces';
import TongueBraces from './components/TongueBraces';
import MetalBraces from './components/MetalBraces';
import MovingBraces from './components/MovingBraces';
import Invisalign from './components/Invisalign';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <div className="sweet-loading">
        <DotLoader
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="doctor" element={<Doctor />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="ageGroups" element={<AgeGroups />} />
          <Route path="treatments" element={<Treatments />}>
            <Route path="invisibleBraces" element={<InvisibleBraces />} />
            <Route path="tongueBraces" element={<TongueBraces />} />
            <Route path="movingBraces" element={<MovingBraces />} />
            <Route path="metalBraces" element={<MetalBraces />} />
            <Route path="invisalign" element={<Invisalign />} />
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
      </BrowserRouter>
    </>
  );
};

export default App;

// {/* <div className="App">
//   <header className="App-header">Hello World</header>
//   {/* <div
//         dangerouslySetInnerHTML={{
//           __html: therapies.therapyTypes.therapy1.info.description,
//         }}
//       ></div> */}
//   <Footer />
// </div>; */}
