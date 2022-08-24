import Arch from "./components/Arch";
import Articles from "./components/Articles";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Heroes from "./components/Heroes";
import Journals from "./components/Journals";
import News from "./components/News";
import Press from "./components/Press";
import Results from "./components/Results";
import Talking from "./components/Talking";
import "./styles/globals.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <News />
      <Articles />
      <Press />
      <Results />
      <Journals />
      <Talking />
      <Arch />
      <Heroes />
      <Footer />
    </div>
  );
}

export default App;
