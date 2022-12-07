import { SpinnerDotted } from 'spinners-react'

function Spinner() {
  return (
    <div className='loadingSpinner'>
      <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />          
      </div>
  )
}

export default Spinner
