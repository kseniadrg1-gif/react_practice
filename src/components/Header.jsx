import { useState, useEffect } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
