import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Hello Dictionary 📚</h1>
        </header>
        <main className="Dictionary-body">
          <Dictionary />
        </main>
        <footer className="text-center">coded by Stefanie Jahn</footer>
      </div>
    </div>
  );
}
