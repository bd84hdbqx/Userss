import React from 'react'
import "./profil.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare} from "@fortawesome/free-solid-svg-icons"
import RecipeReviewCard from '../../Components/card'
import { useNavigate } from 'react-router-dom'
type Props = {}

function Profil({}: Props) {
    const navigate=useNavigate()
  return (
    <div className='title1'>
        <div className="title">
            <div className='instagram' onClick={()=>{
                navigate("/")
            }}>
            Instagram
        </div>
        <div className='profil'>Profil</div>
        </div>
        <div className='container'>
            <div style={{display:"flex", justifyContent:"space-around",width: "100%",flexWrap:"wrap"}}>
            <div className='image'>
                <img  style={{width:"200px",height:"200px",borderRadius:'50%',objectFit:'cover'}} src="https://i.guim.co.uk/img/media/792c2ad2f6aae3b312307c52b329f0df16fd248d/869_318_4647_2788/master/4647.jpg?width=465&dpr=1&s=none" alt="" />
</div>
<div className='detail'>
    <div className='detail1'><h3>Sevinc</h3>
    <button className='btn1'>Edit Profile</button></div>
    <div className='detail2'>
        <p>19 posts</p>
        <p>33 followers</p>
        <p>80 following</p>
    </div>
</div>
            </div>
            <div style={{width:"100%",textAlign:"center",marginTop:"20px"}}><h4>POSTS</h4></div>
            <div className='posts'>
           <RecipeReviewCard/>
           <RecipeReviewCard/>
           <RecipeReviewCard/>
           <RecipeReviewCard/>

            </div>
        </div>

    </div>
  )
}

export default Profil