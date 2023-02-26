import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    //navigation
    let navigate = useNavigate();

    //state value
    const [value, setValue] = useState('')

    //mise a jour de la valeur de input
    const eventInput = (event) =>{
        setValue(event.target.value);
    }

    //fonction qui verifie si la valeur de l input est vide
    const isEmpty = () => {
        if (value ==='') {
            return true
        } else return false;
    }

    //fonction qui verifie si la valeur de l input est pas 0
    const isIncorrect = () =>{
        if (value ==='0') {
            return true;
        } else return false;
    }

    //fonction qui verifie si la valeur input saisi est ok
    const valueCheckPass = () =>{
        if (isEmpty() || isIncorrect()) {
            return false;
        } else return true;
    }

    //fonction qui accède a la page de post au clic
    const handleClick = () =>{
      if (valueCheckPass()) {
        navigate('/postnumber', {state:{value:value}});
      }else alert("Verifiez votre saisie");
    }
    
    //style pour bouton
    const btnStyle = {
        display: 'block', 
        width: 100, 
        padding: 5, 
        margin: 'auto', 
        marginTop: 20, 
        borderStyle: 'none', 
        backgroundColor: 'palevioletred', 
        borderRadius: 50
    }
    //
    return(   
        <div style={{textAlign: 'center', paddingTop: 100}}>
            <h1>Nombre de e dans chaque titre de post</h1>
            <p>Formulaire de saisie</p>
            <form>
                <label htmlFor="post">Nombre de post(s): </label>
                <input type="number" min="0" onChange={eventInput}/>
                <input style={btnStyle} type="submit" value="Calculer" onClick={handleClick} />
            </form>
        </div>
    );
}