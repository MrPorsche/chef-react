import React from "react";
import List from "./sub-comp/List.jsx";
import Recipe from "./sub-comp/Recipe.jsx";

export default function Form() {
    const [listItems, setListItems] = React.useState([]);
    const [showRecipe, setShowRecipe] = React.useState(false);

    const listElement = listItems.map((item) => {
        return <li key={item}>{item}</li>
    })

    function addItems(formData) {
        const newItem = formData.get("ingredient");
        setListItems(listItem => [...listItem, newItem]);
    }

    function getRecipe() {
        setShowRecipe(prevState => !prevState);
    }

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
            {listElement.length ? <List element={listElement} getRecipe={getRecipe}/> : <section>
                <img src="/cook.gif" alt="cooking_image" />
            </section>}
            {/* {showRecipe && <h1>Getting recipe!</h1>} */}
            {showRecipe && <Recipe />}
        </main>
    );
}