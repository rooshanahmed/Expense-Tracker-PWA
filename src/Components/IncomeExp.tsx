import React, { useContext } from "react";
import CountUp from "react-countup";
import { Box, Paper } from "@material-ui/core";
import { Tracker } from "../Context/trackerState";
import { ITrans } from "../Types/Interface";

const IncomeExp = () => {
  const { state } = useContext(Tracker);

  const amounts: Array<number> = state.transactions.map(
    (transaction: ITrans) => transaction.amount
  );
  const income = +amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = +(
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <>
      <Box m={2} mt={1}>
        <div className="inc-exp-container">
          <Paper className="incBox">
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              <CountUp start={0} end={income} duration={3.00} separator="," decimals={2} decimal="." prefix="$" />
            </p>
          </Paper>
        </div>
      </Box>
    </>
  )
};
