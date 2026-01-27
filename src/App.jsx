import './App.css'
import { TextFade } from './components/TextFade'
import { WordFade } from './components/WordFade'
import { TypingEffect } from './components/TypingEffect'
import AnimatedSection from './components/AnimatedSection'
import ScrollAnimations from './components/ScrollAnimations'
import Card from "./components/Card"

// Images
import angular from './assets/angular.svg'
import blender from './assets/blender.png'
import cplus from './assets/c++.svg'
import canva from './assets/canva.svg'
import css from './assets/css.svg'
import django from './assets/django.svg'
import fastapi from './assets/fastapi.png'
import figma from './assets/figma.svg'
import git from './assets/git.svg'
import github from './assets/github.svg'
import html from './assets/html.svg'
import insonmia from './assets/insonmia.svg'
import java from './assets/java.svg'
import js from './assets/js.svg'
import mysql from './assets/mysql.svg'
import node from './assets/node.svg'
import npm from './assets/npm.svg'
import postgree from './assets/postgree.svg'
import postman from './assets/postman.svg'
import python from './assets/python.svg'
import react from './assets/react.svg'
import tailwind from './assets/tailwind.svg'
import ts from './assets/ts.svg'
import vite from './assets/vite.svg'
import vscode from './assets/vscode.svg'

function App() {
  return (
    <>

      <div className='h-400'>
        Oi
      </div>

      {/* Technologies Section */}
      <div className="my-32 w-full flex justify-center items-center">
        <div className="flex flex-col gap-40">

          {[
            {
              title: 'FRONTEND',
              items: [
                { label: 'HTML', icon: html },
                { label: 'CSS', icon: css },
                { label: 'JavaScript', icon: js },
                { label: 'TypeScript', icon: ts },
                { label: 'React', icon: react },
                { label: 'Angular', icon: angular },
                { label: 'Npm', icon: npm },
                { label: 'Node', icon: node },
                { label: 'Tailwind', icon: tailwind },
                { label: 'Vite', icon: vite },
              ],
            },
            {
              title: 'BACKEND',
              items: [
                { label: 'Java', icon: java },
                { label: 'Python', icon: python },
                { label: 'C++', icon: cplus },
                { label: 'Django', icon: django },
                { label: 'FastAPI', icon: fastapi },
              ],
            },
            {
              title: 'UI / UX',
              items: [
                { label: 'Figma', icon: figma },
                { label: 'Canva', icon: canva },
                { label: 'Blender', icon: blender },
              ],
            },
            {
              title: 'DATABASE',
              items: [
                { label: 'MySQL', icon: mysql },
                { label: 'PostgreSQL', icon: postgree },
                { label: 'Postman', icon: postman },
                { label: 'Insomnia', icon: insonmia },
              ],
            },
            {
              title: 'TOOLS',
              items: [
                { label: 'Git', icon: git },
                { label: 'GitHub', icon: github },
                { label: 'VSCode', icon: vscode },
              ],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="grid grid-cols-[220px_1fr] gap-60 items-start"
            >
              {/* Título com fade */}
              <WordFade className="font-bold text-4xl">
                {section.title}
              </WordFade>

              {/* Cada tecnologia com fade */}
              <div className="flex flex-wrap gap-8 w-150">
                {section.items.map((item, j) => (
                  <WordFade direction="up" staggerChildren={0.04}>
                  <p key={j} className="flex items-center gap-3 text-2xl">
                    <img src={item.icon} className="w-10 h-10" alt={item.label} />
                      {item.label}
                  </p>
                  </WordFade>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Experience Section */}
      <div className="my-32 w-full flex justify-center items-center">
        <div className="flex flex-col gap-20  w-[1100px]">

          {[
            {
              items: [
                { curse: 'Análise e Desenvolvimento de Sistemas', institution: "Etec Ferrucio Gazetta (Nova Odessa)", year: "2021 - 2023" },
                { curse: 'Análise e Desenvolvimento de Sistemas', institution: "Instituto Federal (Hortolândia)", year: "2024 - Presente" },
                { curse: 'Análise e Desenvolvimento de Sistemas', institution: "Senai Roberto Mange", year: "2025 - 2026" },
              ],
            },
          ].map((exp, i) => 
            exp.items.map((exp) => (
            <div
              key={i}
              className="flex flex-col gap-2"
            >
              {/* Curso com fade */}
              <WordFade className="text-[2vh]">
                {exp.curse}
              </WordFade>
              {/* Instituiçao com fade */}
              <WordFade className="font-bold text-4xl">
                {exp.institution}
              </WordFade>
              {/* Ano com fade */}
              <WordFade className="text-[2vh]">
                {exp.year}
              </WordFade>
            </div>
            ))
        )}

        </div>
      </div>





      {/* Projects Section */}
      <div className='flex my-20 gap-10'>
        <Card />
      </div>

      <ScrollAnimations />
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
