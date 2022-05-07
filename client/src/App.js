import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Loader from './components/Loader';

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ru', 'uz'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {useSuspense: false}
  });

function App() {
  const [cursorX, setCursorX] = useState()
  const [cursorY, setCursorY] = useState()
  const [showLoader, setShowLoader] = useState(true)


  useEffect(() => {
    AOS.init();
    AOS.refresh();

    setTimeout(() => {
      window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX)
        setCursorY(e.pageY)
      })
      setShowLoader(false)
    }, 3000);
  }, []);

  return (
    showLoader ? (
      <Loader/>
    ) : (
      <>
    <div className='cursor'
    style={{
      left: cursorX + 'px',
      top: cursorY + 'px'
    }}
    ></div>
      <Navbar/>
       <Main/>
    </>
    )
  );
}

export default App;
