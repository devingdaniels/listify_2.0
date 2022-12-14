import React from 'react'
import { Link } from 'react-router-dom'
function DashboardNavigation({ projects }) {
    

    if (projects) {
        return (
            <>
                {
                    projects.map(el => {                        
                        return <Link to={`/dashboard/${el._id}`} key={el._id}>{el.title}</Link>
                    })}

            </>
        )
    } else { 
        return <h1>Error loading projects</h1>
    }
}

export default DashboardNavigation