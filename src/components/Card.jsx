import * as motion from "motion/react-client";
import mock1 from "../assets/mock1.png";
import mock2 from "../assets/mock2.png";
import mock3 from "../assets/mock3.png";
import mock4 from "../assets/mock4.png";
import mock5 from "../assets/mock5.png";
import mock6 from "../assets/mock6.png";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.png";
import { Fragment } from "react";


export default function ScrollTriggered() {
  return (
    <div className="max-w-[1500px] pb-20 w-full mx-auto">
      {food.map(([emoji, hueA, hueB, logo, title], i) => (
        <Fragment key={i}>
        <div className="flex justify-center items-center gap-6 ">
          <img src={logo} className="w-15"/>
          <h1 className="font-bold text-5xl">{title}</h1>
        </div>
        <Card
          i={i}
          emoji={emoji}
          hueA={hueA}
          hueB={hueB}
          key={i}
        />
        </Fragment>
        
      ))}
    </div>
  );
}

function Card({ emoji, hueA, hueB}) {
  const background = `linear-gradient(306deg, ${hueA}, ${hueB})`;

  return (
    <motion.div
      className="
        relative
        overflow-hidden
        flex items-center justify-center
        h-[720px]
        mb-[180px]
      "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      {/* Splash */}
      <div style={{ background }} className="absolute inset-0 mx-30 mt-60 rounded-[38px]" />

      {/* Card */}
      <motion.div
        variants={cardVariants}
        className="
          relative z-10
          flex items-center justify-center
          w-[720px]
          h-auto
          rounded-[32px]
          origin-[10%_60%]
        "
      >
        <img src={emoji} alt="" className="w-[100%] h-auto" />
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1,
    },
  },
};

/**
 * ==============   Styles   ================
 */

/**
 * ==============   Data   ================
 */

const food = [
  [mock1, 'rgb(60,101,231)', 'rgb(4,245,230)', logo1, "TpmOne"],
  [mock2, 'rgb(05,106,121)', 'rgb(0,55,72)', logo2, "SmartDocs"],
  [mock3, 'rgb(24,131,126)', 'rgb(10,79,75)', logo3, "SafetySight"],
  [mock4, 'rgb(57,02,118)', 'rgb(0,123,192)', logo4, "Axis"],
  [mock5, 'rgb(19,16,229)', 'rgb(24,1,62)', logo5, "SmartCity"],
  [mock6, 'rgb(0,50,83)', 'rgb(4,83,136)', logo6,"FeedForward"],
];
