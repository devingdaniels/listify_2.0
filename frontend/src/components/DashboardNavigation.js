import React from 'react'
import { Link, Outlet } from 'react-router-dom'







function DashboardNavigation({ projects }) {
    
    if (projects) {
        return (
            <>
                {
                    projects.map(el => {                        
                        return <Link to={`/dashboard/${el._id}`} key={el._id}>{el.title}</Link>
                    })}
                <Outlet/>
            </>
        )
    } else { 
        return <h1>Error loading projects</h1>
    }
}

export default DashboardNavigation