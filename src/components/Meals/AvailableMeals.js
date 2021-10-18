import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id:'m1',
        name:'Sushi',
        description:'Finest fish and  veggies',
        price:22.99,
    },
    {
        id:'m2',
        name:'Schnitzel',
        description:'A german specialty!',
        price:16.5,
    },
    {
        id:'m3',
        name:'Barbecue Burger',
        description:'American, raw, meaty',
        price:12.9,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((item) => (
        <MealItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price} />
    ));
    return (
        <Card className="uk-margin">
            <ul className="uk-list uk-list-divider">
                {mealsList}
            </ul>
        </Card>
    );
};
export default AvailableMeals;