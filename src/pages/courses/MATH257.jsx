import Group from '../../Group.jsx'
import './courses.css'
import '../experience/Experience.css'




function Matrices(){
    return (
        <>
            <ul>
                <li>In MATH 257, we learned about vectors/matrices, and how to operate on them</li>
                <li>These complex multiplications are the root of all predictive computing/modeling</li>
                <li>Our weekly labs often involved solving large systems of equations through matrix-vector multiplications </li>
            </ul>
        </>
    )
}

function LR(){
    return (
        <>
            <ul>
                <li>Linear regression is a specific type of matrix-vector multiplication</li>
                <li>Essentially, you execute the traditional slope-intercept equation, but with vectors and matrices instead of slope and input</li>
                <li>I took my knowledge from this unit in particular, and deployed it in my NBA model. During the class, we modeled outputs like housing prices </li>
            </ul>
        </>
    )
}

function Numpy(){
    return (
        <>
            <ul>
                <li>We created all of our models from scratch using NumPy. This gave me a much greater sense of how everything worked, as opposed to using black-box libraries</li>
                <li>NumPy has great features for vectorized mathematic, which greatly improves efficiency on different hardware</li>
                <li>This library is also very safe, making it very difficult to produce errors in my code</li>
            </ul>
        </>
    )
}

function JP(){
    return (
        <>
            <ul>
                <li>Jupyter Notebooks were an essential component of our understanding of this class</li>
                <li>In each lab, we used these alongside libraries such as Matplotlib to visualize our algorithms/models</li>
                <li>Combining the two created a great environment to learn and experiment with different mathematical concepts programatically</li>
            </ul>
        </>
    )
}




const story = 'While Discrete Structures showed me that we could use math to model computations, Linear Algebra proved to me the opposite. That much of programming, especially during today\'s AI rush, is using computers to execute vectorized mathematics in many dimensions. In MATH 257, we learned about many basic linear algebra concepts, but we also applied them through weekly labs and programming exams. '

const skills_map = {
    'Matrices' : {
        'title' : 'Matrices',
        'subtitle' : '',
        'description' : <Matrices/>,
        'color' : 'red'
    },
    'Linear Regression' : {
        'title' : 'Linear Regression',
        'subtitle' : '',
        'description' : <LR />,
        'color' : 'green'
    },
    'Numpy' : {
        'title' : 'NumPy',
        'subtitle' : 'Data Analysis',
        'description' : <Numpy />,
        'color' : 'yellow'
    },
    'Jupyter Notebooks' : {
        'title' : 'Jupyter Notebooks',
        'subtitle' : 'Data Visualization',
        'description' : <JP/>,
        'color' : 'blue'
    }
}

function MATH257(){
    return(
        <>
         <div className='timeline-div'>
            <h2 className='timeline'>Linear Algebra with Computational Applications</h2>
        </div>
        <div className='header'>
            <h1 className='story-header'>Math in Programming:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title={'Skills: '} module_map={skills_map}/>
        </>
    )
}

export default MATH257