import './Experience.css'
import Group from '../../Group.jsx'


function UI(){
    return (
        <>
            <ul>
                <li>Read through nearly 100 pages of information from the research team on over 50 molecules</li>
                <li>Integrate the key benefits of each molecule into an interactive and pleasant periodic table</li>
                <li>Our application received tens of thousands of dollars in investment</li>
            </ul>
        </>
    )
}

function Startup(){
    return (
        <>
            <ul>
                <li>Worked through the startup foundation process with seasoned and tested entrepreneurs in Chicago</li>
                <li>Sat in on meetings with potential high profile investors</li>
                <li>Bridged the gap between the founders' ideas and their realization on the internet </li>
            </ul>
        </>
    )
}

function Comms(){
    return (
        <>
            <ul>
                <li>Learned how to explain my technical processes and concepts to the founders</li>
                <li>Maintained effective and regular communication by scheduling meetings and sending emails</li>
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
    'UI' : {
        'title' : 'User Experience',
        'subtitle' : 'HTML, CSS, JS',
        'description' : <UI />,
        'color' : 'red'
    },
    'Startup' : {
        'title' : 'Startup',
        'subtitle' : 'Foundation & Management',
        'description' : <Startup />,
        'color' : 'green'
    },
    'Comms' : {
        'title' : 'Communication',
        'subtitle' : 'Email, Zoom, Teams',
        'description' : <Comms/>,
        'color' : 'orange'
    }
}

const challenges_map = {
    'Remote' : {
        'title' : 'Remote Work',
        'subtitle' : '',
        'description' : <Remote />,
        'color' : 'pink'
    },
    'Debugging' : {
        'title' : 'Debugging',
        'subtitle' : 'Wordpress, HTML, CSS',
        'description' : <Debug />,
        'color' : 'yellow'
    },
}

function Acannability(){
    return (
        <>
        <div className='timeline-div'>
            <h2 className='timeline'>Software Engineer: April 2024 - August 2024</h2>
        </div>
        <Group group_title='Skills:' module_map={skills_map}/>
        <Group group_title='Challenges:' module_map={challenges_map}/>
        </>
    )
}
export default Acannability