import { Link } from "react-router-dom";

export function PlantPreview({ plant, onRemovePlant }) {
  return (
    <section>
      <Link to={`/plant/${plant._id}`} className="plant-preview">
        <h2>{plant.name}</h2>
        <h4>{plant.price}</h4>
      </Link>
      <button onClick={() => onRemovePlant(plant._id)}>Remove</button>
    </section>
  );
}
