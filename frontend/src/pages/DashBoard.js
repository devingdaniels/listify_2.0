// React
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// Components
import ProjectForm from '../components/ProjectForm'
import Project from '../components/Project'
import Spinner from '../components/Spinner'

// Redux
import { getAllProjects, reset} from '../features/projects/projectSlice';

// Toastify
import { toast } from 'react-toastify'

function DashBoard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  // Save the current logged in user
  const { user } = useSelector((state)=> state.auth)
  const { projects, isLoading, isSuccess, isError, message } = useSelector((state) => state.projects)

  useEffect(() => {    

    if (isError) {       
      toast.error(message)
    }

    if (!user) {
      navigate('/')
    }

    // Dispatch and fetch all projects from DB, will go into projects variable
    dispatch(getAllProjects())

    // Perform an action during component unmount by adding return statement
    return () => { 
      dispatch(reset())
    }
  },[user, navigate, isError, message, dispatch])



  if (isLoading) { 
    return <Spinner/>
  }

  return (
    <>
      <section className='dashboardContainer'>        
        <h2>Welcome, {user && user.name.split(' ')[0]}!</h2>
        <ProjectForm />        
        {projects.map((project) => {           
          return <Project key={project._id} project={ project} />
        }) }        
    </section>
    
    </>
  )
}

export default DashBoard
