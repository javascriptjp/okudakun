const BackgroundPlayer = (props: { videoId: string }) => {
    return <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1&playlist=${props.videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        style={{
            position: "fixed",
            zIndex: "-2",
            width: "100vw",
            height: "100vh",
            filter: "brightness(50%) blur(3px)"
        }}
    />
}

export default BackgroundPlayer