import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system'
import { Icon } from '@iconify/react';
import { basePath } from "@/next.config"
const BASE_PATH = basePath ? basePath : ""
const Okudakun: NextPage = () => {
    return <Box>
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/ttGR2B3cZaY?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&disablekb=1&playlist=ttGR2B3cZaY`}
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

        <Typography sx={{
            position: "fixed",
            bottom: "0",
            right: "10px"
        }}>
            This site is a fan-made work
            <Link href="https://github.com/javascriptjp"><IconButton> <Icon icon="mdi:github" height="1.5em" /></IconButton></Link>
        </Typography>
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
                    <Link href="https://twitter.com/okudakun1"><IconButton><Icon icon="simple-icons:x" height="1.5em" /></IconButton></Link>
                    <Link href="https://www.youtube.com/@okudakun"><IconButton><Icon icon="simple-icons:youtubemusic" height="1.5em" /></IconButton></Link>
                    <Link href="https://music.apple.com/jp/artist/okudakun/1561899508"><IconButton><Icon icon="simple-icons:applemusic" height="1.5em" /></IconButton></Link>
                    <Link href="https://soundcloud.com/okudakun"><IconButton><Icon icon="mdi:soundcloud" height="1.5em" /></IconButton></Link>
                    <Link href="https://open.spotify.com/intl-ja/artist/68PyDKhJdbocAHfwTKb3t6"><IconButton><Icon icon="mdi:spotify" height="1.5em" /></IconButton></Link>
                </Box>
            </Box>
        </Box>
    </Box>
}

export default Okudakun