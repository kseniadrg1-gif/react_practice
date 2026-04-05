import "./Button.css";

export default function Button({ children, onClick, isActive }) {
  let classes = "button";

  if (isActive) classes += " active";

  return (
    <button
      className={classes}
      onClick={onClick}
      onDoubleClick={() => console.log("dbl")}
    >
      {children}
    </button>
  );
}
