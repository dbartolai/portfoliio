import './Classmate.css'
import Group from '../../Group.jsx'


function Problem(){
    return (
        <>
            <ul>
                <li>I was never able to get a good understanding of where I stood in my classes</li>
                <li>Each class would grade different kinds of assignments on different websites</li>
                <li>Even when I found my grades, I never knew what to make of them</li>
            </ul>
        </>
    )
}

function Process(){
    return (
        <>
            <ul>
                <li>SQLite was the best choice for me to store all of my data locally</li>
                <li>Numpy provides many functions that make it super easy to work with my data</li>
                <li>Tkinter is a super lightweight UI framework that isn't super pretty, but shows me my grades </li>
            </ul>
        </>
    )
}

function Product(){
    return (
        <>
            <ul>
                <li>ClassMate is a full-stack, local widget that keeps my grades in order </li>
                <li>It calculates the maximum and minimum attainable grade in each weighted category of each class</li>
                <li>Users can perform all of the CRUD operations on individual grades, categories, and courses</li>
            </ul>
        </>
    )
}

function Python(){
    return (
        <>
            <ul>
                <li>The nature of this project forced me to utilize Python as an object oriented language</li>
                <li>I used classes to store all of the grading data, and created member functions within them for analysis</li>
                <li>Developing a UI in Python was also completely foreign to me, and I had a lot of documentation to read through</li>
            </ul>
        </>
    )
}

function ProblemSolving(){
    return (
        <>
            <ul>
                <li>For this project, I utilized my skills in conjunction with online resources to improve my life</li>
                <li>There was this problem I had, and I was able to go through and develop my own solution</li>
                <li>Moving through this process taught me a lot, and gave me confidince in my abilities to solve others' problems too</li>
            </ul>
        </>
    )
}

function SQL(){
    return (
        <>
            <ul>
                <li>ClassMate was my first experience working with an SQL-style database</li>
                <li>I learned how to open connections, work with try-catch blocks, and make queries to the database</li>
                <li>This experience made the idea of 'backend development' far less daunting</li>
            </ul>
        </>
    )
}

function Documentation(){
    return (
        <>
            <ul>
                <li>Working through this project taught me the importance of reading through documentation for new technologies</li>
                <li>While these days it's so easy to just copy and paste into an AI chatbot, you learn so much more bu working through it yourself</li>
                <li>This portfolio site was made possible by the incredibly well-maintained React Docs</li>
                <li>Whenever I get the chance, I emphasize the immportance of reading docs to my Sports Analytics team</li>
            </ul>
        </>
    )
}

const process_map = {
    'Problem' : {
        'title' : 'Problem: ',
        'subtitle' : '',
        'description' : <Problem />,
        'color' : 'red'
    },
    'Process' : {
        'title' : 'Planning: ',
        'subtitle' : '',
        'description' : <Process />,
        'color' : 'yellow'
    },
    'Solution' : {
        'title' : 'Solution:',
        'subtitle' : '',
        'description' : <Product/>,
        'color' : 'green'
    }
}

const framework_map = {
    'Numpy' : {
        'title' : 'Numpy',
        'subtitle' : 'Data Analysis',
        'description' : <div />,
        'color' : 'pink'
    },
    'tkinter' : {
        'title' : 'tkinter',
        'subtitle' : 'Frontend',
        'description' : <div />,
        'color' : 'purple'
    },
    'SQLite' : {
        'title' : 'SQLite',
        'subtitle' : 'Database Connection',
        'description' : <div/>,
        'color' : 'blue'
    }
}

const skills_map = {
    'Documentation' : {
        'title' : 'Documentation',
        'subtitle' : '',
        'description' : <Documentation/>,
        'color' : 'blue'
    },
    'Python' : {
        'title' : 'Python',
        'subtitle' : '',
        'description' : <Python />,
        'color' : 'green'
    },
    'Problem Solving' : {
        'title' : 'Problem Solving',
        'subtitle' : '',
        'description' : <ProblemSolving />,
        'color' : 'yellow'
    },
    'SQL' : {
        'title' : 'SQL',
        'subtitle' : '',
        'description' : <SQL/>,
        'color' : 'grey'
    }
    
}

function ClassMate(){
    return (
        <>
        <a href='https://github.com/dbartolai/classMate' className='github'>
            <div className='github-div'>
                <h2 className='github'>Click here to see ClassMate in my Github</h2>
            </div>
        </a>
        <Group group_title='Process: ' module_map={process_map}/>
        <Group group_title='Frameworks:' module_map={framework_map}/>
        <Group group_title='Skills:' module_map={skills_map}/>
        </>
    )
}
export default ClassMate