import React from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
  return (
    <div>
      <h2>Loot Check</h2>
      <hr />
      <Wallet />
      <hr />
      <Loot />
      <div>
        Powered by{" "}
        <a target="_blank" href="http://google.fr">
          Google
        </a>
      </div>
    </div>
  );
};

export default App;
