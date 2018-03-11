import * as React from "react";
import ReactDOM from "react-dom";
import { injectGlobal } from "styled-components";

import mapCategories from "../scripts/mapCategories";
import "whatwg-fetch";
import { Main } from "./styledComponents";

import { Checklist } from "./Checklist";

injectGlobal`
  * {
    box-sizing: border;
    margin-top: 0;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      list: null
    };
    this.completeItem = this.completeItem.bind(this);
  }

  componentDidMount() {
    fetch("/list", { cache: "no-store" })
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ list: json });
      })
      .catch(ex => {
        this.setState({
          error: `Couldn't load list!`
        });
      });
  }

  completeItem(name) {
    fetch("/complete", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      cache: "no-store",
      method: "POST",
      body: JSON.stringify({ name })
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        console.log(json);

        this.setState({ list: json });
      })
      .catch(ex => {
        this.setState({
          error: `Couldn't load list!`
        });
      });
  }

  render() {
    return (
      <Main>
        <h1>Launchlist</h1>
        {this.state.list && (
          <Checklist completeItem={this.completeItem} list={this.state.list} />
        )}
      </Main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
