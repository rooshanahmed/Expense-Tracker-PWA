import React from 'react';
import CountUp from 'react-countup';
import { ITrans } from '../Types/Interface';
import { Typography, Box } from '@material-ui/core';
import { Tracker } from '../Context/trackerState';
import { useContext } from 'react';


const Balance = () => {
    const {state} = useContext(Tracker);

    const amounts = state.transactions.map((transaction:ITrans) => transaction.amount);
    const total = +amounts.reduce((acc:number,item:number) => (acc += item),0).toFixed(2);
    
    return (
        <>
            <Box p={0} m={1}>
                <div className="balanceBox">
                    <Typography variant="h6" className="font">
                        Balance
                    </Typography>
                    <Typography variant="h3" className="font">
                        <CountUp start={0} end={total} duration={3.00} separator="," decimals={2} decimal="." prefix="$" />
                    </Typography>
                </div>
            </Box>
        </>
    )
}
export default Balance