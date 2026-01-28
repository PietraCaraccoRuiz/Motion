import { motion } from "framer-motion";

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

import angular from "../assets/angular.svg";
import django from "../assets/django.svg";
import fastapi from "../assets/fastapi.png";
import js from "../assets/js.svg";
import mysql from "../assets/mysql.svg";
import springboot from "../assets/springboot.png";
import qtdesign from "../assets/qtdesign.png";
import sqlite from "../assets/sqlite.jpg";
import python from "../assets/python.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import ts from "../assets/ts.svg";
import yolo from "../assets/yolo.png";

import bosch from "../assets/bosch.png";
import senai from "../assets/senai.png";
import etsanos from "../assets/65anos.svg";

import { Fragment } from "react";

export default function ScrollTriggered() {
  return (
    <div className="max-w-[1200px] pb-20 w-full mx-auto relative">
      {food.map(([emoji, hueA, hueB, logo, title], i) => {
        const project = projects[i];

        return (
          <Fragment key={i}>
            {/* Título */}
            <div className="flex justify-center items-center gap-6 pt-20">
              <img src={logo} className="w-16" />
              <h1 className="font-bold text-5xl">{title}</h1>
            </div>

            {/* Card */}
            <Card emoji={emoji} hueA={hueA} hueB={hueB} github={project?.github} />

            {/* Descrição */}
            {project && (
              <div
                className="
    mb-52
    mx-auto
    max-w-[1100px]
    flex
    gap-16
    items-start
    justify-center
    mt-10
  "
              >
                {/* Logo / Emoji */}
                {/^\p{Emoji}/u.test(project.main) ? (
                  <div
                    className="
        text-6xl
        w-30
        h-30
        rounded-full
        bg-gradient-to-br
        from-blue-900
        to-black
        flex
        items-center
        justify-center
        shadow-2xl shadow-black/70
      "
                  >
                    {project.main}
                  </div>
                ) : (
                  <div
                    className="
        w-30
        h-30
        rounded-full
        bg-gradient-to-br
        from-blue-900
        to-black
        flex
        items-center
        justify-center
        shadow-2xl shadow-black/70
      "
                  >
                    <img src={project.main} className="w-40 object-contain" />
                  </div>
                )}

                {/* Conteúdo */}
                <div className="flex flex-col gap-6 max-w-[700px]">
                  <p
                    className="
        text-start
        text-[1.05rem]
        leading-relaxed
      "
                  >
                    {project.info}
                  </p>

                  {/* Tech stack */}
                  <div className="flex gap-4 flex-wrap items-center">
                    {project.techs.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="
              p-2
              rounded-xl
              bg-white/5
              backdrop-blur
              hover:bg-white/10
              transition
            "
                      >
                        <img src={tech} className="w-9 h-9" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

function Card({ emoji, hueA, hueB, github }) {
  const background = `linear-gradient(306deg, ${hueA}, ${hueB})`;

  return (
    <motion.a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block cursor-pointer"
      initial="offscreen"
      whileInView="onscreen"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      viewport={{ amount: 0.8 }}
    >
      <motion.div
        className="
        relative
        overflow-hidden
        flex items-center justify-center
        h-[540px]
        mb-10

      "
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
      >
        {/* Splash */}
        <div
          style={{ background }}
          className="absolute inset-0 mx-30 mt-30 rounded-[38px]"
        />

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
    </motion.a>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 30,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 1,
    },
  },
};

const food = [
  [mock1, "rgb(60,101,231)", "rgb(4,245,230)", logo1, "TpmOne"],
  [mock2, "rgb(05,106,121)", "rgb(0,55,72)", logo2, "SmartDocs"],
  [mock3, "rgb(24,131,126)", "rgb(10,79,75)", logo3, "SafetySight"],
  [mock4, "rgb(57,02,118)", "rgb(0,123,192)", logo4, "Axis"],
  [mock5, "rgb(19,16,229)", "rgb(24,1,62)", logo5, "SmartCity"],
  [mock6, "rgb(0,50,83)", "rgb(4,83,136)", "", "FeedForward"],
];

const projects = [
  {
    main: bosch,
    info: "Projeto desenvolvido para a área de TPM, transformando dados complexos do SAP em uma plataforma web intuitiva para controle e mapeamento de máquinas e ordens de manutenção.",
    techs: [springboot, mysql, react, js, tailwind],
    github: "https://github.com/PietraCaraccoRuiz/FeedForward",
  },
  {
    main: bosch,
    info: "Plataforma desktop criada para a MA durante o Projeto de Área, automatizando documentações e melhorando a eficiência dos processos internos.",
    techs: [python, qtdesign, sqlite],
    github: "https://github.com/orgs/TPM-One/repositories",
  },
  {
    main: etsanos,
    info: "Projeto desenvolvido para comemorar os 65 anos da ETS, consiste em uma inteligência artificial que valida o uso de Equipamentos de Proteção Individual (EPIs) quando um colaborador está entrando em uma área de uso obrigatório.",
    techs: [django, python, react, tailwind, js, yolo],
    github: "https://github.com/orgs/ETS65y/repositories",
  },
  {
    main: "🥈",
    info: "O Projeto  é uma plataforma web que permite o controle e visualização das ordens de manutenção da máquinas TPM, com dashboards interativos, filtros por linha de produção, mapas visuais das máquinas e integração com Power BI. Graças ao projeto foi possível conquistar 2° lugar no Hackthon Bosch 2025.",
    techs: [fastapi, sqlite, react, js, tailwind],
    github: "https://github.com/orgs/HackathonDs-s/repositories",
  },
  {
    main: senai,
    info: "Projeto baseado em sensores IoT para coleta de dados urbanos, com visualização centralizada em uma plataforma web. A aplicação transforma dados em tempo real em dashboards interativos, facilitando o monitoramento e a gestão inteligente da cidade.",
    techs: [django, sqlite, angular, ts, tailwind],
    github: "https://github.com/PietraCaraccoRuiz/smart-city",
  },
  {
    main: bosch,
    info: "Atuei na colaboração do Feedforward, uma plataforma de feedback voltada ao processo de avaliação semestral dos aprendizes Bosch, com foco em um método eficiente de avaliação, acompanhamento de desempenho e melhoria da comunicação entre aprendizes e instrutores.",
    techs: [springboot, mysql, angular, ts, tailwind],
    github: "https://github.com/PietraCaraccoRuiz/FeedForward",
  },
];
