import { Component } from "react";
import { Link } from "react-router-dom";
import { plantService } from "../services/plantService";

export class PlantDetails extends Component {
  state = {
    plant: null,
  };

  async componentDidMount() {

    const plant = await plantService.getById(this.props.match.params.id);
    this.setState({ plant });
  }

  // async loadPlants() {
  //   console.log(this.props)
  //   const plant = await plantService.getById(this.props);
  //   this.setState({ plant });
  // }

  onBack=()=> {
    this.props.history.push('/plant')
  }
  render() {
    const { plant } = this.state;
    if (!plant) return <div>Loading...</div>;
    return (
      <section className="app-filter">
        <h2>{plant.name}</h2>
        <h4>{plant.price}</h4>
        <h4>{plant.family}</h4>
        <h4>{plant.type}</h4>
        <Link to={`/plant/edit/${plant._id}`}>Edit</Link>
        <button onClick={this.onBack}>back</button>
      </section>
    );
  }
}
