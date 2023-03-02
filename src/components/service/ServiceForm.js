import styles from '../project/ProjectCard.module.css'
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';
import { useState } from 'react';

function ServiceForm({ handleSubmit, btnText, projectData }) {

  const[service, setService] = useState({})

  function submit(e) {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
        type="text"
        text="Service name"
        name="name"
        placeholder="Insert service name"
        handleOnChange={handleChange}
      />
      <Input 
        type="number"
        text="Service cost"
        name="cost"
        placeholder="Insert total value"
        handleOnChange={handleChange}
      />
      <Input 
        type="text"
        text="Service description"
        name="description"
        placeholder="Description service"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}


export default ServiceForm;
