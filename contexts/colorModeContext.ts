import { createContext } from "react";

const ColorModeContext = createContext({
    toggleColorMode: (): void => { },
    getColorMode: (): string => {
        return "";
    },
    getColor: (): string => {
        return "";
    },
});
export default ColorModeContext;