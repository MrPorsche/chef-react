import React, { useEffect, useRef, useState } from "react";
import List from "./sub-comp/List.jsx";
import Recipe from "./sub-comp/Recipe.jsx";
import { getRecipeFromMistral } from "../ai.js";

export default function Form() {
    const [listItems, setListItems] = useState([]);
    const [showRecipe, setShowRecipe] = useState("");
    const recipeSection = useRef(null);

    const listElement = listItems.map((item) => {
        return <li key={item}>{item}</li>
    })

    function addItems(formData) {
        const newItem = formData.get("ingredient");
        setListItems(listItem => [...listItem, newItem]);
    }

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(listItems);
        setShowRecipe(generatedRecipe);
    }

    useEffect(() => {
        if (showRecipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({ behavior: "smooth"});
        }
    }, [showRecipe]);

    return (
        <main>
            <form action={addItems}>
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                />
                <button className="add">Add ingredient</button>
            </form>
            {listElement.length ? <List element={listElement} getRecipe={getRecipe} ref={recipeSection}/> : <section>
                <img src="/cook.gif" alt="cooking_image" />
            </section>}
            {/* {showRecipe && <h1>Getting recipe!</h1>} */}
            {showRecipe && <Recipe showRecipe={showRecipe}/>}
        </main>
    );
}