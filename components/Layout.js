import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';


// This activates NProgress on Route change/ or when you visit the url 😜😻 
Router.onRouteChangeStart = url => {
  console.log(url);
  NProgress.start();
}


// This activates NProgress when its done loading  😜😻
Router.onRouteChangeComplete = () => NProgress.done();

// This activates NProgress when it gets an error when loading  😜😻
Router.onRouteChangeError= () => NProgress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Next_Portfolio</title>
    </Head>
    <header>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/hireme"><a>Hire Me</a></Link>
      <Link href="/blog"><a>Blog</a></Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()} 🐬</footer>

    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }

      header a {
        color: darkgrey;
        text-decoration: none;
      }
      header a:hover {
        font-weight: bold
        color: lightgrey;
      }
      footer {
        padding: 1em;
      }
    `}
    </style>
    <style global jsx> {`
      body {
        font-family: 'Nunito', 'sans-serif';
        margin:0;
        font-size: 110%;
        background: #f0f0f0;
      }
      a{
        text-decoration: none;
      }
    `}
    </style>
  
  </div>
);

