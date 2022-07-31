import { Component } from "react";
// import { plantService } from "../services/plantService";
import { PlantList } from "../cmps/PlantList";
// import { PlantDetails } from "./PlantDetails";
import { PlantFilter } from "./PlantFilter";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadPlants,
  removePlant,
  setFilterBy,
} from "../store/actions/plantActions";

class _PlantApp extends Component {
  // state = {
  //   plants: null,
  //   filterBy: null,
  // };

  async componentDidMount() {
    // this.loadPlants()
    this.props.loadPlants()
  }

  // async loadPlants() {
  //   const plants = await plantService.query(this.state.filterBy);
  //   this.setState({ plants });
  // }

  onRemovePlant = async (plantId) => {
    this.props.removePlant(plantId);
    // console.log(this.props)
    // this.props.loadPlants();
  };

  onChangeFilter = async (filterBy) => {
    // console.log("filterBy:", filterBy);
    await this.props.setFilterBy(filterBy);
    this.props.loadPlants(filterBy);
  };
  render() {
    const { plants } = this.props
    if (!plants) return <div className="container">Loading...</div>;
    return (
      <section className="plant-app container">
        <PlantFilter onChangeFilter={this.onChangeFilter}></PlantFilter>
        <Link to="/plant/edit"><img src="https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657709535/JungPlants%20Project/icons8-add-48_jb2gec.png" /></Link>
        <PlantList
          history={this.props.history}
          onRemovePlant={this.onRemovePlant}
          plants={plants}
        ></PlantList>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    plants: state.plantModule.plants,
  };
};

const mapDispatchToProps = {
  loadPlants,
  removePlant,
  setFilterBy,
};

export const PlantApp = connect(mapStateToProps, mapDispatchToProps)(_PlantApp);
