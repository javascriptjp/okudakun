import Head from "next/head"
import { AppProps } from "next/app"
import { useState } from "react"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "@/theme/createEmotionCache"
import { useTheme, themes } from "@/theme/useTheme"
import ColorModeContext from "@/contexts/colorModeContext"
const clientSideEmotionCache = createEmotionCache()
export interface OkudakunAppProps extends AppProps {
    emotionCache?: EmotionCache
}

const OkudakunApp = (props: OkudakunAppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    const [theme, setTheme] = useState<themes>("dark")
    const toggleTheme = {
        toggleColorMode: () => setTheme('dark'),
        getColorMode: () => theme,
        getColor: () => "#ffffff",
    }
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>okudakun</title>
            </Head>
            <ColorModeContext.Provider value={toggleTheme}>
                <ThemeProvider theme={useTheme(theme)}>
                    <CssBaseline />
                    <Component {...pageProps}/>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </CacheProvider>
    )
}

export default OkudakunApp