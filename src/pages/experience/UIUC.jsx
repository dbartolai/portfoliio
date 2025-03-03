import './Experience.css'
import Group from '../../Group.jsx'


function Physics(){
    return (
        <>
            <ul>
                <li>Teaching is the best way to learn. I learned far more teaching a lab section of Physics than I did in the actual class</li>
                <li>Helped over 50 students deploy electromagnetic circuits to test pre-provided claims</li>
                <li>Worked with capacitors, inductors, electromagnets, iOLabs, and more during experimentation</li>
            </ul>
        </>
    )
}

function Management(){
    return (
        <>
            <ul>
                <li>Delivered a 10-15 minute pre-lecture to my students, introducing the labs and fundamental concepts</li>
                <li>Balanced answering questions from a dozen groups throughout a 100 minute lab period</li>
                <li>Broke down complex topics and relationships to improve student understanding </li>
            </ul>
        </>
    )
}

function Cirriculum(){
    return (
        <>
            <ul>
                <li>Interviewed my students for feedback to improve the UIUC Physics department</li>
                <li>Developed my own lab and rubric to test students on fundamental concepts of the class</li>
                <li>Took field notes during each lab section to improve my own teaching abilities</li>
            </ul>
        </>
    )
}

function Remote(){
    return (
        <>
            <ul>
                <li>This was my first time working fully remote since online high school, four years earlier</li>
                <li>I found remote classes very challenging, and I had to work through those challenges again</li>
                <li>While I believe I could work remotely again if it came to that, I learned that having an in person environment is very uplifting to me</li>
            </ul>
        </>
    )
}

function Debug(){
    return (
        <>
            <ul>
                <li>In this position, I was expecting to work entirely with HTML, CSS, and JS, adI had been used to</li>
                <li>I inherited a Wordpress site from the previous developer, and was forced to make that work with proprietary CSS classes</li>
                <li>There were many cases where Wordpress would not work with me, and the only solution is customer support</li>
                <li>From then on, I largely prefer to develop for the web using code. Debugging is far simpler</li>
            </ul>
        </>
    )
}


const skills_map = {
    'Physics' : {
        'title' : 'Physics: E&M',
        'subtitle' : 'IOLab, Breadboard',
        'description' : <Physics />,
        'color' : 'purple'
    },
    'Management' : {
        'title' : 'Management & Communication',
        'subtitle' : '',
        'description' : <Management />,
        'color' : 'red'
    },
    'Cirriculum' : {
        'title' : 'Teaching',
        'subtitle' : '',
        'description' : <Cirriculum/>,
        'color' : 'orange'
    }
}


function UIUC(){
    return (
        <>
        <div className='timeline-div'>
            <h2 className='timeline'>PHYS 212 Teaching Asst: August 2024 - December 2024</h2>
        </div>
        <Group group_title='Skills:' module_map={skills_map}/>
        </>
    )
}
export default UIUC