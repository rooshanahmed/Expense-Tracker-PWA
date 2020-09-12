import React from 'react';
import { Box } from '@material-ui/core';
import wallet from '../Images/wallet.png';

const Header = () => {
    return (
        <>
            <Box>
                <div className="header">
                    <img src={wallet} alt="expense tracker" className="header-image" />
                </div>
            </Box>
        </>
    )
}
export default Header