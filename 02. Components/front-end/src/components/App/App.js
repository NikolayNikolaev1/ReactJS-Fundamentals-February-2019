import React, { Component } from "react";
import "./App.css";
import Street from "../Street/Street";
import House from "../House/House";
import HouseDetails from "../HouseDetails/HouseDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      streets: [],
      selectedStreetId: 0,
      selectedHouseId: 0,
      hasFetched: false
    };
  }
  componentWillMount() {
    fetch("http://localhost:9999/feed/street/all")
      .then(rawData => rawData.json())
      .then(data =>
        this.setState({
          streets: data.streets,
          hasFetched: true
        })
      );
  }
  getStreets() {
    return this.state.streets;
  }
  getSelectedStreetHouses() {
    if (this.state.hasFetched) {
      return this.state.streets[this.state.selectedStreetId].homes;
    }

    return [];
  }
  setCurrentStreet(index) {
    this.setState({
      selectedStreetId: index
    });
  }
  setCurrentHouse(index) {
    this.setState({
      selectedHouseId: index
    });
  }
  render() {
    return (
      <div className="App">
        <div className="streets">
          {this.getStreets().map((street, index) => (
            <Street
              selectStreet={e => this.setCurrentStreet(index, e)}
              location={street.location}
              ket={index}
              id={index}
            />
          ))}
        </div>
        <div className="houses">
          {this.getSelectedStreetHouses()
            ? this.getSelectedStreetHouses().map((house, index) => (
                <House
                  selectHouse={e => this.setCurrentHouse(index, e)}
                  imageUrl={house.imageUrl}
                  ket={index}
                  id={index}
                />
              ))
            : ""}
        </div>
        {this.state.hasFetched ? (
          <HouseDetails
            house={this.getSelectedStreetHouses()[this.state.selectedHouseId]}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
