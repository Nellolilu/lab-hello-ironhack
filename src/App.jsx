import logo from "./logo.svg";
import "./App.css";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhackLogo from "./images/ironhack-logo.svg";
import menuTop from "./images/menu-top.svg";
import reactLogo from "./images/react-logo.svg";
import Declarative from "./components/Components";

function Head() {
  return (
    <div>
      <img src={ironhackLogo} className="ironhack-logo" alt="ironhack-logo" />
      <img src={menuTop} className="menu-top" alt="menu-top-icon" />
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h1>
        Say hello to
        <br />
        ReactJS
      </h1>
      <p>
        You will learn how to use <br /> the most popular frontend library{" "}
        <br />
        and become a super Ninja Developer
      </p>
    </div>
  );
}

function Button(props) {
  return <button>{props.children}</button>;
}

// function Declarative(props) {
//   return (
//     <article>
//       <img src={icon1} alt="icon1" />
//       <h3>Declarative</h3>
//       <p>{props.children}</p>
//     </article>
//   );
// }

function Components(props) {
  return (
    <article>
      <img src={icon2} alt="icon2" />
      <h3>Components</h3>
      <p>{props.children}</p>
    </article>
  );
}

function SingleWay(props) {
  return (
    <article>
      <img src={icon3} alt="icon2" />
      <h3>Single-Way</h3>
      <p>{props.children}</p>
    </article>
  );
}

function JSX(props) {
  return (
    <article>
      <img src={icon4} alt="icon2" />
      <h3>JSX</h3>
      <p>{props.children}</p>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="App-navbar">
          {" "}
          <Head />
        </section>

        <section className="App-body">
          <Heading />
          <div className="White-button">
            <Button>Awesome!</Button>
          </div>
        </section>
      </header>
      <section className="App-arcticles">
        <Declarative>
          React makes it painless to create interactive UIs
        </Declarative>
        <Components>
          Build makes it painless to create interactive UIs
        </Components>
        <SingleWay>A set makes it painless to create interactive UIs</SingleWay>
        <JSX>Build makes it painless to create interactive UIs</JSX>
      </section>
    </div>
  );
}

export default App;
