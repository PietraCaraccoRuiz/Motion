"use client"

import { useEffect } from "react"
import { animate, inView } from "motion"

const ScrollAnimations = () => {
  useEffect(() => {
    // Seleciona todos os elementos pre dentro das seções
    const elements = document.querySelectorAll(".scroll-section pre")

    elements.forEach((element) => {
      // Cria o observer de inView
      inView(element, () => {
        animate(
          element,
          { opacity: 1, x: [-100, 0] },
          {
            duration: 0.9,
            easing: [0.17, 0.55, 0.55, 1],
          }
        )

        return () => animate(element, { opacity: 0, x: -100 })
      })
    })
  }, [])

  return (
    <div className="example">
      <section className="scroll-section"><pre>Scroll</pre></section>
      <section className="scroll-section"><pre>to</pre></section>
      <section className="scroll-section"><pre>trigger</pre></section>
      <section className="scroll-section"><pre>animations!</pre></section>

      <style jsx>{`
        .example {
          display: flex;
          flex-direction: column;
        }

        .scroll-section {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 50px;
          background: rgba(255, 0, 136, 0.1); /* placeholder */
        }

        .scroll-section:nth-child(2) { background: rgba(221,0,238,0.1); }
        .scroll-section:nth-child(3) { background: rgba(153,17,255,0.1); }
        .scroll-section:nth-child(4) { background: rgba(13,99,248,0.1); }

        .scroll-section pre {
          font-size: 48px;
          color: #ff0088;
          display: block;
          transform: translateX(-100px);
          opacity: 0;
        }

        .scroll-section:nth-child(2) pre { color: #dd00ee; }
        .scroll-section:nth-child(3) pre { color: #9911ff; }
        .scroll-section:nth-child(4) pre { color: #0d63f8; }
      `}</style>
    </div>
  )
}

export default ScrollAnimations
