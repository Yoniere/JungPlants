import { Component } from "react";
import { Link } from "react-router-dom";
import { plantService } from "../services/plantService";

export class PlantDetails extends Component {
  state = {
    plant: null,
  };

  async componentDidMount() {
    const plant = await plantService.getById(this.props.match.params.id);
    console.log(this.props.match.params.id)
    this.setState({ plant });
  }

  // async loadPlants() {
  //   console.log(this.props)
  //   const plant = await plantService.getById(this.props);
  //   this.setState({ plant });
  // }

  onBack = () => {
    this.props.history.push("/plant");
  };
  render() {
    const { plant } = this.props;
    if (!plant) return <div>Loading...</div>;
    return (
      <section className="app-details container flex column">
        <section className="details-section flex space-between">
          <div className="left-section flex column">
            <h2>Name: {plant.name}</h2>
            <h4>Price: {plant.price}$</h4>
            <h4>Family: {plant.family}</h4>
            <h4>Type: {plant.type}</h4>
          </div>
          <div className="image-section">
            <img className="plant-img" src={plant.img} />
          </div>
        </section>
        <section className="action-section flex space-between">
          <img className="back-img" onClick={this.onBack} src='https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657709534/JungPlants%20Project/icons8-arrow-50_jdfxwy.png'/>
          <Link className="edit-btn" to={`/plant/edit/${plant._id}`}>Edit</Link>
        </section>
      </section>
    );
  }
}
