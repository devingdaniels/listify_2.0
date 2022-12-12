// React
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import ProjectForm from '../components/ProjectForm'
import Project from '../components/Project'
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
  },[user, isError, message, dispatch, navigate])

  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <Header />
      <section className='dashboardContainer'>      
        <ProjectForm />        
        {projects.map((project) => {           
          return <Project key={project._id} project={ project} />
        }) }        
    </section>    
    </>
  )
}

export default DashBoard
