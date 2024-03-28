export default function Square({ children, setBoard, index }) {

  return (
    <section className="square__container">
      <div className="app__game__square">
        <span className="app__game__squarecontent"></span>
      </div>
    </section>
  );
}
