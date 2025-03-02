import './Dashboard.css'
import Group from '../Group.jsx'


function CS225_description(){
    return (
        <>
        <ul>
            <li>Use C++ to develop complex programs each week related to some data structure</li>
            <li>Work inside our proprietary class Docker container</li>
            <li>Implement linked lists, binary search trees, graphs, etc.</li>
        </ul>
        </>
    )
}

function PHYS213_description(){
    return (
        <>
        <ul>
            <li>Apply calculus to the first and second laws of thermodynamics</li>
            <li>Learn about the concepts of entropy, and how probability affects mechanics</li>
        </ul>
        </>
    )
}

function ECE210_description(){
    return (
        <>
        <ul>
            <li>Apply concepts from calculus and differential equations to electronics</li>
            <li>Develop an AM radio receiver in our lab section</li>
            <li>Learn in depth about analog signals that vary over time</li>
        </ul>
        </>
    )
}

function SAS_description(){
    return (
        <>
        <ul>
            <li>Lead a team of 10 developers, managing PRs, scheduling meetings, and teaching concepts</li>
            <li>Working with Python(numpy, Flask), React.JS, AWS, and more to deliver a full stack sports analytics experience</li>
            <li>Develop vectorized linear regression and logistic regression models from scratch</li>
        </ul>
        </>
    )
}

function BTP_description(){
    return (
        <>
        <ul>
            <li>Currently balancing four clients, working for a handful of hours with each on a weekly basis</li>
            <li>Optimize for both parent and student well-being by keeping parents fully informed after each session</li>
            <li>Develop students' soft skills in addition to technical knowledge in math, physics, chem, etc.</li>
        </ul>
        </>
    )
}


const course_module_map = {
    'CS225' : {
        'title' : 'CS 225',
        'subtitle' : 'Data Structures & Algorithms',
        'description' : <CS225_description />,
        'color' : 'purple'
    },
    'ECE210' : {
        'title' : 'ECE 210',
        'subtitle' : 'Analog Signal Processing',
        'description' : <ECE210_description />,
        'color' : 'orange'
    },
    'PHYS213' : {
        'title' : 'PHYS 213',
        'subtitle' : 'Thermal Physics',
        'description' : <PHYS213_description />,
        'color' : 'blue'
    }
}

const commitments_map = {
    'SAS' : {
        'title' : 'SAS: ',
        'subtitle' : 'Sports Analytics Society - VP/Project Lead',
        'description' : <SAS_description />,
        'color' : 'green'
    },
    'Tutor' : {
        'title' : 'Bartolai test Prep',
        'subtitle' : 'Private Tutor',
        'description' : <BTP_description />,
        'color' : 'red'
    }
}

console.log(course_module_map)

function Dashboard(){
    return(
       <>
       <Group group_title='Spring 2025 Courses:' module_map={course_module_map} />
       <Group group_title='Current Commitments:' module_map={commitments_map} />
       </>
    )
}
export default Dashboard