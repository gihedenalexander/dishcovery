import FoodItem from "./FoodItem";

function FoodList({ results, searchTerm }) {
  if (searchTerm.length < 2) {
    return (
      <ul>
        <li>No results to display yet...</li>
      </ul>
    );
  } else if (results.length === 0) {
    return (
      <ul>
        <li>Search term yielded no results</li>
      </ul>
    );
  } else {
    return (
      <ul>
        {results.map((item) => (
          <FoodItem key={item.id} name={item.name}/>
        ))}
      </ul>
    );
  }
}

export default FoodList;