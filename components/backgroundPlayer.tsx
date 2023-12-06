const BackgroundPlayer = (props: { videoId: string }) => {
    return <iframe
        width="1920"
        height="1080"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1&playlist=${props.videoId}`}
        allowFullScreen
        title="Embedded youtube"
        style={{
            position: "fixed",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "-2",
            filter: "brightness(50%)",
            border: "none",
            objectFit: "cover",
            objectPosition: "center"
        }}
    />
}

export default BackgroundPlayer