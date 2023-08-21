import React from "react";
import CheckIcon from '@mui/icons-material/Check';
import { Box } from "@mui/material";

const Checked = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={18}
            height={18}
            borderRadius="50%"
            bgcolor="rgb(242, 5, 159)" // Customize the background color as needed
        >
            <CheckIcon sx={{ color: "black", width: "80%", height: "80%" }} />
        </ Box>
    )
}

export default Checked;