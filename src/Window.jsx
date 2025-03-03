import './Window.css'
import Dashboard from './pages/Dashboard.jsx'
import About_Me from './pages/About_Me.jsx'
import Tutoring from './pages/Tutoring.jsx'
import Acannability from './pages/experience/Acannability.jsx'
import UIUC from './pages/experience/UIUC.jsx'
import SAS from './pages/experience/SAS.jsx'
import CS225 from './pages/courses/CS225.jsx'
import MATH257 from './pages/courses/MATH257.jsx'
import ECE220 from './pages/courses/ECE220.jsx'
import CS173 from './pages/courses/CS173.jsx'
import ClassMate from './pages/projects/ClassMate.jsx'
import LowStakes from './pages/projects/LowStakes.jsx'

function Window({windowTitle}) {

    const windowStates = {
        'Dashboard' : <Dashboard />,
        'About Me' : <About_Me />,
        'Tutoring' : <Tutoring />,
        'Acannability' : <Acannability />,
        'University of Illinois' : <UIUC/>,
        "Sports Analytics Society" : <SAS/>,
        "LowStakes": <LowStakes/>,
        "ClassMate": <ClassMate/>,
        "CS 225" : <CS225/>,
        "MATH 257" : <MATH257/>,
        "ECE 220" : <ECE220/>,
        "CS 173" : <CS173/>
    }

    return (
      <>
        <div className='window'>
          <div className='window-title-div'>
            <h1 className='window-title'>{windowTitle}</h1>
          </div>
          <div className='window-content-div'>
            {windowStates[windowTitle]}
          </div>
        </div>
      </>
    )
}

export default Window