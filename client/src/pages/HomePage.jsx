import { useState } from "react"
import { HeroSection } from "../components/HeroSection";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"
import heroImg from "../assets/heroImg.png";
import { FaArrowRight, FaHandPointer } from "react-icons/fa";

export function HomePage(){
    const [articles, useArticles] = useState([
        { 
            id:1,
            title:"Comment j'ai appris à coder tout seul ?",
            category:"Developpement",
            content:"Contexte 1", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        },
        { 
            id:2, 
            title:"Pourquoi l'IA est une opportunité ?", 
            category:"IA",
            content:"Contexte 2", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        },
        { 
            id:3, 
            title:"Qui suis-je ?", 
            category:"Personnel",
            content:"Je suis Dev web autodidacte", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        },
        { 
            id:4,
            title:"Comment j'ai appris à coder tout seul ?",
            category:"Developpement",
            content:"Contexte 1", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        },
        { 
            id:5, 
            title:"Pourquoi l'IA est une opportunité ?", 
            category:"IA",
            content:"Contexte 2", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        },
        { 
            id:6, 
            title:"Qui suis-je ?", 
            category:"Personnel",
            content:"Je suis Dev web autodidacte", 
            admin:"@Angy", 
            img:heroImg,
            date:"09 Sept 2026"
        }
    ]);
    return(
        <div className="article-container">
            <HeroSection />
            
            
            <div className="articles">
                {articles.map(el =>(
                    <div className="content" key={el.id}>
                        <div className="content-img">
                            <img src={el.img} alt="" />
                        </div>
                        <div className="contenu">
                            {/* category */}
                            <p className="category">
                                <FaHandPointer  className="FaHandPointer" />
                                {el.category}
                            </p>

                            {/* titre */}
                            <h2 className="content-title">{el.title}</h2>
                            {/* contenu minimal */}
                            <p className="content-text">{el.content}</p>

                        </div>

                        {/* Les meta données */}
                        <div className="meta-data-contener" >
                            <p className="admin">
                                <img src={el.img} alt="Admin image" />
                                {el.admin}
                            </p>

                            <span  className="meta-data">

                                <p  className="date">
                                        {el.date}
                                    </p>
                                <Link to={`/articles/${el.id}`} className="article-link" >
                                    voir plus
                                    <FaArrowRight size={12} className="FaArrowRight" />
                                </Link>
                            </span>
                            
                            
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    )
}