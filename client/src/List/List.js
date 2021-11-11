import React, { useState, useEffect } from "react";
import LoadData from "../Services/LoadData";
function List() {
  const [coins, setCoins] = useState("coins is loading...");
  useEffect(getCoins, []);
  function getCoins() {
    LoadData().then((coins) => {
      coins.forEach((e) => {
        let unix_timestamp = e.date;

        var date = new Date(unix_timestamp * 1000);

        var hours = date.getHours();

        var minutes = "0" + date.getMinutes();

        var seconds = "0" + date.getSeconds();

        var formattedTime =
          hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
        e.date = formattedTime;

        console.log(e.date);
      });
      
      setCoins(coins);
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
                  <th>{item.date}</th>
                  <th>{item.value}</th>
                </tr>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default List;
