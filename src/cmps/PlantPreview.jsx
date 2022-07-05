export function PlantPreview({ plant, onSelectPlant,onRemovePlant }) {
  return (
    <section className="plant-preview">
    <section 
    onClick={()=> onSelectPlant(plant._id)}>
      <h2>{plant.name}</h2>
      <h4>{plant.price}</h4>
    </section>
      <button onClick={()=>onRemovePlant(plant._id)}>Remove</button>
      </section>
  );
}
