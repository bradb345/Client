import axios from 'axios'
import { getToken } from './auth'


const baseUrl = '/api'

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
  return axios.get(`${baseUrl}/projects/${projectId}`)
}

export function deleteSingleProjectProject(projectId) {
  return axios.delete(`${baseUrl}/projects/${projectId}`, headers())

}
