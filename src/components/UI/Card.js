const Card = (props) => {
    const classes = 'uk-card uk-card-default uk-card-body ' + props.className;
    return <div className={classes}>{props.children}</div>
};
export default Card;