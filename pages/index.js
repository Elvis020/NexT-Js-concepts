// With nextjs we can do hot-code reloading 😻 
import Link from 'next/link';
import Layout from '../components/Layout';



export default () => (
  <Layout title="Home💁">
    <Link href="/about"><a> Go to About</a></Link>
    <br/>
    <p>Welcome to the home page 😻</p>
  </Layout>
);


