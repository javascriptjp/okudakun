import { NextPage } from 'next'
import { Box } from '@mui/system'
import BackgroundPlayer from '@/components/backgroundPlayer'
import CreaterLink from '@/components/createrLink'
import Card from '@/components/card'
const Index: NextPage = () => {
    return <>
        <BackgroundPlayer videoId='ttGR2B3cZaY' />
        <Box sx={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center" }} >
            <Card />
        </Box>
        <CreaterLink />
    </>
}

export default Index