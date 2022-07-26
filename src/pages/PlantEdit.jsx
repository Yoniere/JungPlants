import { connect } from "react-redux";
import React, { Component } from "react";
import { plantService } from "../services/plantService";
import { addPlant, loadPlants } from "../store/actions/plantActions";

export class _PlantEdit extends Component {
  state = {
    plant: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const plant = id
      ? await plantService.getById(id)
      : plantService.getEmptyPlant();
    this.setState({ plant }, () => {
      console.log(this.state.plant);
    });
  }

  handleChange = async ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value || "" : target.value;
    this.setState((prevState) => ({
      plant: { ...prevState.plant, [field]: value },
    }));
  };

  onSavePlant = async (ev) => {
    ev.preventDefault();
    this.props.addPlant({ ...this.state.plant });
    // await plantService.save({ ...this.state.plant });
    this.props.loadPlants();
    this.props.history.push("/plant");
  };

  render() {
    const { plant } = this.state;
    if (!plant) return <div>Loading...</div>;
    return (
      <section className="container">
        <h2>{plant._id ? "Edit" : "Add"} Plant</h2>
        <form onSubmit={this.onSavePlant}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={plant.name}
          />

          <label htmlFor="price">Price</label>
          <input
            onChange={this.handleChange}
            type="number"
            id="price"
            name="price"
            value={plant.price}
          />

          <label htmlFor="family"></label>
          <select
            onChange={this.handleChange}
            name="family"
            id="family"
            value={plant.family}
          >
            <option value="" disabled>
              Choose A Family
            </option>
            <option value="Aracea">Aracea</option>
            <option value="Marantaceae">Marantaceae</option>
          </select>

          <label htmlFor="type"></label>
          <select
            onChange={this.handleChange}
            name="type"
            id="type"
            value={plant.type}
          >
            <option value="" disabled>
              Choose A Type
            </option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>

          <button>Save</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    plants: state.plantModule.plants,
  };
};

const mapDispatchToProps = {
  addPlant,
  loadPlants,
};

export const PlantEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PlantEdit);
