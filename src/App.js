import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/routes/Home';
import Doctor from './components/routes/Doctor';
import Clinics from './components/routes/Clinics';
import Therapies from './components/routes/Therapies';
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
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="doctor" element={<Doctor />} />
        <Route path="clinics" element={<Clinics />} />
        <Route path="ageGroups" element={<AgeGroups />} />
        <Route path="therapies" element={<Therapies />} />
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
