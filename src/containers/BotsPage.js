import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state= {
      bots: [],
      clickedBots: []
    }

  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(json => {
      this.setState({
        bots: json
      })
    })
  }

  handleChange = (bot) => {

    this.setState({
      clickedBots: [bot, ...this.state.clickedBots]
    }, () => {
      document.location.href += '/show'
    })
  }



  render() {
    return (
      <Switch>
        <Rounte
          path={"/show"}
          render={()=> {
            return (<YourBotArmy  clickedBots={this.state.clickedBots} />)
          }}
          />

        <BotCollection  bots={this.state.bots} handleChange={this.handleChange}/>
      </Switch>
    );
  }
}

export default BotsPage;
