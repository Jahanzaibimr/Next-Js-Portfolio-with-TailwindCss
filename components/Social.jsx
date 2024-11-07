import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Jahanzaibimr" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/syed-jahanzaib-47950a225/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@JahanzaibKhan-fl1qo" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/syed_jahanzaib96/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Link to ${item.path.replace("https://", "")}`} // For accessibility
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
