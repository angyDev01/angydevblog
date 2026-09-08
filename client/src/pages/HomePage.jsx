import { useState } from "react"
import { Hero } from "../components/Hero";

export function HomePage(){
    const [articles, useArticles] = useState([
        { id:1, title:"Comment j'ai appris à coder tout seul ?", content:"Contexte 1"},
        { id:2, title:"Pourquoi l'IA est une opportunité ?", content:"Contexte 2"},
        { id:3, title:"Qui suis-je ?", content:"Je suis Dev web autodidacte"}
    ]);
    return(
        <>
            <Hero />
           {/*  {articles.map( el =>(
                <article key={el.id}>
                    <h3>{el.title}</h3>
                    <p>{el.content}</p>
                </article>
            ))} */}
        </>
    )
}