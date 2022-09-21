import css from "./feedback.module.css"

 const Block = ({title, children}) => {
return (

    <div className={css.feedbackList}>
    <p className={css.feedbackTitle}>{title}</p>
    {children}
    </div>
    )
}
export default Block;