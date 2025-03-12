import Group from '../../Group.jsx'
import './courses.css'
import '../experience/Experience.css'




function Sets(){
    return (
        <>
            <ul>
                <li>Set theory and notation was the first topic we covered in this class</li>
                <li>It's very important to understand which values contain properties of different sets</li>
                <li>Finding elements that belong in the intersection or union of sets is a massive piece of cumputing probabilities, the basis for AI/ML </li>
            </ul>
        </>
    )
}

function Trees(){
    return (
        <>
            <ul>
                <li>Trees are a type of connected graph, where the nodes are referred to as parents and children</li>
                <li>Children cannot have more than one parent, but parents can have many children (depending on the type of tree)</li>
                <li>Recursion trees can be used to determine the time complexity of a recursive method, and grammar trees are often used in code compilation </li>
            </ul>
        </>
    )
}

function Graphs(){
    return (
        <>
            <ul>
                <li>Graphs are a set of nodes that can be connected with edges</li>
                <li>We learned about coloration of graphs, which is very useful in code compilation and other applications</li>
                <li>Data structures can mostly be generalized as graphs with specific properties</li>
            </ul>
        </>
    )
}

function Logic(){
    return (
        <>
            <ul>
                <li>Logic design is at the core of all computer programs</li>
                <li>Hardware, firmware, and software all depend on appropriate logic to determine control flow and execution</li>
                <li>We also used logic to develop proofs for various concepts in the course</li>
            </ul>
        </>
    )
}

function State(){
    return (
        <>
            <ul>
                <li>State machines are an abstraction of a computer program, where some input causes the state to change</li>
                <li>We want to minimize the amount of states and inputs we use in order to reduce complexity</li>
                <li>Now, it can be really helpful to whiteboard a state machine before I write code</li>
            </ul>
        </>
    )
}




const story = 'Discrete structures was the class that linked programming and math for me. Until I took this course, I couldn\'t grasp how important it was for programmers to have numerical reasoning skills. Through learning about recursion trees, set theory, state machines, and logic, I became a much better programmwe without writing a single line of code. I now reflect on this class as one of the most important in the cirriculum, despite the fact that I was dreading taking it.'

const skills_map = {
    'Sets' : {
        'title' : 'Set Theory',
        'subtitle' : '',
        'description' : <Sets/>,
        'color' : 'grey'
    },
    'Trees' : {
        'title' : 'Trees',
        'subtitle' : 'Grammar, Recursion, Binary Search',
        'description' : <Trees />,
        'color' : 'green'
    },
    'Graphs' : {
        'title' : 'Graphs',
        'subtitle' : '',
        'description' : <Graphs />,
        'color' : 'yellow'
    },
    'Logic' : {
        'title' : 'Logic',
        'subtitle' : '',
        'description' : <Logic/>,
        'color' : 'purple'
    },
    'State Machines' : {
        'title' : 'State Machines',
        'subtitle' : '',
        'description' : <State/>,
        'color' : 'orange'
    }
}

function CS173(){
    return(
        <>
         <div className='timeline-div'>
            <h2 className='timeline'>Discrete Structres</h2>
        </div>
        <div className='header'>
            <h1 className='story-header'>Math in Programming:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title={'Skills:'} module_map={skills_map}/>
        </>
    )
}

export default CS173