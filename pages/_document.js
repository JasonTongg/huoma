import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <title>Meimei Token</title>
        {/* <link rel="icon" href="../app/favicon.ico" /> */}
        <link rel="icon" href="./Meme_headicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
          type="module"
        ></script>
      </body>
    </Html>
  );
}
