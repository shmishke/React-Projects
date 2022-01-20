import React, { Component } from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import SinglePage from "./Pages/SinglePage/SinglePage.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.setSelectedChar = this.setSelectedChar.bind(this);
    this.state = {
      data: [],
      activePage: 1,
      selectedChar: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://rickandmortyapi.com/api/character/?page=${this.state.activePage}`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.results }));
  }

  setSelectedChar(charId) {
    this.setState({ selectedChar: charId });
  }

  render() {
    return (
      <div>
        {this.state.selectedChar ? (
          <SinglePage
            id={this.state.selectedChar}
            setSelectedChar={this.setSelectedChar}
          />
        ) : (
          <HomePage
            characters={this.state.data}
            setSelectedChar={this.setSelectedChar}
          />
        )}
      </div>
    );
  }
}

export default App;
