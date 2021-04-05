import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFonts } from 'next-google-fonts';




export default class MyDocument extends Document {
  render() {
    return (

      <Html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
      
    )
  }
}
