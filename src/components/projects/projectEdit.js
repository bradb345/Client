import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getSingleProject, editProject } from '../lib/api'

function ProjectEdit() {
  const history = useHistory()
  const { projectId } = useParams()
  const { formdata, formErrors, handleChange, setFormErrors, setFormData } = useForm({
    projectName: '',
    url: '',
  })

  // console.log(projectId)
  React.useEffect(() => {
    const getData = async () => {
      try {
        // console.log('insideUseEffect')
        const res = await getSingleProject(projectId)

        setFormData(res.data)


      } catch (error) {
        if (error.response) {
          alert(error.response.data)
          setFormErrors(error.response.data)
        }
      }
    }

    getData()
  }, [projectId, setFormData, setFormErrors])

  console.log(setFormData)
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
    <section>
      <div>
        <h2> Edit this Project </h2>
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
        <div>
          <button type='submit'>
        Edit your Project !!!
          </button>
        </div>
      </form>
    </section>
  )
}

export default ProjectEdit