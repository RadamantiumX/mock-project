export const CategoryCard = ({image, category}) => {
  return (
    <div>
        <img src={image} alt={`image for ${category} sex porn`} />
        <h3>{category}</h3>
    </div>
  )
}
