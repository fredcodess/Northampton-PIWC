import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaInstagram, url: "https://www.instagram.com/northampton.piwc/" },
  { icon: FaFacebookF, url: "https://facebook.com" },
  { icon: FaYoutube, url: "https://www.youtube.com/@northamptonPIWC" },
  { icon: FaTiktok, url: "https://www.tiktok.com/@northampton_piwc" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socials.map(({ icon: Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
