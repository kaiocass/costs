import { BsPencil, BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./ProjectCard.module.css";

function ProjectCard({ id, name, budget, category, handleRemove }) {

  const remove = (e) => {
    e.preventDefault(e)
    handleRemove(id)
  }

  return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Budget:</span> ${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Edit
        </Link>
        <button onClick={remove}>
          <BsTrash /> Remove
        </button> 
      </div>
    </div>
  );
}

export default ProjectCard;
