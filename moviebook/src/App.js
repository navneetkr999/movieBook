import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MoviesCard from "./components/moviescard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
