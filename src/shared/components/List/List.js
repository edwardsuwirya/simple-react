import ListItem from "./ListItem";
import PropTypes from "prop-types";

function List(props) {
    const {items} = props;
    let listItem = items.map((i) => (
        <ListItem key={i.id} item={i}></ListItem>
    ))
    return (
        <ul>{listItem}</ul>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
    }))
}
export default List;
