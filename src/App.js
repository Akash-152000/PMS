import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Properties from "./components/Properties";
import Home from "./screens/Home";
import PropertyDetails from "./components/PropertyDetails";

function App() {
  return(
  <div className="app">
    <Header />
    <div className="app-body-content">
      <Router>
      <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route exact path="/properties/edit" element={<PropertyDetails />} />
        </Routes>
      </Router> 
    </div>
  </div>
  );
}
export default App;
