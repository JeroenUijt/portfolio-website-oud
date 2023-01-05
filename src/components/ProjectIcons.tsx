import { FC } from "react";

const ProjectIcons: FC = () => {
  const socials = [
    {
      id: "QoalaGames",
      href: "https://qoalagames.com/",
      src: "/images/social/QG.png",
    },
    {
      id: "GeekyGeckoGames",
      href: "https://geekygeckogames.com/",
      src: "/images/social/GGG.png",
    },
  ];

  return (
    <div className="flex justify-center space-x-3 p-2">
      {socials.map((social) => (
        <a
          className="rounded-full focus:outline-none focus:ring focus:ring-blue-300"
          href={social.href}
          key={social.id}
          target="_blank"
        >
          <img
            className="rounded-full hover:brightness-75 active:brightness-50"
            src={social.src}
            style={{ height: 32, width: 32 }}
          />
        </a>
      ))}
    </div>
  );
};

export default ProjectIcons;
