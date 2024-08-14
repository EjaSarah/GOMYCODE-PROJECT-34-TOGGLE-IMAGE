import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "John Jane",
        bio: "Super Lovers.",
        imgSrc: "https://images.unsplash.com/photo-1516653596519-e001baef98fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxvdmVyfGVufDB8fDB8fHwwhttps://via.placeholder.com/150",
        profession: "Lovers",
      },
      shows: false,
      lastMounted: 0,
      intervalId: null,
    };
  }

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        lastMounted: prevState.lastMounted + 1,
      }));
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { Person, shows, lastMounted } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
            <h1>{Person.fullName}</h1>
            <img src={Person.imgSrc} alt={Person.fullName} />
            <p>{Person.bio}</p>
            <h2>{Person.profession}</h2>
          </div>
        )}
        <p>Time since last mounted: {lastMounted} seconds</p>
      </div>
    );
  }
}

export default App;
