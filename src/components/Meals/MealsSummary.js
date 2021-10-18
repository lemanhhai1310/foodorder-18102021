import Card from "../UI/Card";

const MealsSummary = (props) => {
    return (
        <Card className="uk-text-center uk-margin">
            <h1 className="uk-article-title"><a className="uk-link-reset" href="">Heading</a></h1>

            <p className="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a
                href="#">Blog</a></p>

            <p className="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        </Card>
    );
};
export default MealsSummary;