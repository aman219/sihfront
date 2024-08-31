import React from 'react'

const AddProject = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("department", "Public Work department")
        console.log(formData)
        e.target.reset();
    }

  return (
    <div className="addProject" >
        <h4> AddProject </h4>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label htmlFor="name"> Project Name </label>
            <input type="text" id="name" name="name" required /> <br />
            <label htmlFor="description"> Description </label>
            <input type="text" id="description" name="description" required /> <br />
            <label htmlFor="budget"> Budget </label>
            <input type="number" id="budget" name="budget" required /> <br />
            <label htmlFor="location"> Location </label>
            <input type="text" id="location" name="location" required /> <br />
            <label htmlFor="resources"> Resources </label>
            <input type="text" id="resources" name="resources" required /> <br /> <br />

            <input type="submit" value="Add Project" />
        </form>
    </div>
  )
}

export default AddProject
