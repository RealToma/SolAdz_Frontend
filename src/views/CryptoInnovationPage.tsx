import MainBg from "../assets/solAdz-bg.png";
import GetStartedToday from "../assets/get-started-today.svg";
import LinesRight from "../assets/lines-right.png";
import BgLeft from "../assets/bg-left-1.png";
import { BottomStats } from "../components/BottomStats";
import VerticalDash from "../assets/vertical-dash.svg";
import { Header } from "@/components/Header";
import { Calculator } from "@/components/Calculator";
const heroLinks = [
  {
    id: 1,
    title: "wallet tutorial",
    href: "#"
  },
  {
    id: 2,
    title: "GUIDE",
    href: "#"
  },
  {
    id: 3,
    title: "EXCHANGE",
    href: "#"
  },
  {
    id: 4,
    title: "SHOP",
    href: "#"
  }
];

export const CryptoInnovationPage = () => {
  return (
    <div className="min-h-screen pb-12 relative h-full overflow-x-hidden">
      <img className="absolute top-0 left-0 w-full h-full object-fill" src={MainBg} alt="Bg Hero" />

      <div className="relative z-10">
        {/* Upper sections */}

        <div className=" max-w-7xl mx-auto px-4 md:px-8">
          <Header />

          <div className="flex gap-2 md:gap-2 flex-col md:flex-row justify-center md:justify-between items-center">
            <nav className="text-black flex gap-3 mt-4 md:mt-0">
              {heroLinks.map((val, index) => (
                <div key={val.id} className="flex items-center gap-3">
                  <a
                    href={val.href}
                    className="uppercase font-medium text-xs sm:text-sm md:text-base lg:text-2xl hover:text-black/70 transition-all duration-300"
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
        </div>

        {/* second section */}
        <div className="pointer-events-none grid grid-cols-1 lg:grid-cols-3 relative z-10  gap-8">
          <div className="relative text-white p-8 col-span-2 pb-12 md:pb-16 lg:pb-24">
            {/* bg image */}
            <img
              className="absolute w-full h-full top-0 left-0 pointer-events-none"
              src={BgLeft}
              alt=""
            />
            <div className="relative z-10 lg:ml-auto mr-[22vw] lg:mr-[18vw] max-w-[558px]">
              <h2 className="text-[30px] md:text-[40px] lg:text-[60px] poller font-bold mb-4">
                SolAdz
              </h2>
              <h3 className="max-w-[393px] text-[20px] md:text-[30px] lg:text-[40px] leading-[1.5] font-bold">
                Leading the Way in Crypto Innovation
              </h3>
              <p className="text-xs sm:text-sm md:text-[15px] mt-4">
                Soladz revolutionizes cryptocurrencies. Soladz is a secure, intuitive, and powerful
                platform for beginners and experts to manage, trade, and grow crypto portfolios
              </p>
            </div>
          </div>
          <div className="hidden lg:block -ml-[10vw] mt-20 md:pr-8 lg:pr-16">
            <img src={LinesRight} alt="Lines Right" />
          </div>
        </div>

        {/* third calculator section */}
        <Calculator />
        {/*  bottom stats */}
        <BottomStats />
      </div>
    </div>
  );
};
