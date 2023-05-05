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
        <HeaderWIP />
        <div className="w-1/2 flex flex-col items-center gap-16 sm:gap-32">
          {/* <APICall /> */}
          <Hero />
          <Features />
        </div>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
