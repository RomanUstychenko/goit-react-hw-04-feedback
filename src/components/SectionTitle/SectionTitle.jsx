import css from "./Feedback.module.css"
import PropTypes from 'prop-types'

 const SectionTitle = ({title, children}) => {
return (

    <div className={css.feedbackList}>
    <p className={css.feedbackTitle}>{title}</p>
    {children}
    </div>
    )
}
export default SectionTitle;

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,

};