import Footer from "./components/Footer";
import HeaderWIP from "./components/HeaderWIP";
import Hero from "./components/Hero";


//packages
import {IntlProvider} from "react-intl";

function App() {
  
  return (
      <IntlProvider>
        <div className="flex flex-col items-center justify-center m-auto">
          <HeaderWIP />
          <div className="w-1/2">
            <Hero />
          </div>
            <Footer/>
        </div>
      </IntlProvider>
  );
}

export default App;
