import { useState } from "react";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import MainContent from "./ui/MainContent";
import AddForm from "./ui/AddForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isForm, setIsForm] = useState(false);

  return (
    <div className="min-h-screen">
      <Header setTasks={setTasks} onAddClick={() => setIsForm(true)} />

      {isForm && (
        <AddForm
          onClose={() => setIsForm(false)}
          setTasks={setTasks}
          setIsForm={setIsForm}
        />
      )}

      <MainContent tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}

export default App;
