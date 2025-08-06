 import { useEffect, useState } from "react";
 import Navbar from './components/Navbar';
 import Hero from './components/Hero';
 import Services from "./components/services/Services";
 import Testimonials from './components/Testimonials';
import CaseStudies from "./components/CaseStudies";
import GetDemoSection from "./components/GetDemoSection";
import Footer from "./components/Footer";
import  ContactPopup  from "./components/ContactPopup";
import ScrollToTopButton from "./components/ScrollToTopButton"








export default function App() {
  const [showContact, setShowContact] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() =>{
    if (darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },[darkMode]);
  
  return (
    <div className="font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900">
     <Navbar 
     onContactClick={() => setShowContact(true)}
     onToggleTheme={() => setDarkMode((prev) => !prev)}
     darkMode={darkMode}
     /> 
     <div>
     <Hero/>
     <Services/>
     <Testimonials/>
     <CaseStudies/>
     <ContactPopup/>
     <GetDemoSection/>
     <Footer/>
     </div>
     <ScrollToTopButton/>
    </div>
  )
}
