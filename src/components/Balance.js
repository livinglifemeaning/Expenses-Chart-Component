import Card from "./UI/Card";
import logo from "../assets/logo.svg";
import classes from "../Css/Balance.module.css";
const Balance = () => {
  return (
    <Card bgColor="hsl(10, 79%, 65%)">
      <div className={classes.balance}>
        <div className={classes.text}>
          <span>My balance</span>
          <span className={classes.price}>$921.48</span>
        </div>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </Card>
  );
};

export default Balance;
