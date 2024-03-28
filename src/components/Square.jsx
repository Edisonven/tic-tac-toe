export default function Square({ children, setBoard, index }) {

  return (
    <section className="square__container">
      <div className="app__game__square">
        {children}
      </div>
    </section>
  );
}
