import { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import MainContent from "./ui/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
