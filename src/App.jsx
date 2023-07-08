import Footer from "./components/Footer";
import Features from "./components/Features";
import Hero from "./components/Hero";
import APICall from "./APICall";

//packages
import { IntlProvider } from "react-intl";
import HeaderWIP from "./components/HeaderWIP";

function App() {
  return (
    <IntlProvider>
      <div className="flex flex-col items-center justify-center m-auto pt-16">
        {/* <HeaderWIP /> */}
        <div className="w-1/2 flex flex-col items-center gap-16 sm:gap-24">
          <Hero />
          {/* <div className="flex flex-col gap-0 items-center">
            <h2 className="font-semibold text-2xl text-black">
              Essential Perfection.
            </h2>
            <h2 className="font-semibold text-2xl text-neutral-400">
              Elevated.
            </h2>
          </div> */}
          <Features />
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
