import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// let name = "Aadesh";
// let skillName = "React";
// function App() {
//   //only one element can be returned or use jsx fragemnt to wrap them(wrap elements in <> </>)
//   return (
//     <>
//       <nav>
//         <li>Home</li>
//         <li>About</li>
//         <li>Contact Us</li>
//       </nav>
//       <div classNameName="container">
//         <h1>Hello, lets start {skillName}</h1>
//         <p>
//           <b>{name}</b> is a hard working software engineer, and he can master
//           it.
//         </p>
//       </div>
//     </>
//   );
// }

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    buttonName: "Enable dark mode",
  });

  const toggleMode = () => {
    if (myStyle.buttonName === "Enable dark mode") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        buttonName: "Enable light mode",
      });
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        buttonName: "Enable dark mode",
      });
    }
  };

  //passing 'Props' as title="textUtils" and contactUs="Contact Us" in Navbar
  //passing 'Props' as heading="Enter the text below to analyze" in TextForm
  return (
    <>
    {"Hello"}
      <div style={myStyle}>
        <Navbar title="textUtils" contactUs="Contact Us" />
        <button type="button" className="btn btn-primary" onClick={toggleMode}>
          {myStyle.buttonName}
        </button>
        <p>React learning in progress.</p>
        <div className="container my-3">
          <TextForm heading="Enter the text below to analyze" />
        </div>
      </div>
    </>
  );
}

export default App;
