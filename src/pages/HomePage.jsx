import React, { useEffect } from "react";
import "../App.css";
import TextReveal from "../components/PageSpecific/PageHome/TextReveal"; // Import the new component
import "../components/styles/Typewriter.css"; // include this if your css is in Typewriter.css
import Cards from "../components/PageSpecific/PageHome/Cards";
import "../components/styles/Cards.css";
import TextRevealProfile from "../components/PageSpecific/PageHome/TextRevealProfile.jsx";
import HomePageNav from "../components/PageSpecific/PageHome/HomePageNav";


function Page1() {
  useEffect(() => {
    function Particle(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
      this.pastZ = 0;
    }

    function randomizeParticle(p, canvasWidth, canvasHeight) {
      p.x = Math.random() * canvasWidth;
      p.y = Math.random() * canvasHeight;
      p.z = Math.random() * 1500 + 500;
      return p;
    }

    var PARTICLE_NUM = 500;
    var PARTICLE_BASE_RADIUS = 0.5;
    var FL = 500;
    var DEFAULT_SPEED = 2;
    var BOOST_SPEED = 300;

    var canvas = document.querySelector(".page1 canvas");
    var canvasWidth = (canvas.width = window.innerWidth);
    var canvasHeight = (canvas.height = window.innerHeight);
    var context = canvas.getContext("2d");
    context.fillStyle = "rgb(255, 255, 255)";

    var centerX = canvasWidth * 0.5;
    var centerY = canvasHeight * 0.5;
    var mouseX = centerX;
    var mouseY = centerY;

    var speed = DEFAULT_SPEED;
    var targetSpeed = DEFAULT_SPEED;
    var particles = [];

    for (var i = 0, p; i < PARTICLE_NUM; i++) {
      particles[i] = randomizeParticle(
        new Particle(),
        canvasWidth,
        canvasHeight
      );
      particles[i].z -= 500 * Math.random();
    }

    var resize = function () {
      canvasWidth = canvas.width = window.innerWidth;
      canvasHeight = canvas.height = window.innerHeight;
      centerX = canvasWidth * 0.5;
      centerY = canvasHeight * 0.5;
    };

    var mouseMoveListener = function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    var mouseDownListener = function (e) {
      targetSpeed = BOOST_SPEED;
    };

    var mouseUpListener = function (d) {
      targetSpeed = DEFAULT_SPEED;
    };

    var loop = function () {
      context.save();
      context.fillStyle = "rgb(0, 0, 0)";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.restore();

      speed += (targetSpeed - speed) * 0.01;

      var p;
      var cx, cy;
      var rx, ry;
      var f, x, y, r;
      var pf, px, py, pr;
      var a, a1, a2;

      var halfPi = Math.PI * 0.5;
      var atan2 = Math.atan2;
      var cos = Math.cos;
      var sin = Math.sin;

      context.beginPath();
      for (var i = 0; i < PARTICLE_NUM; i++) {
        p = particles[i];

        p.pastZ = p.z;
        p.z -= speed;

        if (p.z <= 0) {
          randomizeParticle(p, canvasWidth, canvasHeight);
          continue;
        }

        cx = centerX - (mouseX - centerX) * 1.25;
        cy = centerY - (mouseY - centerY) * 1.25;

        rx = p.x - cx;
        ry = p.y - cy;

        f = FL / p.z;
        x = cx + rx * f;
        y = cy + ry * f;
        r = PARTICLE_BASE_RADIUS * f;

        pf = FL / p.pastZ;
        px = cx + rx * pf;
        py = cy + ry * pf;
        pr = PARTICLE_BASE_RADIUS * pf;

        a = atan2(py - y, px - x);
        a1 = a + halfPi;
        a2 = a - halfPi;

        context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * cos(a2), y + r * sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
      }
      context.fill();
    };

    // Start the loop
    var intervalId = setInterval(loop, 1000 / 60);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  // ...

  return (
    <>
      <div className="page page1">
        <HomePageNav/>
        <div className="canvas-container">
          <canvas id="c"></canvas>
          <Cards />
        </div>
        {/* <Navigation /> */}
        <h1 className="page1-maintext"></h1>
        <TextReveal /> {/* Use the new component */}
        <div className="container-lg">
        <TextRevealProfile /> 
        </div>
      </div>
    </>
  );
}

export default Page1;
