import { Link } from "react-router-dom";

export function PlantPreview({ plant, onRemovePlant }) {
  return (
    <section className="plant-preview">
      <Link to={`/plant/${plant._id}`}>
        <h2>{plant.name}</h2>
      </Link>
      <img src={plant.img}></img>
      <section className="below-image flex space-between">
        <button onClick={() => onRemovePlant(plant._id)}>Remove</button>
        <h4>{plant.price}$</h4>
      </section>
    </section>
  );
}
