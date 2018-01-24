import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);

    this.state = {
      bots:[],
      botArmy:[]
    }
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(resp => resp.json())
      .then(json => this.setState({
        bots: json,
      }))
  }

  handleAddBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  render() {
    console.log('Bots Page State', this.state.botArmy);
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection
          bots={this.state.bots}
          handleAddBot={this.handleAddBot} />
      </div>
    );
  }
}

export default BotsPage;
