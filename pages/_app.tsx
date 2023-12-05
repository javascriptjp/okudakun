import Head from "next/head"
import { AppProps as _AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import createEmotionCache from "@/theme/createEmotionCache"
import { useTheme } from "@/theme/useTheme"
const clientSideEmotionCache = createEmotionCache()
export interface AppProps extends _AppProps {
    emotionCache?: EmotionCache
}

const App = (props: AppProps) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <title>okudakun</title>
            </Head>
            <ThemeProvider theme={useTheme('dark')}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default App