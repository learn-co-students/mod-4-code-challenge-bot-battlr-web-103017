import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          Your Bot Army <br></br>
        {props.clickedBots.map(bot => <BotSpecs bot={bot}/>)}

        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
