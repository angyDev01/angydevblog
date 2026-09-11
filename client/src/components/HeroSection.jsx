import { useState } from "react";
import { FaBars, FaArrowRight, FaHandPaper,  FaHome } from 'react-icons/fa';
import profilPic from "../assets/profilPic.png";
import HeroImage from "../assets/HeroImage.png";
import "../styles/HeroSection.css";


export function HeroSection(){
    const [slogan, setSlogan] = useState([
        {   
            id:0,
            blackSlogan:" When u're a dream, ",
            blueSlogan:"make it real !"}
    ])
    return(
        <div className="hero">
            <div className="know-more">
                <span className="title">
                    <FaHandPaper className="FaHandPaper" />
                    Bienvenue sur mon blog
                    </span>
                {slogan.map(el =>(
                    <h4 key={el.id}>
                        {el.blackSlogan}<br/><span className="blue-sl">{el.blueSlogan}</span>
                    </h4>
                ))}
                <span className="citation">
                    "La créativité, c'est l'intelligence qui s'amuse."<br/>
                    <i>- Albert Einstein</i>
                </span>
                <p className="objectifText">
                    Je partage ici mes apprentissages, mes expériences et mes projets
                    autour du developpement web, de la technologie et de l'univers Digital.
                </p>
                <a href="/" className="articleLink">
                    <FaBars size={10} className="FaBars"/>
                    Voir les articles
                    <FaArrowRight size={10} className="FaArrowRight"/>
                </a>
            </div>
            <div className="profil-pic">
                <img src={HeroImage} alt="" />
            </div>
        </div>
    )
}