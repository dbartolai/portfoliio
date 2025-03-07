import './pages/Dashboard.css'


const moduleColors = {
    'purple' : 'module-purple',
    'green' : 'module-green',
    'blue' : 'module-blue',
    'red' : 'module-red',
    'orange' : 'module-orange',
    'yellow' : 'module-yellow',
    'grey' : 'module-grey',
    'pink' : 'module-pink'
}

function Module({module_title, module_subtitle, module_description, module_color, is_song=false}){
   
    if(is_song==true){
        return(
            <>
            <div className={moduleColors[module_color] + '-song'}>
                <div className='module-header'>
                    <div className='module-title-div'>
                        <h2 className='module-title'>{module_title}</h2>
                    </div>
                    <div className='module-subtitle-div'>
                        <h4 className='module-subtitle'>{module_subtitle}</h4>
                    </div>
                </div>
                <div className='module-content-div-song'>
                    <div className='module-content'>{module_description}</div>
                </div>
            </div>
            
            </>
        )
    }
    
    return(
        <>
        <div className={moduleColors[module_color]}>
            <div className='module-header'>
                <div className='module-title-div'>
                    <h2 className='module-title'>{module_title}</h2>
                </div>
                <div className='module-subtitle-div'>
                    <h4 className='module-subtitle'>{module_subtitle}</h4>
                </div>
            </div>
            <div className='module-content-div'>
                <div className='module-content'>{module_description}</div>
            </div>
        </div>
        
        </>
    )
}
export default Module