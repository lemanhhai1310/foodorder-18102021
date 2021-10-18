import {Fragment} from "react";
import classes from "./Header.module.scss";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return <Fragment>
        <div className={classes.header} uk-sticky="">
            <div className="uk-container uk-padding-remove">
                <nav className="uk-navbar-container uk-navbar-transparent uk-navbar" uk-navbar="">
                    <div className="uk-navbar-left">
                        <a href="" className={`uk-navbar-item uk-logo ${classes.logo}`}>ReactMeals</a>
                    </div>
                    <div className="uk-navbar-right">
                        <div className="uk-navbar-item">
                            <HeaderCartButton onClick={props.onShowCart} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </Fragment>
};
export default Header;