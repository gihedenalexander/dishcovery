import FoodItem from "./FoodItem";

function FoodList({ results, searchTerm }) {
    if (searchTerm.length < 2) {
        return (
            <ul>
                <li>Inga resultat att vissa ännu...</li>
            </ul>
        );
    } else if (results.length === 0) {
        return (
            <ul>
                <li>Sökträffen gav inga resultat</li>
            </ul>
        );
    } else {
        return (
            <ul>
                {results.map((name, index) => (
                    <FoodItem key={index} name={name}/>
                ))}
            </ul>
        );
    }
}

export default FoodList;