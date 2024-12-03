import Navigation from "./components/Navigation";
import { useState } from "react";
import { FinalTeam, Home, Player, Team } from "../src/pages/index.js";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "motion/react";
import Model from "../src/components/Model.jsx";

export default function App() {
  let location = useLocation();

  const [showModel, setShowModel] = useState(false);

  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <div className="w-screen h-screen flex-col flex">
      <div className="h-[15%]">
        <Navigation />
      </div>
      <div className="h-[85%] flex justify-center items-center overflow-hidden">
        <Model showModel={showModel} setShowModel={setShowModel} />
        <AnimatePresence onExitComplete={() => setShowModel(false)}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route
              path="/Team"
              element={
                <Team addBase={addBase} addTopping={addTopping} pizza={pizza} />
              }
            />
            <Route
              path="/Player"
              element={<Player addTopping={addTopping} pizza={pizza} />}
            />
            <Route
              path="/FinalTeam"
              element={<FinalTeam pizza={pizza} setShowModel={setShowModel} />}
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
