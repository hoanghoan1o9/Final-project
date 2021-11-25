import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./nutrition.css";

const Nutrition = () => {
  const [tdee, setTdee] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [fat, setFat] = useState("");

  const [chicken, setChicken] = useState("");
  const [pork, setPork] = useState("");
  const [beef, setBeef] = useState("");

  const [rice, setRice] = useState("");
  const [bread, setBread] = useState("");
  const [riceNoodle, setRiceNoodle] = useState("");

  const [avocado, setAvocado] = useState("");
  const [cheese, setCheese] = useState("");

  const tdeeRef = useRef();

  const handleIput = (e) => {
    setTdee(Math.abs(e.target.value));
  };
  const handleCalculateLose = () => {
    let proteinIndex = Math.round((((+tdee - 300) / 100) * 30) / 4);
    let carbIndex = Math.round((((+tdee - 300) / 100) * 40) / 4);
    let fatIndex = Math.round((((+tdee - 300) / 100) * 30) / 9);

    let chickenMeat = Math.floor((proteinIndex * 100) / 31);
    let porkMeat = Math.floor((proteinIndex * 100) / 19);
    let beefMeat = Math.floor((proteinIndex * 100) / 26);

    let cookedRice = Math.floor((carbIndex * 100) / 28);
    let whiteBread = Math.floor((carbIndex * 100) / 49);
    let riceNoodleIndex = Math.floor((carbIndex * 100) / 26);

    let avocadoIndex = Math.floor((fatIndex * 100) / 15);
    let cheeseIndex = Math.floor((fatIndex * 100) / 33);

    setProtein(proteinIndex);
    setCarbohydrate(carbIndex);
    setFat(fatIndex);

    setChicken(chickenMeat);
    setPork(porkMeat);
    setBeef(beefMeat);

    setRice(cookedRice);
    setBread(whiteBread);
    setRiceNoodle(riceNoodleIndex);

    setAvocado(avocadoIndex);
    setCheese(cheeseIndex);

    tdeeRef.current.focus();
  };

  const handleCalculateRemain = () => {
    let proteinIndex = Math.round(((+tdee / 100) * 30) / 4);
    let carbIndex = Math.round(((+tdee / 100) * 40) / 4);
    let fatIndex = Math.round(((+tdee / 100) * 30) / 9);

    let chickenMeat = Math.floor((proteinIndex * 100) / 31);
    let porkMeat = Math.floor((proteinIndex * 100) / 19);
    let beefMeat = Math.floor((proteinIndex * 100) / 26);

    let cookedRice = Math.floor((carbIndex * 100) / 28);
    let whiteBread = Math.floor((carbIndex * 100) / 49);
    let riceNoodleIndex = Math.floor((carbIndex * 100) / 26);

    let avocadoIndex = Math.floor((fatIndex * 100) / 15);
    let cheeseIndex = Math.floor((fatIndex * 100) / 33);

    setProtein(proteinIndex);
    setCarbohydrate(carbIndex);
    setFat(fatIndex);

    setChicken(chickenMeat);
    setPork(porkMeat);
    setBeef(beefMeat);

    setRice(cookedRice);
    setBread(whiteBread);
    setRiceNoodle(riceNoodleIndex);

    setAvocado(avocadoIndex);
    setCheese(cheeseIndex);

    tdeeRef.current.focus();
  };

  const handleCalculateGain = () => {
    let proteinIndex = Math.round((((+tdee + 300) / 100) * 30) / 4);
    let carbIndex = Math.round((((+tdee + 300) / 100) * 40) / 4);
    let fatIndex = Math.round((((+tdee + 300) / 100) * 30) / 9);

    let chickenMeat = Math.floor((proteinIndex * 100) / 31);
    let porkMeat = Math.floor((proteinIndex * 100) / 19);
    let beefMeat = Math.floor((proteinIndex * 100) / 26);

    let cookedRice = Math.floor((carbIndex * 100) / 28);
    let whiteBread = Math.floor((carbIndex * 100) / 49);
    let riceNoodleIndex = Math.floor((carbIndex * 100) / 26);

    let avocadoIndex = Math.floor((fatIndex * 100) / 15);
    let cheeseIndex = Math.floor((fatIndex * 100) / 33);

    setProtein(proteinIndex);
    setCarbohydrate(carbIndex);
    setFat(fatIndex);

    setChicken(chickenMeat);
    setPork(porkMeat);
    setBeef(beefMeat);

    setRice(cookedRice);
    setBread(whiteBread);
    setRiceNoodle(riceNoodleIndex);

    setAvocado(avocadoIndex);
    setCheese(cheeseIndex);

    tdeeRef.current.focus();
  };

  return (
    <div className="container_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Enter Your TDEE</th>
              <th>
                <input
                  placeholder="Enter your TDEE"
                  style={{ padding: "5px", borderRadius: "5px" }}
                  type="number"
                  onChange={handleIput}
                  ref={tdeeRef}
                  value={tdee}
                />
              </th>
              <th>
                <button
                  onClick={handleCalculateLose}
                  disabled={!tdee}
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                >
                  Lose Weight
                </button>
              </th>
              <th>
                <button
                  onClick={handleCalculateRemain}
                  disabled={!tdee}
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                >
                  Remain Weight
                </button>
              </th>
              <th>
                <button
                  onClick={handleCalculateGain}
                  disabled={!tdee}
                  style={{ fontWeight: "bold" }}
                  className="button_nutrition"
                >
                  Gain Weight
                </button>
              </th>
            </tr>
            <tr>
              <td>1</td>
              <td style={{ fontWeight: "bold" }}>Protein /day</td>
              <td style={{ fontWeight: "bold" }}>{protein} g</td>
              <td>
                Chicken breast meat<em>*</em> <em>{chicken}g</em>
              </td>
              <td>
                lean pork <em>{pork}g</em>
              </td>
              <td>
                Lean beef <em>{beef}g</em>
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td style={{ fontWeight: "bold" }}>Carbohydrate /day</td>
              <td style={{ fontWeight: "bold" }}>{carbohydrate} g</td>
              <td>
                Cooked rice <em>{rice}g</em>
              </td>
              <td>
                Bread <em>{bread}g</em>
              </td>
              <td>
                Rice noodle<em>*</em> <em>{riceNoodle}g</em>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td style={{ fontWeight: "bold" }}>Fat /day</td>
              <td style={{ fontWeight: "bold" }}>{fat} g</td>
              <td>
                Avocado<em>*</em> <em>{avocado}g</em>
              </td>
              <td>
                Olive oil <em>{fat}g</em>
              </td>
              <td>
                Cheese <em>{cheese}g</em>
              </td>
            </tr>

            <tr>
              <td>
                <em>Notice:</em>
              </td>
              <td>
                <em>* : Should use</em>
              </td>
              <td>
                <em>
                  Select a cell in each row. That's the best suggestion for your
                  menu for a day
                </em>
              </td>
              <td>
                All weights of the above ingredients are weighed before cooking
              </td>
              <td>
                Besides protein, carbohydrates, fat. You need to eat more green
                vegetables and fruits. The amount depends on your spending
                ability
              </td>
              <td>
                Drink enough water advice is from 1.5 - 2 liters of water in a
                day. sleep enough, sleep well and deeply 7-8 hours a night,
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./detailsNutrition" className="back_button_nutrition">
          Go to Detail Nutrition
        </Link>
      </div>
      <div>
        <Link to="./tdee" className="forward_button_nutrition">
          Go to Count TDEE
        </Link>
      </div>
    </div>
  );
};

export default Nutrition;
