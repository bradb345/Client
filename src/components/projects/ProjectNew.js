import React from 'react'
import { useHistory } from 'react-router'
import { useForm } from '../hooks/useForm'
import { createProject } from '../../components/lib/api.js'

function CreateNewProject() {

  const history = useHistory()
  const { formdata, formErrors, handleChange, setFormErrors } =
  useForm({
    projectName: '',
    url: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createProject(formdata)
      history.push('/')
    } catch (error) {
      setFormErrors(error.response.data)
    }
  }


  return (
    <section className="Project-edit-container">
      <form className="project-edit-form"  onSubmit={handleSubmit}>
        <div  className="form-label-container">
          <label> Project Name </label>
          <div>
            <input
              placeholder='Project Name'
              name='projectName'
              onChange={handleChange}
              // value={formdata.projectName}
            />
          </div>
          {formErrors.projectName && <p>{formErrors.projectName}</p> }
        </div>
        <div>
          <label> Project URL </label>
          <div>
            <input
              placeholder='Project URL'
              name='url'
              onChange={handleChange}
              // value={formdata.url}
            />
          </div>
          {formErrors.url}
        </div>
        {/* <div>
          <label> Project Type </label>
          <div>
            <input
              placeholder='Project Type'
              name='projectType'
              onChange={handleChange}
              value={formdata.projectType}
            />
          </div>
          {formErrors.projectType}
        </div> */}
        <div className="edit-btn-container">
          <button className="editbtn" type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateNewProject