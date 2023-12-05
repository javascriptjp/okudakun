import { NextPage } from 'next'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Icon } from '@iconify/react';
import { basePath } from "@/next.config"
import BackgroundPlayer from '@/components/backgroundPlayer'
import IconLink from '@/components/iconLink'
const BASE_PATH = basePath ? basePath : ""
const infoStyle = {
    position: "fixed",
    bottom: "0",
    right: "10px"
}
const Index: NextPage = () => {
    return <>
        <BackgroundPlayer videoId='ttGR2B3cZaY' />
        <Box sx={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center" }} >
            <Box sx={{
                margin: "auto",
                display: "block"
            }}>
                <Image
                    src={`${BASE_PATH}/cover.png`}
                    width={250}
                    height={250}
                    alt="okudakun"
                />
                <Typography variant="h4" component="h4" sx={{ textAlign: "center" }}>
                    Okudakun
                </Typography>
                <Box>
                    <IconLink url="https://twitter.com/okudakun1" icon={<Icon icon="simple-icons:x" height="1.5em" />} />
                    <IconLink url="https://www.youtube.com/@okudakun" icon={<Icon icon="simple-icons:youtubemusic" height="1.5em" />} />
                    <IconLink url="https://music.apple.com/jp/artist/okudakun/1561899508" icon={<Icon icon="simple-icons:applemusic" height="1.5em" />} />
                    <IconLink url="https://soundcloud.com/okudakun" icon={<Icon icon="mdi:soundcloud" height="1.5em" />} />
                    <IconLink url="https://open.spotify.com/intl-ja/artist/68PyDKhJdbocAHfwTKb3t6" icon={<Icon icon="mdi:spotify" height="1.5em" />} />
                </Box>
            </Box>
        </Box>
        <Typography sx={infoStyle}>
            This site is a fan-made work
            <IconLink url="https://github.com/javascriptjp" icon={<Icon icon="mdi:github" height="1.5em" />} />
        </Typography>
    </>
}

export default Index