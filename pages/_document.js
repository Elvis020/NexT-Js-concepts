// This document gives us direct access to the body element in the HTML🏋 

import Document, { Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="UTF-8" />
          <meta name="description" content="A site for my programming portfolio" />
         {/* // Makes 🎭 the google and meta-search engines not index the website */}
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        </Head>

        <body>
          <Main />
          <NextScript/>
        </body>
        <style jsx> {`
          body {
            font-family: 'Nunito', 'sans-serif';
          }
        `}
        </style>
      </html>
    )
  }
}