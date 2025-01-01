import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
    return (
        <section className="ai-recipe-container">
            <h2 className="banner">React Chef recommended recipe...</h2>
            <ReactMarkdown>
                {props.showRecipe}
            </ReactMarkdown>
        </section>
    )
}