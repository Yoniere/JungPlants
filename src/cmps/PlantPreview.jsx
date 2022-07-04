

export function PlantPreview({plant}) {
  return (
    <section className="plant-preview">
        <h2>{plant.name}</h2>
        <h4>{plant.price}</h4>
    </section>
  )
}
