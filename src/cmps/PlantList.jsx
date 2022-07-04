import { PlantPreview } from "./PlantPreview"

export function PlantList({plants}) {
  return (
    <section className="plant-list flex">
        {plants.map(plant=>
            <PlantPreview key={plant._id} plant={plant} ></PlantPreview>)}
    </section>
  )
}
