import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Orthodontics from './components/pages/Orthodontics';
import Patients from './components/pages/Patients';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="orthodontics" element={<Orthodontics />} />
        <Route path="patients" element={<Patients />} />
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
