import axios from 'axios'
import { getToken } from './auth'
import { baseUrl } from '../../config'


// const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

//* PROJECT REQUESTS

export function getAllProjects() {
  return axios.get(`${baseUrl}/projects`)
}

export function getSingleProject(projectId) {
  return axios.get(`${baseUrl}/projects/${projectId}/`)
}

export function deleteSingleProject(projectId) {
  return axios.delete(`${baseUrl}/projects/${projectId}`, headers())

}

export function createProject(formdata) {
  return axios.post(`${baseUrl}/projects/`, formdata, headers())
}

export function editProject(projectId, formdata) {
  return axios.put(`${baseUrl}/projects/${projectId}/`, formdata, headers())
}

export function likeProject(projectId) {
  return axios.post(`${baseUrl}/projects/${projectId}/favorite/`, null, headers())
}



//* Auth Requests

// .login

export function loginUser(formdata) {
  return axios.post(`${baseUrl}/auth/login/`, formdata)
}

// .register

export function registerUser(formdata) {
  return axios.post(`${baseUrl}/auth/register/`, formdata)
}

export function getAllUsers() {
  return axios.get(`${baseUrl}/auth/profile/`)
}

//*OWNER(USER) REQUEST

export function getSingleUser(userId) {
  return axios.get(`${baseUrl}/auth/profile/${userId}/`)
}

export function editProfile(userId, formdata) {
  return axios.put(`${baseUrl}/auth/profile/${userId}/`, formdata, headers())
}