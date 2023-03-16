import Footer from "./components/Footer";
import HeaderWIP from "./components/HeaderWIP";
import Features from "./components/Features";
import Hero from "./components/Hero";


//packages
import {IntlProvider} from "react-intl";

function App() {
  
  return (
      <IntlProvider>
        <div className="flex flex-col items-center justify-center m-auto pt-16">
          {/* <HeaderWIP /> */}
          <div className="w-1/2 flex flex-col items-center gap-32">
            <Hero />
            <Features />
          </div>
            <Footer/>
        </div>
      </IntlProvider>
  );
}

export default App;
