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
  const pizzas = pizzaData ;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>


      {numPizzas > 0 ? (
        <> 
        <p> Authencic italian cuisine. 6 creative dishes to choose from. all from our stone oven, all organic, all dishes</p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.price} />
        ))}
      </ul>
        </>
      ):
      <p> We're still working on our menu. Please come back later</p>
      }
    </main>
  );
}

function Pizza({pizzaobj}) {
  // if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ''}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>

           {/* {pizzaobj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaobj.price}</span>} */}

        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
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

function Order({closeHours }) {
  return (
    <div className="order">
      <p>
        We're open  until {closeHours}:00 come visit us or order online
      </p>

      <button className="btn">Order now</button>
    </div>
  );
}
