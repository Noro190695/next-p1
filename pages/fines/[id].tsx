import type { NextPage } from 'next'
import Head from 'next/head';
import Form from '../../src/components/form/Form';
import Layout from '../../src/components/layout/Layout';
import Result from '../../src/components/search/Result';
import Loading from '../../src/components/loading/Loading';
import NoResult from '../../src/components/search/NoResult';
import { useRouter } from 'next/router';
import { RootState } from '../../src/redux/store';
import { IState } from '../../src/redux/fine/fine.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { enableLoading, firstData, getDataAction } from '../../src/redux/fine/fine.action';
import axios from 'axios';
const Fines: NextPage = ({ res }:any) => {

    const router = useRouter();
    const dispatch = useDispatch();
    const [id, setId] = useState(router.query.id?.toString())
    const {data, loading, message} = useSelector<RootState, IState>((state) => state.fine);
  
    
    useEffect(() => {
      dispatch(firstData(res))
    }, []);

    return (
      <>
        <Head>
          <title>Searching</title>
        </Head>
        <Layout>
          <Form id={id}/>
          {
            loading?
            <Loading />
            :
            !!Object.keys(data).length?
            <Result />
            :
            <NoResult num={router.query.id?.toString() || ''}/>
          }
        </Layout>
      </>
    )
  }
Fines.getInitialProps =  async (ctx) => {
   
      let id = ctx.query.id ? ctx.query.id.toString() : '';
      try{
        const res = await axios.get(`https://test-task.shtrafovnet.com/fines/${id}`);
        return {res: res.data}
      }catch(e) {
        return {res: {}}
      }
      
      
      
     
    
    
  }

export default Fines;
