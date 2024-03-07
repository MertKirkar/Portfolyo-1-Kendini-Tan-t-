import { useNavigate } from "react-router-dom";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import avatar from "../src/img/avatar.jpg";
import { Icon } from "@iconify/react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Navbar from "./Components/Navbar";

function App() {
  const navigate = useNavigate();

  return (
    <div className="vh-100 vw-100">
      

      <div className="d-flex justify-content-center flex-column align-items-center vh-100 default-bg">
   <div className="card p-5 rounded-4">
   <div className="avatarDiv d-flex">
          <div className="align-self-start avatarDiv  d-flex justify-content-start">
            <img className="avatar " src={avatar} alt="avatar" />
            <div className="text-center lh-lg">
              <h3 className="text-danger mb-4">Mert Kırkar</h3>

              <h5>21.09.1993</h5>
              <h5>Dokuz Eylül Üniversitesi: İktisat</h5>
              <h5>Trendyol Express</h5>
              <h5>2020 - Current</h5>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-evenly align-content-evenly">
          <button className="buttons" onClick={() => navigate("/hakkimda")}>
            Beni Daha İyi Tanıyabilmek İçin{" "}
          </button>
          <button className="buttons" onClick={() => navigate("/yeteneklerim")}>
            Yeteneklerim
          </button>
          
        </div>
   </div>
      </div>
    </div>
  );
}

export default App;
