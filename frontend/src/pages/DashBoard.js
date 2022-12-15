// React
import { useEffect } from 'react';
import { useNavigate , Link, Outlet} from 'react-router-dom';
// Components
import ProjectForm from '../components/ProjectForm'
import Spinner from '../components/Spinner'
import Header from '../components/Header'
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllProjects, reset} from '../features/projects/projectSlice';
// Notifications
import { toast } from 'react-toastify'

function DashBoard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Save the current logged in user
  const { user } = useSelector((state)=> state.auth)
  const { projects, isLoading, isError, message, isSuccess } = useSelector((state) => state.projects)

  useEffect(() => {    

    if (user !== null) {
      // Dispatch and fetch all projects from DB, will go into projects variable
      dispatch(getAllProjects())
    } else {       
      navigate('/') 
    }
    
    if (isError) {       
      toast.error(message)      
    }
    
    // Perform an action during component unmount by adding return statement
    return () => { 
      dispatch(reset())
    }

  },[user, isError, message, dispatch, navigate])


  const refreshProjects = () => { 
    dispatch(getAllProjects())
  }

  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <Header />
      <section className='dashboard-grid-container'>
        <ProjectForm />
        <div>
          {projects.map((project) => {
            return <Link to={{ pathname: `/dashboard/${project._id}` }} key={project._id} state={{ project: project }}> {project.title}
            </Link>
          })}
        </div>
        <Outlet/>
      </section>
    </>
  )
}

export default DashBoard
