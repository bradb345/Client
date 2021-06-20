import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getSingleProject, editProject } from '../lib/api'

function ProjectEdit() {
  const history = useHistory()
  const { projectId } = useParams()

  const { formdata, formErrors, handleChange, setFormErrors, setFormdata } = useForm({
    projectName: '',
    url: '',
  })

  // console.log(projectId)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleProject(projectId)
        
        setFormdata(res.data)
        
      } catch (error) {
        if (error.response) {
          setFormErrors(error.response.data)
        }
      }
    }
    getData()
    
  }, [projectId, setFormdata, setFormErrors])


  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await editProject(projectId, formdata)
      history.push('/')
    } catch (error) {
      setFormErrors(error.response.data)
    }
  }

  return (
    <section className="edit-container">
      <div className="edit-title">
        <h1>Edit Project</h1>
      </div>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div className="form-label-container">
          <label htmlFor="projectName"> Project Name </label>
          <div>
            <input
              placeholder='Project Name'
              name='projectName'
              onChange={handleChange}
              value={formdata.projectName}
            />
          </div>
          {formErrors.projectName && <p>{formErrors.projectName}</p>}
        </div>
        <div>
          <label>Project URL </label>
          <div>
            <input
              placeholder='Project URL'
              name='url'
              onChange={handleChange}
              value={formdata.url}
            />
          </div>
          {formErrors.url}
        </div>
        <div className="edit-btn-container">
          <button className="editbtn" type='submit'>
            Submit
          </button>
        </div>
      </form>
    </section>
  )
}

export default ProjectEdit