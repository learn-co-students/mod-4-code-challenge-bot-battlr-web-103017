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
      botArmy:[],
      currentBot:'',
    }
  }

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(resp => resp.json())
      .then(json => this.setState({
        bots: json,
      }))
  }

  handleClickBot = (bot) => {
    this.setState({
      currentBot: bot
    })
  }

  handleAddBot = (bot) => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    })
  }

  render() {
    console.log('Bots Page State', this.state.currentBot);
    return (
      <div>
        {this.state.currentBot &&
          <BotSpecs bot={this.state.currentBot}/>
        }
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection
          bots={this.state.bots}
          handleClickBot={this.handleClickBot}
          handleAddBot={this.handleAddBot} />

      </div>
    );
  }
}

export default BotsPage;
