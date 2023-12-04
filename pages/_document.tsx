import Document, { Html, Head, Main, NextScript, DocumentProps, DocumentContext } from "next/document"
import { AppType } from "next/app"
import { OkudakunAppProps } from "./_app"
import createEmotionCache from "@/theme/createEmotionCache"
import createEmotionServer from "@emotion/server/create-instance"

interface OkudakunDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[]
}

const OkudakunDocument = ({ emotionStyleTags }: OkudakunDocumentProps) => {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="emotion-insertion-point" content="" />
                {emotionStyleTags}
            </Head>
            <body style={{userSelect: "none"}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

OkudakunDocument.getInitialProps = async (ctx: DocumentContext) => {
    const originalRenderPage = ctx.renderPage
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)
    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: React.ComponentType<React.ComponentProps<AppType> & OkudakunAppProps>
            ) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />
                },
        })
    const initialProps = await Document.getInitialProps(ctx)
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

export default OkudakunDocument