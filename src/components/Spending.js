import React from "react";
import { useState, useEffect} from "react";

import Card from "./UI/Card";
import ExpensesChart from "./ExpensesChart";

import ExpenseData from '../data.json'; 
import classes from "../Css/Spending.module.css";

const Spending = () => {
  const [totalExpense, setTotalExpense] = useState();

  const totalExpenses = (data) => {
    let totalExpenses = [];
    for (let i = 0; i < data.length; i++) {
      totalExpenses.push(data[i].amount);
    }
    let totalExpense = totalExpenses.reduce((a, b) => {
      return a + b;
    }, 0);
    return totalExpense;
  };

  useEffect(() => {
    setTotalExpense(totalExpenses(ExpenseData))
  }, []);

  return (
    <Card bgColor="hsl(33, 100%, 98%)">
      <h1 className={classes.title}>Spending - Last 7 days</h1>
      <ExpensesChart expenses={ExpenseData} />
      <div className={classes.break} />
      <div className={classes.monthSummary}>
        <div>
          <span>Total this month</span>
          <span className={classes.total}>${totalExpense}</span>
        </div>
        <div className={classes.rtl}>
          <span className={classes.percentage}>+2.4%</span>
          <span>from last month</span>
        </div>
      </div>
    </Card>
  );
};

export default Spending;
