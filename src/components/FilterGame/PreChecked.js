import React from "react";
import { Box } from "@mui/material";

const preChecked = () => {
    return (
        <Box
            sx={{ visibility: "hidden" }}
            className="potato-checkbox"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={18}
            height={18}
            borderRadius="50%"
            bgcolor="rgb(242, 5, 159)" // Customize the background color as needed
        >
            <Box
                sx={{ background: "rgb(27,27,27)" }}
                width={15}
                height={15}
                borderRadius="50%"
            ></Box>
        </ Box>
    )
}

export default preChecked;