import React from "react";

export default function Form() {
    const [listItems, setListItems] = React.useState([]);

    const listElement = listItems.map((item) => {
        return <li key={item}>{item}</li>
    })

    function addItems(formData) {
        const newItem = formData.get("ingredient");
        setListItems(listItem => [...listItem, newItem]);
    }

    // function handleRemove() {
    //     setListItems([])
    // }

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
                {/* <div className="btns">
                    <button className="add" type="submit">Add ingredient</button>
                    <button className="clear" type="button" onClick={handleRemove}>Clear List</button>
                </div> */}
            </form>
            <section>
                <h2>Ingredients on hand:</h2>
                <ul className="list" aria-live="polite">{listElement}</ul>
                <div className="recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe based on provided list of items.</p>
                    </div>
                    <button>Get a recipe!</button>
                </div>
            </section>
        </main>
    );
}