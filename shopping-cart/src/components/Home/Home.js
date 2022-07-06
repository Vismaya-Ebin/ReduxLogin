import React from 'react';
import './Home.css';
import {useGetAllProductQuery} from '../Redux/productApi';

export default function Home() {
  console.log('Home');
  const {data,error} = useGetAllProductQuery();
  console.log("QWERTY",data);
  return (
    <div className="home">Home</div>
  )
}
