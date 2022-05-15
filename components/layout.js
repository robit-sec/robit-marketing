import '../styles/index.css';
import Header from './header.js';
import Footer from './footer.js';
import Head from 'next/head'

const Layout = props => (
    <div>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-157104258-1"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-157104258-1');`
        }} />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <title>Robit Development</title>
      </Head>
      <div className="w-full antialiased bg-gray-200">

        <Header />

        {props.children}

        <Footer />
      </div>
    </div>
);

export default Layout;
