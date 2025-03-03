import './Experience.css'
import Group from '../../Group.jsx'
import InProgress from '../../InProgress.jsx'


function Leadership(){
    return (
        <>
            <ul>
                <li>Leading a team of 10 developers interested in Sports Analytics to build out LowStakes</li>
                <li>Teaching teammates of varying skill levels about the technologies we are using (React, Flask, AWS DynamoDB)</li>
                <li>Delegate responsibilities accoriding to the strengths of each individual, while still working myself</li>
                <li>Organizing and running a meeting or two each week through conflicting schedules</li>
            </ul>
        </>
    )
}

function Github(){
    return (
        <>
            <ul>
                <li>Taught my teammates of varying skill level about utilizing githubs branching and version control features</li>
                <li>Handle reviewing and merging of pull requests</li>
                <li>Ensuring nothing gets broken on the main branch of our codebase</li>
            </ul>
        </>
    )
}

function WebDev(){
    return (
        <>
            <ul>
                <li>Learning web development frameworks at a much deeper level than ever before</li>
                <li>Understanding how to integrate a frontend and backend through api design</li>
                <li>Ensuring our work maintains deployability within our budget as we scale</li>
            </ul>
        </>
    )
}

function Modeling(){
    return (
        <>
            <ul>
                <li>Utilizing Numpy to create linear and logistic regression models</li>
                <li>In the process of learning about tree-based models to add to our current one</li>
                <li>Exploring through Jupyter Notebooks how feature engineering and initial conditions can impact accuracy</li>
            </ul>
        </>
    )
}

function Enthusiasm(){
    return (
        <>
            <ul>
                <li>It can often be difficult to keep people enthusiastic when we are at the beginning of such a long process</li>
                <li>A lot of people have other commitments or things thye would rather do</li>
                <li>Even with high enthusiasm, it's very difficult finding times that work for such a large group</li>
            </ul>
        </>
    )
}

function Understanding(){
    return (
        <>
            <ul>
                <li>There are people on my team with full stack experience working with Statistics majors who have never programmed before</li>
                <li>Such a skill gap means I need to spend meetings coaching up the less experienced workers</li>
                <li>When our meeting times get used up and people don't work from home because we don't have a direction yet, it can be difficult</li>
                <li>As a result, I have been doing a lot of the backend bootstrapping myself, hoping that a half-baked product will get people interested</li>
            </ul>
        </>
    )
}


const skills_map = {
    'Leadership' : {
        'title' : 'Leadership & Administration',
        'subtitle' : '',
        'description' : <Leadership />,
        'color' : 'purple'
    },
    'Github' : {
        'title' : 'Github',
        'subtitle' : '',
        'description' : <Github />,
        'color' : 'green'
    },
    'WebDevelopment' : {
        'title' : 'Web Development',
        'subtitle' : '',
        'description' : <WebDev />,
        'color' : 'orange'
    },
    'Predictive Modeling' : {
        'title' : 'Predictive Modeling',
        'subtitle' : '',
        'description' : <Modeling />,
        'color' : 'red'
    }
}


const tech_map = {
    'React' : {
        'title' : 'React.JS',
        'subtitle' : 'Frontend',
        'description' : <div />,
        'color' : 'grey'
    },
    'Flask' : {
        'title' : 'Flask',
        'subtitle' : 'API',
        'description' : <div />,
        'color' : 'yellow'
    },
    'AWS DynamoDB' : {
        'title' : 'AWS DynamoDB (Python)',
        'subtitle' : 'Backend',
        'description' : <div />,
        'color' : 'blue'
    },
    'Numpy' : {
        'title' : 'Numpy',
        'subtitle' : 'Model Design',
        'description' : <div />,
        'color' : 'pink'
    }
}

const challenge_map = {
    'Enthusiasm' : {
        'title' : 'Enthusiasm',
        'subtitle' : '',
        'description' : <Enthusiasm />,
        'color' : 'purple'
    },
    'Understanding' : {
        'title' : 'Undersanding',
        'subtitle' : '',
        'description' : <Understanding />,
        'color' : 'red'
    }
}

function SAS(){
    return (
        <>
        <div className='timeline-div'>
            <h2 className='timeline'>Project Lead: February 2025 - Present</h2>
        </div>
        <Group group_title='Skills:' module_map={skills_map}/>
        <Group group_title='Technologies:' module_map={tech_map}/>
        <Group group_title='Challenges:' module_map={challenge_map}/>
        </>
    )
}
export default SAS