import './Window.css'
import Dashboard from './pages/Dashboard.jsx'
import About_Me from './pages/About_Me.jsx'
import Tutoring from './pages/Tutoring.jsx'
import Acannability from './pages/experience/Acannability.jsx'
import UIUC from './pages/experience/UIUC.jsx'

function Window({windowTitle}) {

    const windowStates = {
        'Dashboard' : <Dashboard />,
        'About Me' : <About_Me />,
        'Tutoring' : <Tutoring />,
        'Acannability' : <Acannability />,
        'University of Illinois' : <UIUC/>
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