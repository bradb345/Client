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
    <section>
      <div>
        <h2> Add a New Project </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Project Name </label>
          <div>
            <input
              placeholder='Project Name'
              name='projectName'
              onChange={handleChange}
              value={formdata.projectName}
            />
          </div>
          {formErrors.projectName && <p>{formErrors.projectName}</p> }
        </div>
        <div>
          <label> Url </label>
          <div>
            <input
              placeholder='url'
              name='url'
              onChange={handleChange}
              value={formdata.url}
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
        <div>
          <button type='submit'>
            Submit your Project
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateNewProject