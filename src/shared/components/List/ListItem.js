import PropTypes from "prop-types";

function ListItem(props) {
    const {item: {value}} = props
    return <li>{value}</li>
}

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
    })
}
export default ListItem;
