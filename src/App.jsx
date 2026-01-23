import './App.css'
import { TextFade } from './components/TextFade'
import { TypingEffect } from './components/TypingEffect'
import AnimatedSection from './components/AnimatedSection'
import ScrollAnimations from './components/ScrollAnimations'
import Card from "./components/Card"

function App() {
  return (
    <>
      <Card />
      <ScrollAnimations/>
      <AnimatedSection direction="up" delay={0.3}>
        <h1 className="text-5xl font-bold">Hello Motion</h1>
      </AnimatedSection>

      <div className="app-content">
        <TypingEffect text='Typing Effect' className='p-10'></TypingEffect>
        <TextFade
          direction="up"
          delay={0.6}
          className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0"
        >
          <h2 className="text-6xl text-center font-bold m-3">
            Fade Up
          </h2>
          <div className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit amet.
          </div>
        </TextFade>
        <div className='flex flex-col gap-30'>
          <TextFade
            direction="up"
            delay={0.9}
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 gap-40"
          >
            <div className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe totam animi, sequi repellendus quibusdam laboriosam illum obcaecati impedit possimus voluptas modi pariatur. Neque optio cupiditate delectus nulla debitis fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati pariatur placeat eaque est similique esse quo quasi magni. Praesentium nulla quo blanditiis adipisci in nobis quos eius, culpa perferendis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum odio doloremque deserunt et sequi quae suscipit, eligendi, earum excepturi, illum vero consequatur cumque esse alias eos pariatur repellendus. Et!
            </div>
          </TextFade>
          <TextFade
            direction="up"
            delay={0.9}
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 gap-40"
          >
            <div className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe totam animi, sequi repellendus quibusdam laboriosam illum obcaecati impedit possimus voluptas modi pariatur. Neque optio cupiditate delectus nulla debitis fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati pariatur placeat eaque est similique esse quo quasi magni. Praesentium nulla quo blanditiis adipisci in nobis quos eius, culpa perferendis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum odio doloremque deserunt et sequi quae suscipit, eligendi, earum excepturi, illum vero consequatur cumque esse alias eos pariatur repellendus. Et!
            </div>
          </TextFade>
          <TextFade
            direction="up"
            delay={0.9}
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 gap-40"
          >
            <div className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe totam animi, sequi repellendus quibusdam laboriosam illum obcaecati impedit possimus voluptas modi pariatur. Neque optio cupiditate delectus nulla debitis fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati pariatur placeat eaque est similique esse quo quasi magni. Praesentium nulla quo blanditiis adipisci in nobis quos eius, culpa perferendis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum odio doloremque deserunt et sequi quae suscipit, eligendi, earum excepturi, illum vero consequatur cumque esse alias eos pariatur repellendus. Et!
            </div>
          </TextFade>
          <TextFade
            direction="up"
            delay={0.9}
            className="pt-0 pb-5 flex-col flex justify-center items-center space-y-0 gap-40"
          >
            <div className="prose-p:my-1 text-center md:text-lg max-w-lg mx-auto text-balance dark:text-zinc-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo saepe totam animi, sequi repellendus quibusdam laboriosam illum obcaecati impedit possimus voluptas modi pariatur. Neque optio cupiditate delectus nulla debitis fuga.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati pariatur placeat eaque est similique esse quo quasi magni. Praesentium nulla quo blanditiis adipisci in nobis quos eius, culpa perferendis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum odio doloremque deserunt et sequi quae suscipit, eligendi, earum excepturi, illum vero consequatur cumque esse alias eos pariatur repellendus. Et!
            </div>
          </TextFade>

        </div>
      </div>

    </>
  )
}

export default App
