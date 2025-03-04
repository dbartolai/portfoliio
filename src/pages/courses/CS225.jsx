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

function CS225(){
    return(
        <>
        <div className='header'>
            <h1 className='story-header'>Theory vs Practice:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title={'Data Structures'} module_map={data_map}/>
        </>
    )
}

export default CS225