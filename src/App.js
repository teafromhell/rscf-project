import Articles from "./components/Articles";
import Cards from "./components/Cards";
import Header from "./components/Header";
import News from "./components/News";
import Press from "./components/Press";
import Results from "./components/Results";
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
    </div>
  );
}

export default App;
