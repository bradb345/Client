import React from 'react'

import { useParams, useHistory } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { getSingleUser, editProfile } from '../lib/api'

function ProfileEdit() {

  const history = useHistory()
  const { id } = useParams()
  const { formdata, formErrors, handleChange, setFormErrors, setFormdata } = useForm({
    username: '',
    password: '',
    passwordConfirmation: '',
    profileImage: '',
    email: '',
    gaCohort: '',
    linkedin: '',
    github: '',
    twitter: '',
    personalSite: '',
    instagram: '',
    jobTitle: '',
  })

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getSingleUser(id)
        setFormdata(res.data)
        console.log(res.data)
      } catch (error) {
        alert(error.response.data)
        setFormErrors(error.response.data)
      }
    }
    getData()
  }, [id, setFormdata, setFormErrors])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const obj = formdata
      delete obj.createdProject
      console.log(obj)
      await editProfile(id, obj)
      history.push(`/profile/${id}`)
    } catch (error) {
      console.log(error.response)
      setFormErrors(error.response.data)

    }
  }

  console.log(formdata)

  return (
    <div className="master-container">
      <section className="edit-container">
      
        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="edit-column-1">
            <div className="form-label-container">
              <label htmlFor="projectName"> Username </label>
              <div>
                <input
                  placeholder='Username'
                  name='username'
                  onChange={handleChange}
                  value={formdata.username}
                />
              </div>
              {formErrors.username && <p>{formErrors.username}</p>}
            </div>
            <div>
              <label> Email </label>
              <div>
                <input
                  placeholder='Email'
                  name='email'
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
              {formErrors.email}
            </div>
            <div>
              <label> Job Title </label>
              <div>
                <input
                  placeholder='eg. Junior Software Engineer'
                  name='jobTitle'
                  onChange={handleChange}
                  value={formdata.jobTitle}
                />
              </div>
              {formErrors.jobTitle}
            </div>
            <div>
              <label> Password </label>
              <div>
                <input
                  placeholder='password'
                  name='password'
                  onChange={handleChange}
                  value={formdata.password}
                />
              </div>
              {formErrors.password}
            </div>
            <div>
              <label> Password Confirmation </label>
              <div>
                <input
                  placeholder='Password Confirmation'
                  name='passwordConfirmation'
                  onChange={handleChange}
                  value={formdata.passwordConfirmation}
                />
              </div>
              {formErrors.passwordConfirmation}
            </div>
            <div>
              <label> Profile Image </label>
              <div>
                <input
                  placeholder='Profile Image'
                  name='profileImage'
                  onChange={handleChange}
                  value={formdata.profileImage}
                />
              </div>
              {formErrors.profileImage}
            </div>
          </div>
          <div className="edit-column-2">
            <div>
              <label> GA Cohort </label>
              <div>
                <input
                  placeholder='GA Cohort'
                  name='gaCohort'
                  onChange={handleChange}
                  value={formdata.gaCohort}
                />
              </div>
              {formErrors.gaCohort}
            </div>
            <div>
              <label> LinkedIn </label>
              <div>
                <input
                  placeholder='LinkedIn'
                  name='linkedin'
                  onChange={handleChange}
                  value={formdata.linkedin}
                />
              </div>
              {formErrors.linkedin}
            </div>
            <div>
              <label> Github </label>
              <div>
                <input
                  placeholder='Github'
                  name='github'
                  onChange={handleChange}
                  value={formdata.github}
                />
              </div>
              {formErrors.github}
            </div>
            <div>
              <label> Twitter </label>
              <div>
                <input
                  placeholder='Twitter'
                  name='twitter'
                  onChange={handleChange}
                  value={formdata.twitter}
                />
              </div>
              {formErrors.twitter}
            </div>
            <div>
              <label> Personal Site </label>
              <div>
                <input
                  placeholder='Personal Site'
                  name='personalSite'
                  onChange={handleChange}
                  value={formdata.personalSite}
                />
              </div>
              {formErrors.personalSite}
            </div>
            <div>
              <label> Instagram </label>
              <div>
                <input
                  placeholder='Instagram'
                  name='instagram'
                  onChange={handleChange}
                  value={formdata.instagram}
                />
              </div>
              {formErrors.instagram}
            </div>
            <div className="edit-btn-container">
              <button className="editbtn" type='submit'>
            Submit
              </button>  
            </div>
          </div>
        </form>
      </section>
      
    </div>
  )
}

export default ProfileEdit