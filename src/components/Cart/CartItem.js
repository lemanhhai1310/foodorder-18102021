const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li>
            <h2>{props.name}</h2>
            <div className="uk-grid">
                <div className="uk-width-auto">
                    <span>{price}</span>
                </div>
                <div className="uk-width-expand">
                    <span>x {props.amount}</span>
                </div>
                <div className="uk-width-auto">
                    <button onClick={props.onRemove}>-</button>
                    <button onClick={props.onAdd}>+</button>
                </div>
            </div>
        </li>
    );
};
export default CartItem;