import dark from "./themes/dark";
import { Theme, createTheme } from "@mui/material/styles";

export type themes = "dark"

export const useTheme = (theme: themes): Theme => {
    return createTheme(dark)
};