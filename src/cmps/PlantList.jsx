import { PlantPreview } from "./PlantPreview"

export function PlantList({plants, onSelectPlant,onRemovePlant}) {
  return (
    <section className="plant-list flex">
        {plants.map(plant=>
            <PlantPreview key={plant._id} onRemovePlant={onRemovePlant} onSelectPlant={onSelectPlant} plant={plant} ></PlantPreview>)}
    </section>
  )
}
