import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import Error from "./_error";
import { Component } from 'react';

export default class About extends Component {

  // Setting 🇺🇸  state in a Class
  // state = {
  //   user: null
  // };

  // METHOD 1
  // // Using a LifeCycle Hook to collect external data
  // componentDidMount() {
  //   // Try hooks-UseEffectcs after it runs😜
  //   fetch('https://api.github.com/users/Elvis020').then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       });
  //     })
  // }


  // METHOD 2a
  // Using the NEXTJS WAY🌐
  // static getInitialProps() {
  //   fetch('https://api.github.com/users/Elvis020').then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //     })

  //   return { user: 'user' };
  // }

  // METHOD 2b
  // Using async await with NEXTJS WAY🌐
  static async getInitialProps() {
    const res = await fetch('https://api.github.com/users/Elvis020');
    const data = await res.json();
    const statusCode = res.status > 200 ? res.status : false;

    return { user: data, statusCode };

  }

  render() {
    const { user, statusCode } = this.props;

    // To check if user has github account using statusCode
    if (statusCode) {
      return <Error statusCode={statusCode} />
    }
    return (
      <Layout title="About💁">
        <h3>{user.name}</h3>
        <p>Javascript Programmer</p>
        <img src={user.avatar_url} alt="JS" height="200px" />
      </Layout>
    )
  }
}

