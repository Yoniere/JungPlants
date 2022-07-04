import { Component } from "react";
import { plantService } from "../services/plantService";
import { PlantList } from "../cmps/PlantList";
import { PlantDetails } from "./PlantDetails";

export class PlantApp extends Component {
  state = {
    plants: null,
    selectedPlantId: null,
    filterBy: null,
  };

  componentDidMount() {
    this.loadPlants();
  }

  async loadPlants() {
    const plants = await plantService.query();
    this.setState({ plants });
  }

  onSelectPlant = (plantId) => {
    this.setState({ selectedPlantId: plantId });
  };

  render() {
    const { plants, selectedPlantId } = this.state;
    if (!plants) return <div className="container">Loading...</div>;
    return (
      <section className="plant-app container">
        filter
        {!selectedPlantId ? (
          <PlantList onSelectPlant={this.selectedPlantId} plants={plants}></PlantList>
        ) : (
          <PlantDetails></PlantDetails>
        )}
      </section>
    );
  }
}
