import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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
  // const style = {
  //   color: "green",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };

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
      <Pizza
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
      />
    </main>
  );
}

function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoname} alt="pizza spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredien}</p>
        <span>{props.price + 3}</span>
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

  // if (hours >= openHours && hours <= closeHours) alert("where currently open");
  // else alert("sorry we're closed");

  const time = new Date().toLocaleTimeString();
  return <footer> {time} We're currently open</footer>;
}
