import React from "react";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import "./App.css";
import { Cards } from "./components/Cards";

function App() {
  return (
    <main className="container main">
      <Logo />
      <Hero />
      <section className="card--main position">
        <Cards
          img={"../src/assets/Katie.png"}
          rate={"5.0"}
          review={"(6) •"}
          country={"USA"}
          content1={"Life Lessons with Katie Zaferes"}
          content2={"From $136 / person"}
        />
        <Cards
          img={"../src/assets/wedding-photography 1.png"}
          rate={5.0}
          review={"(20) •"}
          country={"USA"}
          content1={"Learn wedding photography"}
          content2={"From $125 / person"}
        />
        <Cards
          img={"../src/assets/mountain-bike 1.png"}
          rate={4.8}
          review={"(2) •"}
          country={"USA"}
          content1={"Group Mountain Biking"}
          content2={"From $50 / person"}
        />
      </section>
    </main>
  );
}

export default App;
