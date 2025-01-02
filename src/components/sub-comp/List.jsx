export default function List(props) {
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="list" aria-live="polite">{props.element}</ul>
            {props.element.length > 3 &&
                <div className="recipe-container">
                    <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe based on provided list of items.</p>
                    </div>
                    <button onClick={props.getRecipe}>Get a recipe!</button>
                </div>
            }
        </section>
    )
}