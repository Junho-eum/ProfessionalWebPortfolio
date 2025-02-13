import "../../styles/TextEffect.css";
import React, { useEffect, useState } from "react";

function TextEffect() {
  // state variable stores the current state of the text being "typed" by typewriter effect
  const [typedText, setTypedText] = useState("");
  // text to be displayed
  const aText = [
    "Welcome to my portfolio website!",
    "Research & Personal Projects:",
  ];
  const iSpeed = 140;

  // Ensure that typewriter is initiated once component is mounted
  useEffect(() => {
    let iIndex = 0;
    let iTextPos = 0;
    let sContents = "";
    let currentLine = "";

    // updates typedText state variable by calling setTypedText
    function typeWriter() {
      currentLine = aText[iIndex].substring(0, iTextPos) + "_";
      setTypedText(sContents + currentLine);

      // uses setTimeout to delay each character's appearance based on iSpeed
      if (iTextPos++ === aText[iIndex].length) {
        iTextPos = 0;
        sContents += aText[iIndex] + "<br/>";
        iIndex++;
        if (iIndex !== aText.length) {
          setTimeout(typeWriter, 500);
        }
      } else {
        setTimeout(typeWriter, iSpeed);
      }
    }

    typeWriter();
  }, []);

  return (
    <>
      <h1
        className="textEffect-typeWriter"
        dangerouslySetInnerHTML={{ __html: typedText }}
      ></h1>

      <h2>Welcome to my portfolio website!</h2>
      <h3 className="textReveal-reveal-profile">
        My passion lies in enhancing the usability of cybersecurity solutions
        for end users.<br></br> My research focuses on human-centered digital
        identities and trustworthy AI.<br></br> I specialize in conducting
        task-based user studies, building prototype softwares to gain a
        realistic understanding of end user perception.
      </h3>
    </>
  );
}

export default TextEffect;
