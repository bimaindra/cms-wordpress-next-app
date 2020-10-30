export default function Categories({ categories }) {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <em>
            <span key={index} className="ml-1 font-bold">
              {category.node.name}
            </span>
          </em>
        ))
      ) : (
        <em><span className="ml-1 font-bold">{categories.edges.node.name}</span></em>
      )}
    </span>
  )
}
