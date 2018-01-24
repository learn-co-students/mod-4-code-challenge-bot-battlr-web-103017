import React from "react";
import BotCard from "../components/BotCard";

const YourBotArmy = props => {
  //your bot army code here...
  console.log('Bot Army Props', props);

  let botArmy = props.botArmy.map((b,i) => {
    return <BotCard bot={b} />
  })
  console.log('Bot Army Cards', botArmy);
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          { botArmy }
          Your Bot Army
        </div>
      </div>
    </div>
  );
};

export default YourBotArmy;
