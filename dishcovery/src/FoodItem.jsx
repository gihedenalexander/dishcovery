function FoodItem({ name, language }) {
const url = `https://${language}.wikipedia.org/wiki/${encodeURIComponent(name)}`;
    return (
        <li>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
            </a>
        </li>
    );
}

export default FoodItem;