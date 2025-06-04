import FoodItem from "./FoodItem";

function FoodList({ results, searchTerm }) {
  if (searchTerm.length < 2) {
    return (
      <ul className="list-group">
        <li className="list-group-item">No results to display yet...</li>
      </ul>
    );
  } else if (results.length === 0) {
    return (
      <ul className="list-group">
        <li className="list-group-item">Search term yielded no results</li>
      </ul>
    );
  } else {
    return (
      <ul className="list-group">
        {results.map((item) => (
          <FoodItem key={item.id} name={item.name} image={item.image} />
        ))}
      </ul>
    );
  }
}

export default FoodList;
