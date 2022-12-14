import React from 'react'

function DashboardNavigation({ projects }) {
    

    if (projects) {
        return (
            <>
                {
                    projects.map(el => {                        
                        return <li key={el._id}>{el.title}</li>
                    })}

            </>
        )
    } else { 
        return <h1>Error loading projects</h1>
    }
}

export default DashboardNavigation