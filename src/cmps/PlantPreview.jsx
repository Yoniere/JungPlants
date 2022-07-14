import { Link } from "react-router-dom";

export function PlantPreview({ plant, onRemovePlant }) {
  return (
    <section className="plant-preview">
      <Link to={`/plant/${plant._id}`}>
        <h2>{plant.name}</h2>
      </Link>
      <img className="preview-img" src={plant.img}></img>
      <section className="below-image flex space-between">
        <button className="remove-btn" onClick={() => onRemovePlant(plant._id)}><img src='https://res.cloudinary.com/ddhuvtrpp/image/upload/v1657709534/JungPlants%20Project/icons8-remove-50_i7jxar.png'/></button>
        <h4>{plant.price}$</h4>
      </section>
    </section>
  );
}
