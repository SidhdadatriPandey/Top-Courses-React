import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) =>{
    
    let cardsData=props.cardsData;
    const [likedCards,setLikedCards]=useState([]);
    let catagory=props.catagory;

    function getData(){
        let allCardsData=[];
        console.log(cardsData);
        if(props.catagory==='All'){
            Object.values(cardsData).forEach( fieldData => {
                fieldData.forEach((data)=>{
                    allCardsData.push(data);
                })
            })
            // console.log(allCardsData);
            return allCardsData;
        }else{
            return cardsData[catagory];
        }
        
    }
    return(
        <div className="cards">
            { getData().map((cardData)=>{
                return <Card info={cardData} key={cardData.id} likedCards={likedCards} setLikedCards={setLikedCards}></Card>
            }) }
        </div>
    )
}

export default Cards;