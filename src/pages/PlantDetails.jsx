import { Component } from "react";
import { plantService } from "../services/plantService";

export class PlantDetails extends Component {
  state = {
    plant: null,
  };

  async componentDidMount() {
    const plant = await plantService.getById(this.props.plantId);
    this.setState({ plant });
  }
  render() {
    const {plant} = this.state
    if (!plant) return <div>Loading...</div>
    return ( <section className="app-filter">
        <h2>{plant.name}</h2>
        <h4>{plant.price}</h4>
        <h4>{plant.family}</h4>
        <h4>{plant.type}</h4>
        <button onClick={this.props.onBack}>back</button>
    </section>
    );
  }
}
