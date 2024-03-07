import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
const navigate = useNavigate ()
  return (
    <div className="d-flex justify-content-center py-3 border-bottom bg-white">
      <div className="d-flex align-content-baseline">
        <button className="btn rounded-3 mx-2 navbarButton"  onClick={() => navigate("/")}>
          Anasayfa
        </button>   
        <button className="btn rounded-3 mx-2 navbarButton" onClick={() => navigate("/hakkimda")}>
          Beni Daha İyi Tanıyabilmek İçin{" "}
        </button>
        <button className="btn rounded-3 mx-2 navbarButton"  onClick={() => navigate("/yeteneklerim")}>
          Yeteneklerim
        </button>
        
      </div>
    </div>
  );
}
