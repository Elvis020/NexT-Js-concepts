import Layout from '../components/Layout';
import { withRouter } from "next/router";



const Post = ({router}) => (
  <Layout title={router.query.title}>
    <p>🗃Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel molestiae distinctio doloribus in laboriosam alias facere adipisci tempora nam?🗃
    </p>
  </Layout> 
 )

export default withRouter(Post);
