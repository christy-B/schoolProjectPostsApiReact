import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

export default function PostNumber() {
    //recuperer la variable input
    const location = useLocation();

    //posts
    const[posts, setPosts] = useState([]);

    //appel api, recuperation de donnée et mise a jours de posts
    useEffect(()=> {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            
        };
        fetchPosts();
    }, []);

    //nombre de post 
    const nbreTotalPost = posts.reduce((acc, post) => post.id <= location.state.value? acc + 1 : acc, 0);

    //fonction qui calcul le nombre de e dans un titre
    const eNumberCalcul = (titre) =>{
        const e = titre.split("").reduce((acc, el) => el==='e' ? acc + 1 : acc, 0);
        return e;
    }

    //fonction qui calcul le nombre total de e par rapport au nombre de post
    const eTotalCalcul = () => {
        const str = posts.map(post => post.id <= location.state.value?  post.title : "").join("");
        const eTotal = str.split("").reduce((acc, el) => el==='e' ? acc + 1 : acc, 0);
        return eTotal;
    }
    //
    const eTotal = eTotalCalcul();

    //
    return (
        <div>
            <h1>Nombre de post(s) : {nbreTotalPost}</h1>
            <hr></hr>
            {
                posts.map((post)=>post.id <= location.state.value?(
                    <div key={post.id}>
                        <p><strong>Titre{post.id}:</strong> {post.title}</p>
                        <p>Nombre de e: {eNumberCalcul(post.title)}</p>
                        <p>Moyenne de e: {Math.round((eNumberCalcul(post.title)/eTotal) * 100 ) / 100 }</p>
                        <hr style={{opacity: 0.3}}></hr>
                    </div>
                ): "")
            }
        </div>
    )
}