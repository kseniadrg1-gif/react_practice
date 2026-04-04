const now = new Date();
export default function Header() {
  return (
    <header>
      <h3>result university</h3>

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
