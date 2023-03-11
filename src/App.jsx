import Footer from "./components/Footer";
import HeaderWIP from "./components/HeaderWIP";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col items-center m-auto">
      <HeaderWIP />
      <div className="w-1/2">
        <Hero />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
