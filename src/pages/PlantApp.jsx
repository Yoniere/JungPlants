import { Component } from "react";
import { plantService } from "../services/plantService";
import { PlantList } from "../cmps/PlantList";
import { PlantDetails } from "./PlantDetails";
import { PlantFilter } from "./PlantFilter";

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
  onRemovePlant= async (plantId)=> {
    await plantService.remove(plantId);
    this.loadPlants();
  }

  render() {
    const { plants, selectedPlantId } = this.state;
    if (!plants) return <div className="container">Loading...</div>;
    return (
      <section className="plant-app container">
        {selectedPlantId ? (
          <PlantDetails
            plantId={selectedPlantId}
            onBack={() => this.onSelectPlant(null)}
          ></PlantDetails>
        ) : (
        <>
        <PlantFilter></PlantFilter>
          <PlantList
            onSelectPlant={this.onSelectPlant}
            onRemovePlant={this.onRemovePlant}
            plants={plants}
          ></PlantList>
          </>
        )}
      </section>
    );
  }
}
