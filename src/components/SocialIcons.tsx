import { FC } from "react";

const SocialIcons: FC = () => {
  const socials = [
    {
      id: "LinkedIn",
      href: "https://linkedin.com/in/jeroenuijt/",
      src: "/images/social/Linkedin.svg",
    },
    {
      id: "Instagram",
      href: "https://instagram.com/jeroen.uijtdewilligen",
      src: "/images/social/Instagram.svg",
    },
    {
      id: "Github",
      href: "https://github.com/JeroenUijtdewilligen",
      src: "/images/social/GitHub.svg",
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

export default SocialIcons;
