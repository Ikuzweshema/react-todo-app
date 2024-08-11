
import { Box, LinearProgress } from "@mui/material";
export default function Loading() {
    return <div className="d-flex justify-content-center w-100  mt-5 ">
        <Box marginTop={10}>
            <img src="/icon.png" alt="logo" width={300} height={170} />
            <LinearProgress color="primary" />
        </Box>
    </div> 
}