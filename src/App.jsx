import { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import MainContent from "./ui/MainContent";
import AddForm from "./ui/AddForm";

function App() {
  const [isForm, setIsForm] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Header onAddClick={() => setIsForm(true)} />

      {isForm && <AddForm onClose={() => setIsForm(false)} />}

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
