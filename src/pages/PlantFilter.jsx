import { Component } from "react";

export class PlantFilter extends Component {
  state = {
    filterClicked: false,
    // name: "",
    // price: "",
    // type: "Indoor",
    // family: "",
  };

  handleChange = ({ target }) => {
    // console.log(target)
    const field = target.name;
    const value = target.type === "number" ? +target.value : target.value;
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state);
    });
  };

  toggleFilter=(filterClicked)=> {
    // console.log(filterClicked)
   this.setState({filterClicked:filterClicked})
  }

  render() {
    const { name, price, type, family } = this.props;
    const { filterClicked } = this.state
    if (!filterClicked) return <img onClick={()=>this.toggleFilter(!filterClicked)} src='https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657709534/JungPlants%20Project/icons8-filter-mail-50_imha0s.png'></img>
    return (
      
        <section className="app-filter flex">
          <img onClick={()=>this.toggleFilter(!filterClicked)} src='https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657709534/JungPlants%20Project/icons8-filter-mail-50_imha0s.png'></img>
          <section>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="name"
              name="name"
              value={name}
            />
          </section>
          <section>
            <label htmlFor="price">Price</label>
            <input
              onChange={this.handleChange}
              type="number"
              id="price"
              name="price"
              value={price}
            />
          </section>
          <section>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={this.handleChange}
            >
              {/* <option value="" disabled>
                Choose a Type
              </option> */}
              <option value="Indoor">Indoor</option>
              <option value="Outdoor">Outdoor</option>
            </select>
            {/* <input onChange={this.handleChange} type="text" id="type" name="type" value={type} /> */}
          </section>
          <section>
            <label htmlFor="family">Family</label>
            <input
              onChange={this.handleChange}
              type="text"
              id="family"
              name="family"
              value={family}
            />
          </section>
        </section>
    );
  }
}
