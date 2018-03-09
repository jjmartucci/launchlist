import * as React from "react";
import ReactDOM from "react-dom";

import "whatwg-fetch";

console.log("hello world");

class App extends React.Component {
  componentDidMount() {
    fetch("/list")
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log("parsed json", json);
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }
  render() {
    return <h1>It's an app!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
