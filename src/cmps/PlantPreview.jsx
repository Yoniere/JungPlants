import { Link } from "react-router-dom";

export function PlantPreview({ plant,onRemovePlant }) {
  return (
    <Link to={`/plant/${plant._id}`} className="plant-preview">
    <section>
      <h2>{plant.name}</h2>
      <h4>{plant.price}</h4>
    </section>
      <button onClick={()=>onRemovePlant(plant._id)}>Remove</button>
      </Link>
  );
}
