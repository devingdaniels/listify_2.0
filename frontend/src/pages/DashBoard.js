// React
import { useEffect  } from 'react';
import { useNavigate  , Outlet} from 'react-router-dom';
// Components
import ProjectForm from '../components/ProjectForm'
import Spinner from '../components/Spinner'
import Header from '../components/Header'
import Project from '../components/Project'
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
  const { projects, isLoading, isError, message } = useSelector((state) => state.projects)



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

  }, [ user, isError, message, dispatch, navigate ])


  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <Header />
      <ProjectForm />
      <section >        
        <div className='dashboard-grid-container'>
          {projects.map((project) => {
            return <div key={project._id}><Project project={project} /></div>
          })}
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default DashBoard
