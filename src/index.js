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

function Menu() {
  return (
    <main className="menu">
      <h2> Our Menu</h2>

      <div>
        {pizzaData.map((pizza) => (
          <Pizza
            photoname={pizza.photoName}
            name={pizza.name}
            ingredien={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </div>

      {/* <Pizza
        name="Pizza spinaci"
        ingredien="Tomato, mozarella, spinach, and ricotta cheese"
        photoname="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredien="Tomato, mozarella, mushrooms, and onion"
        photoname="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  // console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoname} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredien}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  console.log(isOpen);

  const time = new Date().toLocaleTimeString();
  return <footer> {time} We're currently open</footer>;
}
