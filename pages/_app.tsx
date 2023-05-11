
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
      </Head>
      <div className='absolute overflow-x-hidden overflow-y-hidden top-0 left-0 w-full z-0'>
        <div id='bg'></div>
        <canvas id="canvasWave"></canvas>
        <canvas id="canvasOverlay"></canvas>
        <Component {...pageProps} />
        <iframe title="discord_5second" className="disgetbot max-w-4xl px-7 py-10 mx-auto" src="https://discord.com/widget?id=838937935822585928&theme=dark/" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
      <footer>
        <script src="/lib/perlin.js"></script>
        <script type="module" defer src="/spotlight_and_wave.js"></script>
      </footer>
    </>
  );
}

export default MyApp;
