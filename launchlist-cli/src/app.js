import * as React from "react";
import ReactDOM from "react-dom";

import "whatwg-fetch";

console.log("hello world");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      list: {}
    };
  }
  componentDidMount() {
    fetch("/list")
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

  render() {
    let categories = [];
    if (this.state.list.length) {
      categories = this.state.list.reduce((array, listItem) => {
        if (array.indexOf(listItem.category) === -1) {
          array.push(listItem.category);
        }
        return array;
      }, []);
    }
    return <h1>{categories}</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
