import { Component } from "react";

export class PlantFilter extends Component {
  state = {
    name: "",
    price: "",
    type: "",
    family: "",
  };

  handleChange = ({ target }) => {
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state);
    });
  };

  render() {
    const { name, price, type, family } = this.state;
    return (
      <section className="app-filter">
        <section>
          <label htmlFor="name">Name</label>
          <input onChange={this.handleChange} type="text" id="name" name="name" value={name} />
        </section>
        <section>
          <label htmlFor="price">Price</label>
          <input onChange={this.handleChange} type="number" id="price" name="price" value={price} />
        </section>
        <section>
          <label htmlFor="type">Type</label>
          <input onChange={this.handleChange} type="text" id="type" name="type" value={type} />
        </section>
        <section>
          <label htmlFor="family">Family</label>
          <input onChange={this.handleChange} type="text" id="family" name="family" value={family} />
        </section>
      </section>
    );
  }
}
