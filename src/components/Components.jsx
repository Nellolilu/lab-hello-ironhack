import icon1 from "../images/icon1.png";

function Declarative(props) {
  return (
    <article>
      <img src={icon1} alt="icon1" />
      <h3>Declarative</h3>
      <p>{props.children}</p>
    </article>
  );
}

export default Declarative;
