import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPart from "./page/MainPart/MainPart";
import ContactSection from "./page/Contact/ContactSection";
import AcoutUs from "./page/aboutUs/AcoutUs";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainPart />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <AcoutUs />
    </>
  );
}

export default App;
