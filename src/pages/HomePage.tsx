import React, { FC } from "react";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

const HomePage: FC = () => {
  return (
    <div>
      <Navbar />
      <section id="Intro" className="relative">
        <div className="md:grid md:grid-cols-2">
          <div>
            <img src="/images/JeroenUijt.jpeg" alt="Ikzeluf" />
          </div>
          <div className="flex justify-center bg-gradient-to-t from-[#c0f56a] to-[#b5deff] p-4">
            <div className="self-center rounded-lg bg-gray-700 bg-opacity-50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">Hoi, ik ben Jeroen!</h1>
              <h4>Derdejaars student Informatica</h4>
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
            Mijn naam is Jeroen Uijtdewilligen. Ik ben 20 jaar en volg de studie
            Informatica bij Hogeschool Rotterdam. Momenteel zit ik in het derde
            leerjaar.
          </p>
          <br />
          <p>
            Mijn passie voor Front-End webdevelopment is ontstaan tijdens mijn
            stage bij Fastware. Het ontwikkelen van websites in samenwerking met
            klanten is voor mij het leukste wat er is.
          </p>
          <br />
          <p>
            In mijn vrije tijd speel ik soms videogames en ben ik graag in de
            natuur.
          </p>
        </div>
      </section>
      <section id="Experience" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 md:px-8">
          <h1 className="text-4xl font-bold ">Werkervaring:</h1>
          <br />
          <img
            src="/images/experience/fastware.png"
            alt="fastware"
            className="w-22 h-12 px-2"
          />
          <br />
          <p className="text-lg font-semibold">Fastware</p>
          <p>
            Bij Fastware heb ik mijn derdejaars stage gelopen met een functie
            als webdeveloper.
          </p>
          <p>Oktober 2021 - Februari 2022 · 4 maanden</p>
          <a
            className="text-blue-500 hover:text-blue-400 hover:underline"
            href="https://www.fastware.nl/"
          >
            Bezoek website
          </a>
        </div>
      </section>
      <section id="Education" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700">
          <h1 className="text-4xl font-bold">Opleiding:</h1>
          <br />
          <img src="/images/experience/HR.webp" className="w-22 h-16 px-2" />
          <br />
          <p className="text-lg font-semibold">Informatica</p>
          <p>September 2019 - Heden</p>
          <a
            className="text-blue-500 hover:text-blue-400 hover:underline"
            href="https://www.hogeschoolrotterdam.nl/"
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
            Mijn naam is Jeroen Uijtdewilligen. Ik ben 20 jaar en volg de studie
            Informatica bij Hogeschool Rotterdam. Momenteel zit ik in het derde
            leerjaar.
          </p>
          <br />
          <p>
            Mijn passie voor bij Front-End webdevelopment is ontstaan tijdens
            mijn stage bij Fastware. Het ontwikkelen van websites in
            samenwerking met klanten is voor mij het leukste wat er is.
          </p>
          <br />
          <p>
            In mijn vrije tijd speel ik soms videogames en ben ik graag in de
            natuur.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
