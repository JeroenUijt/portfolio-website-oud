import React, { FC } from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <section id="Intro" className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 gradient">
          <div>
            <img className="object-cover w-full" src="/images/transparent.png" alt="Ikzeluf" />
          </div>
          <div className="flex justify-center p-4 order-first sm:order-2">
            <div className="self-center rounded-lg bg-gray-700 bg-opacity-50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">Hoi, ik ben Jeroen!</h1>
              <h4>Software developer</h4>
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700">
          <h1 className="text-4xl font-bold">Over mij:</h1>
          <br />
          <p>
            Mijn naam is Jeroen Uijtdewilligen. Ik ben 23 jaar en woon in Bergen op Zoom.
            In 2024 ben ik afgestudeerd voor de opleiding HBO Informatica aan Hogeschool Rotterdam.
          </p>
          <br />
          <p>
            Ik hou ervan om naar concerten te gaan! 
            Aankomende shows waar ik heen ga zijn Yungblud, Ashnikko, Deftones en de afscheidsshow van Golden Earring. 
            Ook ben ik erg vaak in de lokale platenzaak te vinden. 
            Ik haal elke week wel een nieuwe plaat of cd'tje in huis.
          </p>
          <br />
          <p>
            Voor mij is inclusie een belangrijk thema. 
            Hier zet ik me graag elke dag voor in. 
          </p>
        </div>
      </section>
      <section id="Experience" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8">
          <h1 className="text-4xl font-bold ">Werkervaring:</h1>
          <br />
          <p>
            Alhoewel mijn werkervaring in webdevelopment zit, zijn mijn interesses heel breed. 
            Zo heb ik me verdiept in onderwerpen als artificiële intelligentie en het ontwikkelen van games. 
            Deze zijn te vinden op mijn <a className="text-blue-500 hover:text-blue-400 hover:underline" href="/projects">projectenpagina</a>.
          </p>
          <br />
          <img
            src="/images/experience/fastware.png"
            alt="fastware"
            className="w-22 h-12 px-2"
          />
          <p className="text-xl font-semibold">Fastware - Bergen op Zoom</p>
          <br />
          <p className="text-lg font-semibold">Full Stack Developer</p>
          <p>
            Na het afstuderen heb ik gewerkt als Full Stack developer. 
            Ik was verantwoordelijk om zelfstandig aan een grootschalig maatwerkpakket te werken.
          </p>
          <p>Maart 2024 - Mei 2025 - 1 jaar 3 maanden</p>
          <br />
          <p className="text-lg font-semibold">Afstudeerstage</p>
          <p>
            Mijn afstudeerstage heb ik bij fastware doorlopen. 
            Mijn afstudeeropdracht was het ontwikkelen van een import/export module voor een bestaand project.
          </p>
          <p>September 2023 - Februari 2024 - 6 maanden</p>
          <br />
          <p className="text-lg font-semibold">Web Developer</p>
          <p>
            Voor de start van mijn afstudeerstage heb ik kort als webdeveloper gewerkt. 
            Hier was ik verantwoordelijk voor het ontwikkelen van een interne website.
          </p>
          <p> Juli 2023 - September 2023 - 3 maanden</p>
          <br />
          <p className="text-lg font-semibold">Derdejaars stage</p>
          <p>
            Bij Fastware heb ik mijn derdejaars stage gelopen met een functie
            als webdeveloper. Mijn stageopdracht was het ontwikkelen van een intern project.
          </p>
          <p>Oktober 2021 - Februari 2022 · 4 maanden</p>
        </div>
      </section>
      <section id="Education" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700">
          <h1 className="text-4xl font-bold">Opleiding:</h1>
          <br />
          <img src="/images/experience/HR.webp" className="w-22 h-16 px-2" />
          <br />
          <p className="text-lg font-semibold">Informatica</p>
          <p>September 2019 - Februari 2024</p>
          <a
            className="text-blue-500 hover:text-blue-400 hover:underline"
            href="https://www.hogeschoolrotterdam.nl/opleidingen/bachelor/informatica/voltijd"
            target="_blank"
          >
            Bezoek website
          </a>
        </div>
      </section>
      <section id="Skills" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8">
          <h1 className="text-4xl font-bold">Vaardigheden:</h1>
          <br />
          <p>
            todo: toevoegen
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
