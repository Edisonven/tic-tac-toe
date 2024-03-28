export default function Square({ isSelected, children, setBoard, index }) {
  const className = `app__game__square ${isSelected ? "is-selected" : ""}`;

  return (
    <section className="square__container">
      <div className={className}>{children}</div>
    </section>
  );
}
