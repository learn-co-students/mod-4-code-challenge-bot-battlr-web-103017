import React from "react";
import BotCard from "../components/BotCard";

const BotCollection = props => {
  //your code here


  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots <br></br>
        {props.bots.map(bot => <BotCard bot={bot} handleChange={props.handleChange}/>)}

      </div>
    </div>
  );
};

export default BotCollection;
