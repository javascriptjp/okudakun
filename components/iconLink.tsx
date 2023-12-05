import Link from 'next/link'
import IconButton from '@mui/material/IconButton'

const buttonStyle = {
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        transform: "scale3d(1.1, 1.1, 1)"
    },
}

const IconLink = (props: { url: string, icon: React.ReactNode }) => {
    return <Link href={props.url}>
        <IconButton sx={buttonStyle}>{props.icon}</IconButton>
    </Link>
}

export default IconLink