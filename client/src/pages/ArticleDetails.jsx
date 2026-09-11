import { useState } from 'react';
import { useParams } from 'react-router-dom';
import heroImg from '../assets/heroImg.png';
import '../styles/ArticleDetails.css'
import { Link } from 'react-router-dom';

function ArticleDetails() {
    const [articles, setArticles] = useState([
        { 
            id: 1,
            title: "Comment j'ai appris à coder tout seul ?",
            category: "Developpement",
            content: "Contexte 1", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        },
        { 
            id: 2, 
            title: "Pourquoi l'IA est une opportunité ?", 
            category: "IA",
            content: "Les objets en JavaScript 📦 sont des structures de données fondamentales qui permettent de regrouper des informations associées sous forme de paires clé-valeur. Nous allons explorer ce concept ensemble en progressant pas à pas à l'aide de questions guidées. Un objet 🧠 sert à modéliser des éléments concrets ou abstraits en combinant des variables (propriétés) et des actions (méthodes).", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        },
        { 
            id: 3, 
            title: "Qui suis-je ?", 
            category: "Personnel",
            content: "Je suis Dev web autodidacte", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        },
        { 
            id: 4,
            title: "Comment j'ai appris à coder tout seul ?",
            category: "Developpement",
            content: "Contexte 1", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        },
        { 
            id: 5, 
            title: "Pourquoi l'IA est une opportunité ?", 
            category: "IA",
            content: "Contexte 2", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        },
        { 
            id: 6, 
            title: "Qui suis-je ?", 
            category: "Personnel",
            content: "Je suis Dev web autodidacte", 
            admin: "@Angy", 
            img: heroImg,
            date: "09 Sept 2026"
        }
    ]);

    // 1. Récupération de l'id depuis l'URL
    const { id } = useParams();

    // 2. Recherche de l'article unique (conversion de l'id en nombre avec Number)
    const article = articles.find(item => item.id === Number(id));

    // 3. Sécurité : si l'ID ne correspond à aucun article
    if (!article) {
        return <h2>Article introuvable ❌</h2>;
    }

    return (
        
            
            <div className="article-detail">
                <div className="image-grid">
                    <img src={article.img} alt="" width={520} height={400} />
                </div>
                <h1>{article.title}</h1>
                <p>
                   {article.content}
                </p>
                <div>Partager par {article.admin} le {article.date}</div>

                <Link to="/">Retour</Link>
            </div>
    );
}

export default ArticleDetails;


