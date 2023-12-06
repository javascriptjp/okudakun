import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            ::-webkit-scrollbar{
                width: 5px;
            },
            ::-webkit-scrollbar-thumb {
                background-color: #ffffff;
                border-radius: 5px;
            }
            `
        },
    },
};

export default lightThemeOptions;