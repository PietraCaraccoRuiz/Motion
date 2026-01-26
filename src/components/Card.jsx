import * as motion from "motion/react-client"
import mock1 from "../assets/mock1.png"

export default function ScrollTriggered() {
    return (

        <div className="max-w-125 pb-20 bg-pink-400 w-full">
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
            ))}
        </div>
    )
}

function Card({ emoji, hueA, hueB, i }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <motion.div
            className={`bg-amber-700 overflow-hidden flex items-center justify-center relative pt-5 mb-100 card-container-${i}`}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }}/>
            <motion.div variants={cardVariants} className="bg-green-600 flex items-center justify-center w-100 h-107.5 text-[164px] rounded-[20px] origin-[10%_60%]">
                <img src={emoji} alt="" />
            </motion.div>
        </motion.div >

    )
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
            bounce: 0.2,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

/**
 * ==============   Data   ================
 */

const food = [
    [mock1, 340, 10],
    [mock1, 20, 40],
    [mock1, 60, 90],
    [mock1, 80, 120],
    [mock1, 100, 140],
    [mock1, 205, 245],
    [mock1, 260, 290],
    [mock1, 290, 320],
]
