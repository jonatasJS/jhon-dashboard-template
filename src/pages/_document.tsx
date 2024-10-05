import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
      <meta name="google-adsense-account" content="ca-pub-5593915309329672" />
					<script
						async
						src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5593915309329672`}
						crossOrigin='anonymous'
					/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
