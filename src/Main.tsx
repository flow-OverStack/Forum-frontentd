import FirstPage from "./pages/FirstPage";
import Question from "./pages/Question";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Topics from "./pages/Topics";
import "./Main.css";
import { useState } from "react";

const Main = () => {
  const [page, setPage] = useState<'question' | 'hero' | 'topics'>('hero');
  switch (page) {
    case 'hero':
      return (
        <>
          <Header setPage={setPage} page={page} />
          <FirstPage />
          <Footer />
        </>
      )
    case 'topics':
      return (
        <>
          <Header setPage={setPage} page={page}/>
          <Topics />
          <Footer />
        </>
      )
    case 'question':
      return (
        <>
          <Header setPage={setPage} page={page}/>
          <Question />
          <Footer />
        </>
      )

  }
};

export default Main;
