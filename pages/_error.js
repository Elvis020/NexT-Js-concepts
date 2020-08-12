import Layout from '../components/Layout';


export default ({ statusCode }) => (
  <Layout title="Error!!">
    {statusCode ? `Could not load your user data: Status Code ${statusCode}` : `Sorry 😿,Couldn't get the page you were looking for. `}
    {/*<p>Sorry 😿,Couldn't get the page you were looking for.</p> */}
  </Layout>
);
