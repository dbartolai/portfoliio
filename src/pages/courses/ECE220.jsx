import Group from '../../Group.jsx'
import './courses.css'
import '../experience/Experience.css'




function Assembly(){
    return (
        <>
            <ul>
                <li>The first two MPs in ECE 220 has us programming entirely in LC-3 assembly language</li>
                <li>This taught us what went on behind the scenes during a function call, during loops, and at variable declarations</li>
                <li>Writing in assembly was difficult, but debugging was even harder </li>
                <li>My main takeaway from writing in assembly isn't how to write in assembly, but how other languages abstract what is actually taking place</li>
            </ul>
        </>
    )
}

function C(){
    return (
        <>
            <ul>
                <li>Writing in C was the next step in the 'abstraction ladder'</li>
                <li>Exams often involved comparing C calling convention to the actual assembly/machine code</li>
                <li>In C, we implemented a sudoku solving algorith through recursive function calls  </li>
                <li>We also simulated the 'Game of Life', and developed a terminal 2048 game</li>
                <li>Pointers and references were also points of emphasis in C</li>
            </ul>
        </>
    )
}

function CPP(){
    return (
        <>
            <ul>
                <li>C++ now allows us to use many of the same methods as C, while introducing classes</li>
                <li>An object-oriented approach allows for the implementation of proprietary data structures</li>
                <li>We went through the basics of inheritance, methods, and public/private members</li>
                <li>This transition increased the complexity of our projects, while still forcing us to pay close attention to memory management and type details</li>
            </ul>
        </>
    )
}

function Memory(){
    return (
        <>
            <ul>
                <li>Writing in C and C++ forces the programmer to pay a lot of attention to memory management</li>
                <li>Allocating space on the heap vs declaring variables on the stack can offer large differences in runtime and program safety</li>
                <li>We learned about how to utilize pointers and references to memory locations in order to improve basic algorithms and maintain global variables</li>
            </ul>
        </>
    )
}

function OOP(){
    return (
        <>
            <ul>
                <li>Our object-oriented program began with the 2048 project, where we learned about structs in C. These could only contain variables (no methods)</li>
                <li>When we stepped up to C++, we could implement classes with public and private member methods</li>
                <li>Object-Oriented Programming is a huge part of CS 225, allowing us to develop our own data structures and methods for operation</li>
            </ul>
        </>
    )
}

function GDB(){
    return (
        <>
            <ul>
                <li>Being our first class in programming, we were incredibly prone to bugs in our code</li>
                <li>They provided us with gdb integration in our virtual machines, which let us run through particular sections of our code</li>
                <li>GDB is a far more elegant method for debugging than placing print statements all over the program</li>
                <li>ECE 220 taught me that debugging is a necessary evil in the creation of software, one that must be embraces</li>
            </ul>
        </>
    )
}




const story = 'ECE 220 was my first full-fledged programming course in my Computer Engineering cirriculum. This class brought weekly MPs, which each took a considerable amount of time. There were also hour exams that involved writing out code on paper. 220 involved very low level work in assembly and C, then the last 3 MPs were in C++. It covered a very broad scope of topic, but it was arguably too broad to become fully immersed in the material. I would say the main point of the class was to explain what programs in C and C++ actually resembled in the CPU and memory. '

const skills_map = {
    'Assembly' : {
        'title' : 'Assembly',
        'subtitle' : 'LC-3',
        'description' : <Assembly/>,
        'color' : 'red'
    },
    'C' : {
        'title' : 'C',
        'subtitle' : 'Functions, Recursion, and Algorithms',
        'description' : <C/>,
        'color' : 'blue'
    },
    'C++' : {
        'title' : 'C++',
        'subtitle' : 'Classes, Inheritance, and Namespaces',
        'description' : <CPP />,
        'color' : 'purple'
    }
}

const concepts_map = {
    'Memory' : {
        'title' : 'Memory',
        'subtitle' : 'Stack, Heap, and Caller Convention',
        'description' : <Memory/>,
        'color' : 'green'
    },
    'Object-Oriented Programming' : {
        'title' : 'Object-Oriented Programming',
        'subtitle' : 'Structs and Classes',
        'description' : <OOP/>,
        'color' : 'orange'
    },
    'Debugging' : {
        'title' : 'Debugging',
        'subtitle' : 'gdb',
        'description' : <GDB/>,
        'color' : 'grey'
    }
}


function Text(){
    return (
        <>
            <ul>
                <li>We used LC-3 assembly language to write out text (pixel by pixel)</li>
                <li>Developed methods for each letter so they could be printed</li>
                <li>This was technically the last MP for ECE 120, but involved many of the same skills </li>
            </ul>
        </>
    )
}

function TWFE(){
    return (
        <>
            <ul>
                <li>This was our introduction to structs, and therefore memory allocation, in C</li>
                <li>We had a struct for the whole game to manage states and dimensions</li>
                <li>After each keypress, we had to check if the game state meant the game should be terminated </li>
            </ul>
        </>
    )
}

function NW(){
    return (
        <>
            <ul>
                <li>Number Wordle was a program that ran exactly how it sounds</li>
                <li>This was our first C program (coming from assembly), and pretty much just involved many if statements</li>
                <li>I learned about header vs program files, and how control flow in C differed from LC-3</li>
            </ul>
        </>
    )
}

function Sudoku(){
    return (
        <>
            <ul>
                <li>Sudoku solver taught me about recursion, and it honestly blew my mind</li>
                <li>I was shocked that such a complex puzzle could be solved with so few lines of code, but there it was</li>
                <li>This recursion is the basis for just about everything in CS 225, so I'm glad I picked up on it early</li>
            </ul>
        </>
    )
}

function Maze(){
    return (
        <>
            <ul>
                <li>Our maze-solver involved a maze constructed of walls, a start opint, and an end point</li>
                <li>We were to parse the text file using file I/O methods, and then implement a DFS algorithm</li>
                <li>This was a step up from the singular recursive call in the sudoku solver. We had to conditionally recurse using different arguments</li>
            </ul>
        </>
    )
}



const projects_map = {
    'AsmText' : {
        'title' : 'Assembly Text',
        'subtitle' : 'LC-3',
        'description' : <Text/>,
        'color' : 'pink'
    },
    '2048' : {
        'title' : '2048',
        'subtitle' : 'Structs',
        'description' : <TWFE/>,
        'color' : 'yellow'
    },
    'NumWordle' : {
        'title' : 'Number Wordle',
        'subtitle' : 'gdb',
        'description' : <NW/>,
        'color' : 'green'
    },
    'Sudoku' : {
        'title' : 'Sudoku Solver',
        'subtitle' : 'Recursion',
        'description' : <Sudoku/>,
        'color' : 'blue'
    },

    'Maze Runner' : {
        'title' : 'Maze Runner',
        'subtitle' : 'Depth First Search',
        'description' : <Maze/>,
        'color' : 'purple'
    }
}

function ECE220(){
    return(
        <>
         <div className='timeline-div'>
            <h2 className='timeline'>Computer Systems Programming</h2>
        </div>
        <div className='header'>
            <h1 className='story-header'>Intro to Programming:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title={'Skills:'} module_map={skills_map}/>
        <Group group_title={'Concepts:'} module_map={concepts_map}/>
        <Group group_title={'Projects:'} module_map={projects_map}/>
        </>
    )
}

export default ECE220