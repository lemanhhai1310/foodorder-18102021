import classes from "./Cart.module.scss";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {

    };
    const cartItemAddHandler = (item) => {

    };
    const cartItem = (
        <ul className="uk-list uk-list-divider">
            {cartCtx.items.map((item) => (
                <CartItem
                    onRemove={cartItemRemoveHandler.bind(null,item.id)}
                    onAdd={cartItemAddHandler.bind(null,item)}
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price} />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
            {hasItem && cartItem}
            <div className="uk-margin uk-grid uk-child-width-auto uk-flex-between uk-flex-middle">
                <div><h4>Total</h4></div>
                <div><span>{totalAmount}</span></div>
            </div>
            <div className="uk-margin-top uk-text-right">
                <button onClick={props.onClose} className="uk-button uk-button-default uk-button-small uk-border-pill">Close</button>
                {hasItem && <button className="uk-button uk-button-secondary uk-button-small uk-border-pill uk-margin-small-left">Order</button>}
            </div>
        </Modal>
    );
};
export default Cart;