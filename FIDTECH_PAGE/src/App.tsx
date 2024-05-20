import { useState } from "react";
import menu from "./assets/side-menu.png";
import logo from "./assets/logo_transparent_pc.png";
import x from "./assets/twitter.png";
import insta from "./assets/instagram.png";
import fb from "./assets/facebook.png";
import tiktok from "./assets/tik-tok.png";
import FragmentHolder from "./FragmentHolder";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [fragment, setFragment] = useState(0);
  const vectPC = [
    "Service PC/Laptop",
    "Pre-build units",
    "Custom-build units",
    "upgrade PC",
    "Customizations",
  ];

  const vectCases = ["Table top", "Wall mounts", "Intable"];
  const vectSoftware = ["Site prezentare", "Lucrari licenta WEB"];
  return (
    <>
      <div className="page">
        <div className={isOpen ? "nav_open" : "nav_close"}>
          <div className="options">
            <div className="category">PC</div>
            <ul>
              {vectPC.map((element, index) => {
                return (
                  <a
                    className="element"
                    onClick={() => {
                      setFragment(index + 1);
                      setIsOpen(false);
                    }}
                    key={index}
                  >
                    {element}
                  </a>
                );
              })}
            </ul>
            <div className="category">Custom-cases</div>
            <ul>
              {vectCases.map((element, index) => {
                return (
                  <a
                    className="element"
                    key={index}
                    onClick={() => {
                      setFragment(index + 6);
                      setIsOpen(false);
                    }}
                  >
                    {element}
                  </a>
                );
              })}
            </ul>
            <div className="category">Software</div>
            <ul>
              {vectSoftware.map((element, index) => {
                return (
                  <a
                    className="element"
                    key={index}
                    onClick={() => {
                      setFragment(index + 9);
                      setIsOpen(false);
                    }}
                  >
                    {element}
                  </a>
                );
              })}
            </ul>
          </div>
          <img
            className="btnMenu"
            src={menu}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </div>
        <img
          onClick={() => {
            setFragment(0);
            setIsOpen(false);
          }}
          src={logo}
          className={isOpen ? "logo_out" : "logo_in"}
        />
        <div className="containerContact">
          <div
            className="contact"
            onClick={() => {
              setFragment(11);
              setIsOpen(false);
            }}
          >
            CONTACT
          </div>
          <div className="containerSocial">
            <img className="social" src={insta} onClick={() => {}} />
            <img className="social" src={x} onClick={() => {}} />
            <img className="social" src={fb} onClick={() => {}} />
            <img className="social" src={tiktok} onClick={() => {}} />
          </div>
        </div>
        <div className="container">
          <FragmentHolder fragment={fragment} />
        </div>
      </div>
    </>
  );
}

export default App;
