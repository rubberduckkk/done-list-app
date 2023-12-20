import Item from './Item.jsx'
function List ({ data }) {
    return (
        <ul>
            {data.map(item => {
                return (
                    <Item key={item.key} title={item.title} />
                );
            })}
        </ul>
    );
}

export default List;