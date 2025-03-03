import Module from './Module.jsx'
import './pages/Dashboard.css'

function Group({group_title, module_map}){
    
    let module_list = []

    for (let key in module_map){
        console.log(key)
        module_list.push(
            <Module 
                module_title={module_map[key]['title']} 
                module_subtitle={module_map[key]['subtitle']} 
                module_description={module_map[key]['description']} 
                module_color={module_map[key]['color']} 
                key={key}
                is_song={module_map[key]['is_song']}
            />
        )
    }

    return(
        <>
            <div className='module-group-div'>
                <div className='module-group-title-div'>
                    <h1 className='module-group-title'>{group_title}</h1>
                </div>
                <div className='module-group'>
                    {module_list}
                </div>
            </div>
        </>
    )
}

export default Group