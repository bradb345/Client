import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getSingleProject, editPlace } from '../lib/api'

function ProjectEdit() {
  const history = useHistory()
  const { projectId } = useParams()
  const { formdata, formErrors, handleChange, setFormErrors, setFormData } = useForm({
    projectName: '',
    url: '',
    projectType: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log('insideUseEffect')
        const res = await getSingleProject(projectId)
        setFormData(res.data)
        console.log(res.data)
      } catch (error) {
        if (error.response) {
          alert(error.response.data)
          setFormData(error.response.data)
        }
      }
    }
  })

}

export default ProjectEdit