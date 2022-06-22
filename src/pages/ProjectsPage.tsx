import React, { FC } from "react";
import Navbar from "../components/Navbar";

const ProjectsPage: FC = () => {
  return (
    <div>
      <Navbar />
      <section id="Intro" className="relative">
        <div className="sm:grid sm:grid-cols-2">
          <div>
            <img src="/images/JeroenUijt.jpeg" alt="Ikzeluf" />
          </div>
          <div className="flex justify-center bg-gradient-to-t from-[#c0f56a] to-[#b5deff] p-4">
            <div className="self-center rounded-lg bg-gray-700 bg-opacity-50 p-2 text-center text-white">
              <h1 className="text-4xl font-semibold">
                Hieronder een lijst met al mijn projecten!
              </h1>
              <h4>School & Persoonlijke projecten</h4>
            </div>
          </div>
        </div>
      </section>
      <section id="About" className="mx-auto max-w-5xl px-5 py-10 md:px-8">
        <div className="text-gray-700">
          <h1 className="text-4xl font-bold">Over mij:</h1>
          <br />
          <p>Project 1</p>
          <br />
          <p>Bla bla bla</p>
          <br />
          <p>mooi man</p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
