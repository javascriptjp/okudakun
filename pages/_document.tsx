import _Document, { Html, Head, Main, NextScript, DocumentProps as _DocumentProps, DocumentContext } from "next/document"
import { AppType } from "next/app"
import { AppProps } from "./_app"
import createEmotionCache from "@/theme/createEmotionCache"
import createEmotionServer from "@emotion/server/create-instance"

interface DocumentProps extends _DocumentProps {
    emotionStyleTags: JSX.Element[]
}

const Document = ({ emotionStyleTags }: DocumentProps) => {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="emotion-insertion-point" content="" />
                {emotionStyleTags}
            </Head>
            <body style={{ userSelect: "none" }}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

Document.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: React.ComponentType<React.ComponentProps<AppType> & AppProps>
            ) => (props) => <App emotionCache={cache} {...props} />,
        })
    const initialProps = await _Document.getInitialProps(ctx)
    const emotionStyles = extractCriticalToChunks(initialProps.html)
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(" ")}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ))
    return {
        ...initialProps,
        emotionStyleTags,
    }
}

export default Document