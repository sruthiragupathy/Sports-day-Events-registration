import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Base/Header";
import SportsDayEventsList from "./Components/Home/SportsDayEventsList";
import RegisteredEvents from "./Components/RegisteredEvents";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SportsDayEventsList />} />
        <Route path="/registered-events" element={<RegisteredEvents />} />
      </Routes>
    </div>
  );
}

export default App;
