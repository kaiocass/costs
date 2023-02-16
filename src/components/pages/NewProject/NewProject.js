import { useHistory } from "react-router-dom";
import ProjectForm from "../../project/ProjectForm/ProjectForm";
import styles from "./NewProject.module.css";

function NewProject() {
  // Allows you to redirect the user to what he wants to do
  const history = useHistory();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        history.push('/projects', { message: 'Create project successfully' })
      })
      .then()
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Create Project</h1>
      <p>Create your project to later to add the services</p>
      <ProjectForm btnText="Create Project" handleSubmit={createPost} />
    </div>
  );
}

export default NewProject;
