import React from 'react'
import "../styles/addProject.css"

const AddProject = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("department", "Public Work department")
        console.log(formData)
        e.target.reset();
    }

  return (
    <div className="container" >
        <h4 className='heading'> AddProject </h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data" className='addProject-form'>
          <div className='form-group'>
            <label htmlFor="name"> Project Name </label>
            <input type="text" id="name" name="name" required /> <br />
            </div>
            <div className='form-group'>
            <label htmlFor="description"> Description </label>
            <input type="text" id="description" name="description" required /> <br />
            </div>
            <div className='form-group'>
            <label htmlFor="budget"> Budget </label>
            <input type="number" id="budget" name="budget" required /> <br />
            </div>
            <div className='form-group'>
            <label htmlFor="location"> Location </label>
            <input type="text" id="location" name="location" required /> <br />
            </div>
            <div className='form-group'>
            <label htmlFor="resources"> Resources </label>
            <input type="text" id="resources" name="resources" required /> <br /> 
            </div>
            <div className='form-actions'>
            <input type="submit" value="Add Project" />
            </div>
        </form>
    </div>
  )
}

export default AddProject
