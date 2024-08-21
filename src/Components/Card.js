import React from "react";
import {toast} from 'react-toastify'

import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
function Card(props){
    let cardData=props.info;
    let likedCards=props.likedCards;
    let setLikedCards=props.setLikedCards;

    function clickHandler(){
        if(likedCards.includes(cardData.id)){
            setLikedCards((prev)=>{
                return prev.filter((cid)=>{
                    return cid!==cardData.id;
                })
            })
            toast.warning("Like is removed");
        }else{
            if(likedCards.length===0){
                setLikedCards([cardData.id]);
            }else{
                setLikedCards([...likedCards,cardData.id]);
            }
            toast.success("Like is added");
        }
    }
    return(
        <div className="card">
            <div className="card-child">
            <img className="card-image" alt="img" src={cardData.image.url}></img>
            <button className="likebtn" onClick={clickHandler}>
            
            {
                likedCards.includes(cardData.id)?<FcLike className="like-btn"></FcLike>:<FcLikePlaceholder className="like-btn"></FcLikePlaceholder> }
            </button>
            </div>       
            <div className="content">
                <p className="title">{cardData.title}</p>
                <p>{
                    cardData.description.length>100?cardData.description.substring(0,200)+"....":cardData.description
                }</p>
            </div> 
        </div>
    )
}

export default Card;
