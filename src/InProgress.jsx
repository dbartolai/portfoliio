import Module from './Module.jsx'

function Progress(){
    return (
        <>
            <p>I'm so sorry, this page hasn't been completed yet. Check back in the next day or two; I promise there will be content here!</p>
        </>
    )
}

function InProgress(){
    return (
        <>
            <Module module_color='red' module_title='Page In Progress' module_description={<Progress/>}/>
        </>
    )
}

export default InProgress