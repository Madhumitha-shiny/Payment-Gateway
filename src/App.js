import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import ReactDOM from "react-dom/client";
import charity from "./images/charity.png";
import { Link } from "react-router-dom";
import { FcMoneyTransfer } from "react-icons/fc";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*"  element={<Home /> } />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const Home = () => (
  <div className="home pt-5">
    <h1 style={{ fontSize: "400%",fontWeight:'bolder',color:'white' }} className="text-center">
      DONATION
    </h1>
    <div className="text-center mt-3">
      <Link to="/donate">
        <div className="btn btn-dark">
          <div className="row px-3">
            <div className="col px-0 align-self-center">
              <FcMoneyTransfer />
            </div>
            <div className="col-auto px-1 pt-1">
              <p className="m-0">Donate</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
    <div className="text-center">
      <img className="mt-5" src={charity} width={'60%'}/>
    </div>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
