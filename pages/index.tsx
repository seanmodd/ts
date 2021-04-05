import { Heading } from '@chakra-ui/layout'
import type { TypeA } from '../types'
import { GoogleFonts } from 'next-google-fonts';

const font = `Inter`
const url = `https://fonts.googleapis.com/css2?family=${font}:ital,wght@0,200;0,300;0,400&display=swap`




const Example: TypeA = {
  name: 'next',
}

export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>
        <GoogleFonts href={url} />
        <Heading fontFamily={font} >Here</Heading>
        <p style={{ fontFamily: { font } }}>{Example.name}</p>
        <p>{Example.name}</p>
        <p style={{ fontFamily: { font } }}>wow</p>
        <p>wow</p>
      </h1>
    </div>
  )
}
