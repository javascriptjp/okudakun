import Typography from "@mui/material/Typography"
import { Icon } from '@iconify/react'
import IconLink from "./iconLink"

const infoStyle = {
    position: "fixed",
    bottom: "0",
    right: "10px"
}

const CreaterLink = (props: {}) => {
    return <Typography sx={infoStyle}>
        This site is a fan-made work
        <IconLink url="https://github.com/javascriptjp" icon={<Icon icon="mdi:github" height="1.5em" />} />
    </Typography>
}

export default CreaterLink