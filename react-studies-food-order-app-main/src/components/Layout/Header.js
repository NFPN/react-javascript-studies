import { Fragment } from "react";

import mealsImg from "./../../assets/meals.jpg";
import classes from './Header.module.css';
import HeaderCardButton from "./HeaderCardButton";


const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCardButton></HeaderCardButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt="A table full of delicious food!"/>
      </div>
    </Fragment>
  );
};

export default Header;
