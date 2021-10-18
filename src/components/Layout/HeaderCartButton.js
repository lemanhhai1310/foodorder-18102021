import {useContext} from "react";
import classes from "./Header.module.scss";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button onClick={props.onClick} className={`uk-border-pill uk-button uk-button-secondary ${classes.cartBtn}`}><span uk-icon="icon: cart; ratio: 1"></span> Your Cart <span className="uk-badge">{numberOfCartItems}</span></button>
};
export default HeaderCartButton;