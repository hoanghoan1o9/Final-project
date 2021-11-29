import React from "react";
import "./detailNutrition.css";
import { Link } from "react-router-dom";
const DetailsNutrition = () => {
  return (
    <div className="container_detail_nutrition">
      <div>
        <table>
          <tbody>
            <tr>
              <th>#</th>
              <th>Type of food</th>
              <th>Calories per 100g</th>
              <th>Protein (g)</th>
              <th>Carbohydrate (g)</th>
              <th>Fat (g)</th>
            </tr>
            <tr>
              <td>1</td>
              <td>lean pork</td>
              <td>145</td>
              <td>19</td>
              <td>7</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td>chicken breast meat</td>
              <td>165</td>
              <td>31</td>
              <td>3.6</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Lean beef</td>
              <td>217</td>
              <td>26.1</td>
              <td>11.8</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td>duck egg</td>
              <td>186</td>
              <td>12</td>
              <td>10</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td>chicken egg</td>
              <td>155</td>
              <td>13</td>
              <td>11</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Salmon</td>
              <td>208</td>
              <td>19.8</td>
              <td>6.34</td>
              <td>0</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Fresh milk with no sugar</td>
              <td>50</td>
              <td>3.9</td>
              <td>4.4</td>
              <td>4.8</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Olive oil</td>
              <td>884</td>
              <td>0</td>
              <td>14</td>
              <td>0</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Avocado</td>
              <td>160</td>
              <td>2</td>
              <td>0</td>
              <td>15</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Cooked rice</td>
              <td>130</td>
              <td>0</td>
              <td>0</td>
              <td>28</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Bread</td>
              <td>265</td>
              <td>0</td>
              <td>0</td>
              <td>46</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <Link to="./nutrition" className="back_button_nutrition">
          Back to Calculate nutrition
        </Link>
      </div>
    </div>
  );
};

export default DetailsNutrition;
