import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import { TextFade } from "./components/TextFade";
import { WordFade } from "./components/WordFade";
import { TypingEffect } from "./components/TypingEffect";
import AnimatedSection from "./components/AnimatedSection";
import ScrollAnimations from "./components/ScrollAnimations";
import Card from "./components/Card";
import Home from "./components/Home";
import CanvaSection from "./components/CanvaSection";
import Footer from "./components/Footer";

import { PiCommand } from "react-icons/pi";

// Images
import angular from "./assets/angular.svg";
import blender from "./assets/blender.png";
import cplus from "./assets/c++.svg";
import canva from "./assets/canva.svg";
import css from "./assets/css.svg";
import django from "./assets/django.svg";
import fastapi from "./assets/fastapi.png";
import figma from "./assets/figma.svg";
import git from "./assets/git.svg";
import github from "./assets/github.svg";
import html from "./assets/html.svg";
import insonmia from "./assets/insonmia.svg";
import java from "./assets/java.svg";
import jira from "./assets/jira.svg";
import js from "./assets/js.svg";
import mysql from "./assets/mysql.svg";
import node from "./assets/node.svg";
import npm from "./assets/npm.svg";
import postgree from "./assets/postgree.svg";
import postman from "./assets/postman.svg";
import python from "./assets/python.svg";
import react from "./assets/react.svg";
import tailwind from "./assets/tailwind.svg";
import ts from "./assets/ts.svg";
import vite from "./assets/vite.svg";
import vscode from "./assets/vscode.svg";
import qtdesign from "./assets/qtdesign.png";
import sqlite from "./assets/sqlite.jpg";
import { useState } from "react";
import Preloader from "./components/Preloader";

function App() {
  const [done, setDone] = useState(false);

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
  container: containerRef,
});


const scaleY = useSpring(scrollYProgress, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
});


  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">


      {!done && <Preloader onFinish={() => setDone(true)} />}
      <Home />

      {/* Technologies Section */}
      <div className="my-32 w-full flex justify-center items-center mb-80">
        <div className="flex flex-col gap-40">
          <div className="flex">
            <WordFade className="text-3xl text-center flex items-center gap-4">
              <PiCommand />
              Tecnologias
            </WordFade>
          </div>

          {[
            {
              title: "FRONTEND",
              items: [
                { label: "HTML", icon: html },
                { label: "CSS", icon: css },
                { label: "JavaScript", icon: js },
                { label: "TypeScript", icon: ts },
                { label: "React", icon: react },
                { label: "Angular", icon: angular },
                { label: "Npm", icon: npm },
                { label: "Node", icon: node },
                { label: "Tailwind", icon: tailwind },
                { label: "Vite", icon: vite },
                { label: "QtDesign", icon: qtdesign },
              ],
            },
            {
              title: "BACKEND",
              items: [
                { label: "Java", icon: java },
                { label: "Python", icon: python },
                { label: "C++", icon: cplus },
                { label: "Django", icon: django },
                { label: "FastAPI", icon: fastapi },
              ],
            },
            {
              title: "UI / UX",
              items: [
                { label: "Figma", icon: figma },
                { label: "Canva", icon: canva },
                { label: "Blender", icon: blender },
              ],
            },
            {
              title: "DATABASE",
              items: [
                { label: "MySQL", icon: mysql },
                { label: "PostgreSQL", icon: postgree },
                { label: "SQlite", icon: sqlite },
                { label: "Postman", icon: postman },
                { label: "Insomnia", icon: insonmia },
              ],
            },
            {
              title: "TOOLS",
              items: [
                { label: "Git", icon: git },
                { label: "GitHub", icon: github },
                { label: "VSCode", icon: vscode },
                { label: "Jira", icon: jira },
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
                      <img
                        src={item.icon}
                        className="w-10 h-10"
                        alt={item.label}
                      />
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
      <div className="my-32 w-full flex justify-center items-center mb-80">
        <div className="flex flex-col gap-20  w-[1100px]">
          <div className="flex">
            <WordFade className="text-3xl text-center flex items-center gap-4">
              <PiCommand />
              Formação
            </WordFade>
          </div>

          {[
            {
              items: [
                {
                  curse: "Análise e Desenvolvimento de Sistemas",
                  institution: "Etec Ferrucio Gazetta (Nova Odessa)",
                  year: "2021 - 2023",
                },
                {
                  curse: "Análise e Desenvolvimento de Sistemas",
                  institution: "Instituto Federal (Hortolândia)",
                  year: "2024 - Presente",
                },
                {
                  curse: "Análise e Desenvolvimento de Sistemas",
                  institution: "Senai Roberto Mange",
                  year: "2025 - 2026",
                },
              ],
            },
          ].map((exp, i) =>
            exp.items.map((exp) => (
              <div key={i} className="flex flex-col gap-2">
                {/* Curso com fade */}
                <WordFade className="text-[2vh]">{exp.curse}</WordFade>
                {/* Instituiçao com fade */}
                <WordFade className="font-bold text-4xl">
                  {exp.institution}
                </WordFade>
                {/* Ano com fade */}
                <WordFade className="text-[2vh]">{exp.year}</WordFade>
              </div>
            )),
          )}
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex my-20 gap-10">
        <Card />
      </div>

      {/* Canva Section */}
      <CanvaSection />

     {/* Scroll progress bar */}
<motion.div
  className="
    fixed
    right-8
    top-1/2
    -translate-y-1/2
    h-[40vh]
    w-[4px]
    bg-gray-400/70
    rounded-full
    overflow-hidden
    z-50
  "
>
  <motion.div
    style={{ scaleY }}
    className="
      origin-top
      h-full
      w-full
      rounded-full
      bg-gradient-to-b
      from-fuchsia-500
via-purple-500
to-cyan-400
      
      t0-
      shadow-[0_0_20px_rgba(168,85,247,0.65)]
    "
  />
</motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
