import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Properties from "./components/Properties";
import Tenant from "./components/Tenant";
import Home from "./screens/Home";
import PropertyDetails from "./components/PropertyDetails";
import AuthState from "./context/auth/AuthState";
import PropertyState from "./context/property/PropertyState";
import TenantState from "./context/tenant/TenantState";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body-content">
        <Router>
          <AuthState>
            <Sidebar />
            <PropertyState>
              <TenantState>
                <Routes>
                  <Route exact path="/" element={<Dashboard />} />
                  <Route exact path="/properties" element={<Properties />} />
                  <Route
                    exact
                    path="/properties/edit/:id"
                    element={<PropertyDetails />}
                  />
                  <Route
                    exact
                    path="/properties/add"
                    element={<PropertyDetails />}
                  />
                  <Route
                    exact
                    path="/tenants"
                    element={<Tenant />}
                  />
                </Routes>
              </TenantState>
            </PropertyState>
          </AuthState>
        </Router>
      </div>
    </div>
  );
}
export default App;
