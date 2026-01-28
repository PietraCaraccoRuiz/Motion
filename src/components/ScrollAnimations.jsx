import React, { useEffect, useRef } from "react"
import { animate, inView } from "framer-motion"

const ScrollAnimations = ({ children }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Seleciona todos os elementos dentro do container
    const elements = containerRef.current.querySelectorAll(".animate-on-scroll")

    elements.forEach((element) => {
      // Configura animação quando entrar na viewport
      inView(element, () => {
        animate(
          element,
          { opacity: 1, x: [ -100, 0 ] },
          { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
        )

        return () => animate(element, { opacity: 0, x: -100 })
      })
    })
  }, [])

  return (
    <div ref={containerRef} className="scroll-container">
      {/* Adiciona classe para animação a todos os filhos */}
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          className: `${child.props.className ?? ""} animate-on-scroll`,
          style: { transform: "translateX(-100px)", opacity: 0, ...child.props.style },
        })
      )}

      <style jsx>{`
        .scroll-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .animate-on-scroll {
          display: block;
        }
      `}</style>
    </div>
  )
}

export default ScrollAnimations
