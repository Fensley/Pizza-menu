import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast React pizza co.</h1>
    </header>
  );
}
//
function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.price} />
        ))}
      </ul>
    </main>
  );
}

function Pizza(props) {
  // console.log(props);

  if (props.pizzaobj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>{props.pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;

  // const time = new Date().toLocaleTimeString();

  if (!isOpen) return <p> we're closed </p>;

  return (
    <footer>
      {" "}
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>
          {" "}
          we're happy to welcome you between {openHours}:00 and close{" "}
          {closeHours}:00
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We're open until {props.closeHours}:00 come visit us or order online
      </p>

      <button className="btn">Order now</button>
    </div>
  );
}
console.log("git pull");
