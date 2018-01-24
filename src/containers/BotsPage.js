import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor(){
    super();
    this.state = {
      bots: [],
      army: []
    }
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json()).then(json => this.setState({bots: json}, () => console.log("in state", this.state.bots)))
  }

  handleMyArmy = (e) => {
    const botId = e.target.id
    console.log("botId", botId)
    const clickedBot = this.state.bots.find(bot => bot.id == botId)
    this.setState(
      {army: [...this.state.army, clickedBot]},
      () =>  console.log("after set state", this.state.army))
  }

  render() {
    return (
      <div>
        <YourBotArmy  army = {this.state.army}/>
        <BotCollection bots = {this.state.bots} handleMyArmy = {this.handleMyArmy}/>
      </div>
    );
  }
}

export default BotsPage;
