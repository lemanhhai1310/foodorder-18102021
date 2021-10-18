import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.scss";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `${props.price.toFixed(2)}`;
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    };
    return <li>
        <div className="uk-grid">
            <div className="uk-width-expand">
                <h3 className={`uk-h3 uk-margin-remove ${classes.title}`}>{props.name}</h3>
                <div className={`${classes.desc}`}>{props.description}</div>
                <div className={`${classes.price}`}>${price}</div>
            </div>
            <div className="uk-width-auto">
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </div>
    </li>
};
export default MealItem;