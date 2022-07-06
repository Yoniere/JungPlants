import { PlantPreview } from "./PlantPreview"

export function PlantList({plants,onRemovePlant,history}) {
  return (
    <section className="plant-list flex">
        {plants.map(plant=>
            <PlantPreview key={plant._id} onRemovePlant={onRemovePlant} plant={plant} ></PlantPreview>)}
    </section>
  )
}
