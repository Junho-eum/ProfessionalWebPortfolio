import React, { useEffect, useRef } from "react";
import anime from "animejs";

function AnimatedText() {
  const textRef = useRef(null);

  useEffect(() => {
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750,
    });

    // Adding the time offsets to the animations
    tl.add({
      targets: textRef.current.children[0], // First child (Juno)
      translateX: [0, 250],
      opacity: [0, 1],
      delay: anime.stagger(200),
    })
      .add(
        {
          targets: textRef.current.children[1], // Second child (Developer)
          translateX: [0, 250],
          opacity: [0, 1],
          delay: anime.stagger(200),
        },
        "-=600"
      ) // Starts 600ms before the previous animation ends
      .add(
        {
          targets: textRef.current.children[2], // Third child (Creator)
          translateX: [0, 250],
          opacity: [0, 1],
          delay: anime.stagger(200),
        },
        400
      ); // Starts at 400ms, regardless of the animation position in the timeline
  }, []);

  return (
    <div ref={textRef}>
      <div className="el square">Juno</div>
      <div className="el circle">Developer</div>
      <div className="el triangle">Creator</div>
    </div>
  );
}

export default AnimatedText;
