import VerticalDash from "../assets/vertical-dash.svg";
import GetStartedToday from "../assets/get-started-today.svg";

const heroLinks = [
  {
    id: 1,
    title: "Tutorial",
    href: "#"
  },
  {
    id: 2,
    title: "Marketing Material",
    href: "#"
  },
  {
    id: 3,
    title: "Socials",
    href: "#"
  },
  {
    id: 4,
    title: "Top Sponsor",
    href: "#"
  }
];

export const SubHeader = () => {
  return (
    <div className="flex gap-2 md:gap-2 flex-col md:flex-row justify-center md:justify-between items-center">
      <nav className="text-black flex gap-3 mt-4 md:mt-0">
        {heroLinks.map((val, index) => (
          <div key={val.id} className="flex items-center gap-3">
            <a
              href={val.href}
              className="uppercase font-medium text-xs sm:text-sm md:text-base lg:text-2xl hover:text-white/80 transition-all duration-300 cursor-pointer"
            >
              {val.title}
            </a>
            {index !== heroLinks.length - 1 && <img src={VerticalDash} alt="vertical-dash" />}
          </div>
        ))}
      </nav>
      <button>
        <img src={GetStartedToday} alt="Get Started Today" />
      </button>
    </div>
  );
};
