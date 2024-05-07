import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          paddingTop: "100px",
          paddingBottom: "50px",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
