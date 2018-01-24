import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
console.log("in my army", props.army);
   const myBotArmy = props.army.map((bot, i) => <BotCard key={i} bot={bot}/>)
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {myBotArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
