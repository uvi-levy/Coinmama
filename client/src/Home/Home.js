import React, { useState, useEffect } from "react";
import LoadData from "../Services/LoadData";
function Home(props) {
  const [coins, setCoins] = useState([
    { name: "BTCUSD", date: "1636646399", value: 64848 },
    { name: "ETHUSD", date: "1636646399", value: 4720 },
    { name: "LTCUSD", date: "1636646398", value: 264 },
  ]);
  useEffect(getCoins, []);
  function getCoins() {
    LoadData().then((coins) => {
      let newCoins = coins.slice(Math.max(coins.length - 3, 1));
      setCoins(newCoins);
    });
  }
  return (
    <div>
      <table>
        <tbody>
          {coins.map((item) => {
            return (
              <div>
                <tr>
                  <th>{item.name.slice(0, 3)}</th>

                  <th>{item.value}</th>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
      <button onClick={this.props.history.push("/history")}>
        to historical rates
      </button>
    </div>
  );
}
//
export default Home;
