import ProjectIndex from '../projects/ProjectIndex.js'


function Feed({ searchTerm }) {

  return (
    <>
      <div>
        <ProjectIndex searchTerm={searchTerm} />
      </div>
    </>


  )
}

export default Feed