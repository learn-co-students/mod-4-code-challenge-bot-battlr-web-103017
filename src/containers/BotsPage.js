import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";
import Search from "../components/Search";

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

  handleChange = (e) => {
    const value = e.target.value
    const filtered = this.state.bots.filter(b => (b.name.toLowerCase().includes(value)))
    console.log("value", value, "filtered", filtered);
    this.setState({army: filtered})
  }

  render() {
    return (
      <div>
        <Search handleChange = {this.handleChange}/>
        <YourBotArmy  army = {this.state.army}/>
        <BotCollection bots = {this.state.bots} handleMyArmy = {this.handleMyArmy}/>
      </div>
    );
  }
}

export default BotsPage;
