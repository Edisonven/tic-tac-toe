export default function Square({ isSelected, children, updateBoard, index }) {
  const className = `app__game__square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <section index={index} onClick={handleClick} className="square__container">
      <div className={className}>{children}</div>
    </section>
  );
}
