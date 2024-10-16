import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import MoviesGrid from "./components/moviesgrid";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MoviesGrid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
