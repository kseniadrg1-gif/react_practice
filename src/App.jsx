import Header from "./components/Header";
import WeyToTeach from "./components/WeyToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";
import { ways, differences } from "./components/data";
import "./App.css";

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    console.log(type);
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш подход к обучению</h3>
          <ul>
            {ways.map((way) => (
              <WeyToTeach {...way} />
            ))}
          </ul>
        </section>
        <section>
          <h3>Как Result помогает достигать целей</h3>

          <Button
            isActive={contentType === "way"}
            onClick={() => handleClick("way")}
          >
            старт
          </Button>

          <Button
            isActive={contentType === "easy"}
            onClick={() => handleClick("easy")}
          >
            середина
          </Button>

          <Button
            isActive={contentType === "program"}
            onClick={() => handleClick("program")}
          >
            финиш
          </Button>

          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
        </section>
      </main>
    </div>
  );
}
