import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tractorImage from "./assets/tractor-.png";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const carRef = useRef(null);
  const trailRef = useRef(null);
  const valueTextRef = useRef(null);

  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);
  const box4Ref = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const car = carRef.current;
    const trail = trailRef.current;
    const valueAdd = valueTextRef.current;

    const letters = gsap.utils.toArray(
      valueAdd.querySelectorAll(".value-letter")
    );

    const ctx = gsap.context(() => {
      const valueRect = valueAdd.getBoundingClientRect();

      const letterOffsets = letters.map(
        (letter) => letter.offsetLeft
      );

      const roadWidth = window.innerWidth;

      const carWidth = 150;

      const endX = roadWidth - carWidth;

      /* =====================================
         CAR SCROLL ANIMATION
         ===================================== */

      gsap.to(car, {
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: trackRef.current,
        },

        x: endX,

        ease: "none",

        onUpdate: function () {
          const carX =
            gsap.getProperty(car, "x") +
            carWidth / 2;

          letters.forEach((letter, i) => {
            const letterX =
              valueRect.left +
              letterOffsets[i];

            if (carX >= letterX) {
              letter.style.opacity = 1;
            } else {
              letter.style.opacity = 0;
            }
          });

          gsap.set(trail, {
            width: carX,
          });
        },
      });


      /* =====================================
         BOX 1
         ===================================== */

      gsap.to(box1Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=400 top",
          end: "top+=600 top",
          scrub: true,
        },

        opacity: 1,
      });


      /* =====================================
         BOX 2
         ===================================== */

      gsap.to(box2Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=600 top",
          end: "top+=800 top",
          scrub: true,
        },

        opacity: 1,
      });


      /* =====================================
         BOX 3
         ===================================== */

      gsap.to(box3Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=800 top",
          end: "top+=1000 top",
          scrub: true,
        },

        opacity: 1,
      });


      /* =====================================
         BOX 4
         ===================================== */

      gsap.to(box4Ref.current, {
        scrollTrigger: {
          trigger: section,
          start: "top+=1000 top",
          end: "top+=1200 top",
          scrub: true,
        },

        opacity: 1,
      });

    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="section"
    >

      <div
        ref={trackRef}
        className="track"
      >

        <div
          className="road"
          id="road"
        >

          <img
            ref={carRef}
            src={tractorImage}
            alt="car"
            className="car"
            id="car"
          />

          <div
            ref={trailRef}
            className="trail"
            id="trail"
          ></div>


          <div
            ref={valueTextRef}
            className="value-add"
            id="valueText"
            style={{ top: "30%" }}
          >

            <span className="value-letter">W</span>
            <span className="value-letter">E</span>
            <span className="value-letter">L</span>
            <span className="value-letter">C</span>
            <span className="value-letter">O</span>
            <span className="value-letter">M</span>
            <span className="value-letter">E</span>

            <span className="value-letter">
              &nbsp;
            </span>

            <span className="value-letter">I</span>
            <span className="value-letter">T</span>
            <span className="value-letter">Z</span>
            <span className="value-letter">F</span>
            <span className="value-letter">I</span>
            <span className="value-letter">Z</span>
            <span className="value-letter">Z</span>

          </div>

        </div>


        {/* BOX 1 */}

        <div
          ref={box1Ref}
          className="text-box"
          id="box1"
          style={{
            top: "5%",
            right: "30%",
          }}
        >

          <span className="num-box">
            58%
          </span>

          Increase in pick up point use

        </div>


        {/* BOX 2 */}

        <div
          ref={box2Ref}
          className="text-box"
          id="box2"
          style={{
            bottom: "5%",
            right: "35%",
          }}
        >

          <span className="num-box">
            23%
          </span>

          Decreased in customer phone calls

        </div>


        {/* BOX 3 */}

        <div
          ref={box3Ref}
          className="text-box"
          id="box3"
          style={{
            top: "5%",
            right: "10%",
          }}
        >

          <span className="num-box">
            27%
          </span>

          Increase in pick up point use

        </div>


        {/* BOX 4 */}

        <div
          ref={box4Ref}
          className="text-box"
          id="box4"
          style={{
            bottom: "5%",
            right: "12.5%",
          }}
        >

          <span className="num-box">
            40%
          </span>

          Decreased in customer phone calls

        </div>

      </div>
    </div>
  );
}

export default App;