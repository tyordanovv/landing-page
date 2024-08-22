import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import SurveyPage from './pages/SurveyPage.jsx';
import UniversitiesPage from './pages/UniversitiesPage.jsx';
import StudyAbroadPage from './pages/StudyAbroadPage.jsx';
import CareerOrientationPage from './pages/CareerOrientationPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <div className='App-container'>
        <Routes>
          <Route path="/" element={<><Navbar /><LandingPage /><Footer /></>} />
          <Route path="/survey" element={<SurveyPage />} />
          <Route path="/universities" element={<><Navbar /><UniversitiesPage /><Footer /></>} />
          <Route path="/study-abroad" element={<><Navbar /><StudyAbroadPage /><Footer /></>} />
          <Route path="/career-orientation" element={<><Navbar /><CareerOrientationPage /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><ContactPage /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;