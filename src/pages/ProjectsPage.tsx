import React, { FC } from "react";
import Navbar from "../components/Navbar";
import ProjectIcons from "../components/ProjectIcons";

const ProjectsPage: FC = () => {
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
              <h1 className="text-4xl font-semibold">Mijn projecten!</h1>
              <h4>School & Persoonlijke projecten</h4>
              <ProjectIcons />
            </div>
          </div>
        </div>
      </section>
      <section id="Gecko" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700 sm:grid sm:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold">Death Swap: End as One</h1>
            <br />
            <p>3D Game project</p>
            <br />
            <p>
              Death Swap is een 3D horror game gemaakt tijdens de minor <br />
              Game Development & Design. Dit project hebben we in een <br />
              samenwerking van 16 personen gerealiseerd.
            </p>
            <br />
            <br />
            <p>De game is gratis te spelen via Steam!</p>
            <a
              className="text-blue-400 hover:text-blue-500"
              href="https://store.steampowered.com/app/2213390/Death_Swap_End_As_One/"
              target="_blank"
            >
              Link naar de Steam pagina!
            </a>
          </div>
          <div>
            <img src="/images/project/Death-Swap.png" alt="DeathSwap" />
          </div>
        </div>
      </section>
      <section id="Qoala" className="bg-gray-100">
        <div className="mx-auto max-w-5xl px-5 py-10 text-gray-700 sm:grid sm:grid-cols-2 md:px-8">
          <div>
            <h1 className="text-4xl font-bold">Snatcher!</h1>
            <br />
            <p>2D Game project</p>
            <br />
            <p>
              Snatcher is een 2D mobile game gemaakt tijdens de minor <br />
              Game Development & Design. Dit project is in een team van <br />6
              personen gemaakt in 6 weken.
            </p>
            <br />
            <br />
            <p>De game is momenteel tijdelijk niet te downloaden.</p>
          </div>
          <div>
            <img src="/images/project/Snatcher.png" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
