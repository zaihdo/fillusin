// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href='/favicon.ico' />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="FreeGazans is a centralized platform to find GoFundMe or other donation links of vetted individuals and families in Gaza. Help support the people of Gaza by donating or sharing their stories." />
          <meta name="keywords" content="Gaza, donations, GoFundMe, support Gaza, Gaza relief, Gaza families" />
          <meta name="author" content="FreeGazans" />
          <meta property="og:title" content="FreeGazans - Support Families in Gaza" />
          <meta property="og:description" content="FreeGazans is a centralized platform to find GoFundMe or other donation links of vetted individuals and families in Gaza. Help support the people of Gaza by donating or sharing their stories." />
          <meta property="og:image" content="/images/og-image.png" />
          <meta property="og:url" content="https://fillusin.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="FreeGazans - Support Families in Gaza" />
          <meta name="twitter:description" content="FreeGazans is a centralized platform to find GoFundMe or other donation links of vetted individuals and families in Gaza. Help support the people of Gaza by donating or sharing their stories." />
          <meta name="twitter:image" content="/images/twitter-image.png" />
          {/* Add other global meta tags, stylesheets, or scripts here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
