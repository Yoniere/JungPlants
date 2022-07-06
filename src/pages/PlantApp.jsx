import { Component } from "react";
import { plantService } from "../services/plantService";
import { PlantList } from "../cmps/PlantList";
import { PlantDetails } from "./PlantDetails";
import { PlantFilter } from "./PlantFilter";
import { Link } from "react-router-dom";

export class PlantApp extends Component {
  state = {
    plants: null,
    filterBy: null,
  };

  componentDidMount() {
    this.loadPlants();
  }

  async loadPlants() {
    const plants = await plantService.query(this.state.filterBy);
    this.setState({ plants });
  }

  onRemovePlant = async (plantId) => {
    await plantService.remove(plantId);
    this.loadPlants();
  };

  onChangeFilter = (filterBy) => {
    console.log("filterBy:", filterBy);
    this.setState({ filterBy }, this.loadPlants);
  };

  render() {
    const { plants } = this.state;
    if (!plants) return <div className="container">Loading...</div>;
    return (
      <section className="plant-app container">
        <PlantFilter onChangeFilter={this.onChangeFilter}></PlantFilter>
        <Link to="/plant/edit">Add Plant</Link>
        <PlantList history={this.props.history}
          onRemovePlant={this.onRemovePlant}
          plants={plants}
        ></PlantList>
        
      </section>
    );
  }
}
