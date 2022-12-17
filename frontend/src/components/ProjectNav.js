import React from 'react'
import { Link } from 'react-router-dom'

function ProjectNav({ project, }) {
  return <Link className={ project._id } to={{ pathname: `/dashboard/${project._id}` }} state={{ project: project }}>{project.title}</Link>   
}

export default ProjectNav
