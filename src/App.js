import "./App.css";
import Auth from "./components/Auth"
import { React,} from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Records from "./pages/Records";
import ServiceTerms from "./pages/ServiceTerms";
import { useUserContext } from "./context/userContext";
import Spiner from "./components/Spiner"
function App() {
  const {loading, error, user} = useUserContext();

  return (
    <div className="App flex ">
      {error && <p className="error">{error}</p>}
      {loading ? <h2><Spiner className="m-8" /></h2> : <>{user ?
      <Routes>
        <Route
          exact
          path="/"
          element={
              <Home />
            
          }
        />
        <Route
          exact
          path="/profile"
          element={
              <Profile />
            
          }
        />
        <Route
          exact
          path="/records"
          element={
              <Records />
            
          }
        />
         <Route
          exact
          path="/sevice-terms"
          element={
              <ServiceTerms />
            
          }
        />
      </Routes>
      : <Auth/>} </> }
    </div>
  );
}

export default App;
