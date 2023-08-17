import "./Fortuna.css";
import useFetch from "../hooks/useFetch";

const Fortuna = ({ data }) => {
  const [position, back, changePosition] = useFetch(data);

  return (
    <article className={`article fondo${back}`}>
      <section className="section">
        <h1 className="title">GALLETA DE LA FORTUNA</h1>
        <div className="fortuna">
          <div className="fortuna__content">
            <p className="fortuna__phrases">{data[position].phrase}</p>
            <p className="fortuna__autor">{data[position].author}</p>
          </div>
          <figure className="content__text">
            <img
              className="content__pinture"
              src="public/mensanger.png"
              alt=""
            />
          </figure>
        </div>
        <button className="button" onClick={changePosition}>
          Prueba tu suerte
        </button>
      </section>
    </article>
  );
};

export default Fortuna;
