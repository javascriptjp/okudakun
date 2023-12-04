import Link from 'next/link'
import IconButton from '@mui/material/IconButton'
const IconLink = (props: { url: string, icon: React.ReactNode }) => <Link href={props.url}><IconButton>{props.icon}</IconButton></Link>

export default IconLink