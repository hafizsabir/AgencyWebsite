import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Testimonial from "./components/Testimonial";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <main className={`font-bodyFont w-full h-auto transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-bodyColor text-lightText' 
        : 'bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 text-slate-800'
    }`}>
      <Navbar />
      <div className="px-4">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Feature />
          <Projects />
          <Resume />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
