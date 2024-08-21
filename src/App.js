import './App.css';
import { useState,useEffect } from 'react';
import Filter from './Components/Filter';
import Nav from './Components/Nav';
import Cards from './Components/Cards';
import { Data2,apiUrl } from './Data';
import {toast} from 'react-toastify';
import Spinner from './Components/Spinner';

function App() {
  const[loader,updateLoader]=useState(true);
  const[data1,setData]=useState(null);
  const[catagory,setCatagory]=useState(Data2[0].title);
  const fetchData = async() =>{
    updateLoader(true);
    try{
    let res=await fetch(apiUrl);
    let res2=await res.json();
    console.log(res2);
    setData(res2.data);
    }catch(err){
      console.log(err);
      toast.error("Something went wrong");
    }
    updateLoader(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div>
      <div className='nav-parent'>
      <Nav></Nav>
      </div>
      <div>
      <Filter filterData={Data2} catagory={catagory} setCatagory={setCatagory}></Filter>
      </div>
      <div className='cards-parent'>
        {
          loader?(<Spinner></Spinner>):(<Cards cardsData={data1} catagory={catagory}></Cards>)
        }
      </div>
    </div>
  )
}

export default App;
