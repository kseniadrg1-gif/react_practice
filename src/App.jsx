import Header from "./components/Header";
import { ways } from "./components/data";
import "./App.css";
import WeyToTeach from "./components/WeyToTeach";
import Button from "./components/Button/Button";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            <WeyToTeach
              title={ways[0].title}
              description={ways[0].description}
            />
            <WeyToTeach {...ways[0]} />
          </ul>
        </section>
        <section>
          <h3>Как Result помогает достигать целей</h3>
          <button>старт</button>
          <button>финиш</button>
        </section>
      </main>
    </div>
  );
}
