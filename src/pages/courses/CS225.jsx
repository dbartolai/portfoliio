import Group from '../../Group.jsx'
import './courses.css'



function Vectors(){
    return (
        <>
            <ul>
                <li>Live in contiguous memory locations</li>
                <li>The compiler can easily find elements given a memory offset</li>
                <li>Inserting/removing elements takes a lot of time, because each element needs to be shifted</li>
            </ul>
        </>
    )
}

function LinkedLists(){
    return (
        <>
            <ul>
                <li>Each node contains data, and a pointer to the next node</li>
                <li>Insertions and deletions can happen much more quickly</li>
                <li>Compiler can no longer locate indexed elements, since they are allocated randomly on the heap </li>
            </ul>
        </>
    )
}

function BST(){
    return (
        <>
            <ul>
                <li>Each node has at most two children. All children to the left of a node must be smaller than it, and vice versa</li>
                <li>Allow the programmer to search for a key quickly, because you eliminate half of potential elements with each step</li>
                <li>You can also implement methods to make an AVL tree, which balances itself to maintain logarithmic height</li>
                <li>K-D trees are set up so that one can compare multi-dimensional keys </li>
            </ul>
        </>
    )
}

function Stack(){
    return (
        <>
            <ul>
                <li>Stacks are like vectors, stored contiguously in memory, but with stricter operations</li>
                <li>To maintain maximum efficiency, you can only remove the most recently added element (last in, first out)</li>
                <li>Queues are the opposite, so that you can only remove the least recently added element (last in, last out)</li>
            </ul>
        </>
    )
}

function CPP(){
    return (
        <>
            <ul>
                <li>Learned in depth about memory allocation, classes, and object oriented programming through weekly assignments</li>
                <li>Use C++ to create proprietary data structures that run on sequences of pixels, working to improve runtimes</li>
                <li>Solve problems in C++ on biweekly proctored exams</li>
            </ul>
        </>
    )
}

function Test(){
    return (
        <>
            <ul>
                <li>Develop Catch2 tests to test my program with small integer values before it runs on images</li>
                <li>Use breakpoints and print statements to fix segfaults, memory issues, and incorrect outputs </li>
                <li>Whiteboard simple cases of problems to visualize what is happening at runtime</li>
            </ul>
        </>
    )
}

function Problem(){
    return (
        <>
            <ul>
                <li>Solve various puzzles and problems involving developing algorithms each week</li>
                <li>These problems range from rearranging a linked list in a specific manner to constructing a photomosaic through a BST</li>
                <li>Take the concrete information from class and utilize it in creative, thoughtful ways to develop a solution</li>
            </ul>
        </>
    )
}

function Docker(){
    return (
        <>
            <ul>
                <li>All class operations run in the proprietary Docker container</li>
                <li>This contains all of the dependencies to run our test cases, and compile correctly for our autograder</li>
            </ul>
        </>
    )
}




const story = 'Data structures and algorithms is broken down into two key components, each equally important. Theory, and practice. I see theory as the part that was likely very difficult to come up with, yet easy for the student to understand. This is why whiteboarding is so helpful when programming. It\'s not that difficult to see how different pointers should move in different cases. Practice, on the other hand, makes up the majority of the time commitment of this class. We implement the data structures with respect to sequences of pixels, which can make testing and debugging very difficult. Unfortunately, I don\'t believe I can share any of the code I write for this class.'

const data_map = {
    'Vectors' : {
        'title' : 'Vectors & Arrays',
        'subtitle' : '',
        'description' : <Vectors/>,
        'color' : 'pink'
    },
    'LinkedLists' : {
        'title' : 'Linked Lists',
        'subtitle' : '',
        'description' : <LinkedLists />,
        'color' : 'red'
    },
    'BST' : {
        'title' : 'Binary Search Trees',
        'subtitle' : '',
        'description' : <BST />,
        'color' : 'purple'
    },
    'Stack' : {
        'title' : 'Stacks & Queues',
        'subtitle' : '',
        'description' : <Stack/>,
        'color' : 'blue'
    }
}

const skills_map = {
    'C++' : {
        'title' : 'C++',
        'subtitle' : '',
        'description' : <CPP/>,
        'color' : 'grey'
    },
    'Testing' : {
        'title' : 'Testing & Debugging',
        'subtitle' : '',
        'description' : <Test />,
        'color' : 'green'
    },
    'ProblemSolving' : {
        'title' : 'Problem Solving',
        'subtitle' : '',
        'description' : <Problem />,
        'color' : 'yellow'
    },
    'Docker' : {
        'title' : 'Docker Container',
        'subtitle' : '',
        'description' : <Docker/>,
        'color' : 'orange'
    }
}

function CS225(){
    return(
        <>
        <div className='header'>
            <h1 className='story-header'>Theory vs Practice:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title={'Data Structures:'} module_map={data_map}/>
        <Group group_title={'Skills'} module_map={skills_map}/>
        </>
    )
}

export default CS225