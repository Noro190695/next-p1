import type { NextPage } from 'next'
import Head from 'next/head';
import Form from '../src/components/form/Form';
import Layout from '../src/components/layout/Layout';
import Result from '../src/components/search/Result';
import Loading from '../src/components/loading/Loading';
import NoResult from '../src/components/search/NoResult';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Test</title>
      </Head>
      <Layout>
        <Form />
        {/* <Result/> */}
      </Layout>
    </>
  )
}

Home.getInitialProps = {
  
}

export default Home;


