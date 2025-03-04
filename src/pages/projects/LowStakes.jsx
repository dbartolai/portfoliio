import './ClassMate.css'
import Group from '../../Group.jsx'



const story = 'LowStakes is the product that my team at the Sports Analytics Society is working to push. I started working on this as a solo project back in January, and a lot of people on campus were inspired by the idea. We are hoping to develop a full suite of features baked into one web app centered around sports analytics and predicitons. Read about our ideas and plans here!'


function Predictions(){
    return (
        <>
            <ul>
                <li>Implement our own sports prediction models in numpy, or utilize those in pre-existing libraries</li>
                <li>Allow users to view the predictions and win probabilities output by our models</li>
                <li>Convert our predicted win probability into American betting odds, for users to compare to books</li>
            </ul>
        </>
    )
}

function Bankroll(){
    return (
        <>
            <ul>
                <li>Utilize the Kelly Criterion with a confidence coefficient to help users make responsible bets</li>
                <li>Allow users to bet imaginary money using our odds as a means to provide entertainment and test our accuracy</li>
                <li>Create an autonomous betting bot that bets imaginary money, also to test our accuracy </li>
            </ul>
        </>
    )
}

function ModelCreate(){
    return (
        <>
            <ul>
                <li>Deploy methods for users to develop their own sports analytics models through a drag and drop interface </li>
                <li>Provide various models and methods in 'black boxes' for users to play with</li>
                <li>Allow them to modify initial conditions, weights, etc. and test their own accuracy</li>
            </ul>
        </>
    )
}

function Chat(){
    return (
        <>
            <ul>
                <li>Train a small scale, local LLM to help users navigate our site and figure out which tools work best for them </li>
                <li>Allow users to also make posts and comments on different games, but keep the 'social media' aspects to a minimum</li>
                <li>Keep the users active by getting the developers involved in posting and socializing</li>
            </ul>
        </>
    )
}


function Efficiency(){
    return (
        <>
            <ul>
                <li>Working in a team causes each individual to be less efficient than if they were working by themselves, because there is more to consider</li>
                <li>In order to try to circumvent this, I aim to provide frequent and open communication across my team</li>
                <li>Unfortunately, a lot of people tend to be very busy, and people fall out of sync. The team aspect of this project is therefore a heavy constraint</li>
            </ul>
        </>
    )
}

function Time(){
    return (
        <>
            <ul>
                <li>In a similar vain, it's also very difficult and daunting to approach such a project</li>
                <li>This is perpetuated by the lack of time many students see</li>
                <li>Between classes, homework, health, and other commitments, it can be hard to find the time and energy to work</li>
                <li>I push through this one by time-blocking. Each day, I set an hour aside to work, and once I get in the groove I usually don't want to stop</li>
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

function Money(){
    return (
        <>
            <ul>
                <li>The most present and obvious constraint in this project is money</li>
                <li>Projects that need as much storage and real-time data as ours are prone to becoming very computationally expensive</li>
                <li>I think the best way to navigate this is to begin by putting most effort into our models</li>
                <li>Users will come for the accuracy, and then we can scale to add more features</li>
            </ul>
        </>
    )
}

const feature_map = {
    'Predictor' : {
        'title' : 'Sports Predictions: ',
        'subtitle' : '',
        'description' : <Predictions />,
        'color' : 'blue'
    },
    'Bankroll' : {
        'title' : 'Bankroll Management: ',
        'subtitle' : '',
        'description' : <Bankroll />,
        'color' : 'green'
    },
    'ModelCreate' : {
        'title' : 'Model Creation:',
        'subtitle' : '',
        'description' : <ModelCreate/>,
        'color' : 'purple'
    },
    'Chat' : {
        'title' : 'Chat Features:',
        'subtitle' : '',
        'description' : <Chat/>,
        'color' : 'pink'
    }
}

const framework_map = {
    'Numpy' : {
        'title' : 'Numpy',
        'subtitle' : 'Modeling',
        'description' : <div />,
        'color' : 'pink'
    },
    'Flask' : {
        'title' : 'Flask',
        'subtitle' : 'API Interface',
        'description' : <div />,
        'color' : 'grey'
    },
    'DynamoDB' : {
        'title' : 'AWS DynamoDB',
        'subtitle' : 'Free Database',
        'description' : <div/>,
        'color' : 'orange'
    },
    'React' : {
        'title' : 'React',
        'subtitle' : 'Interactive Frontend',
        'description' : <div/>,
        'color' : 'blue'
    }
}

const constraints_map = {
    'Money' : {
        'title' : 'Money',
        'subtitle' : '',
        'description' : <Money/>,
        'color' : 'green'
    },
    'Efficiency' : {
        'title' : 'Efficiency',
        'subtitle' : '',
        'description' : <Efficiency />,
        'color' : 'red'
    },
    'Time' : {
        'title' : 'Time',
        'subtitle' : '',
        'description' : <Time />,
        'color' : 'yellow'
    }
}



function LowStakes(){
    return(
        <>
        <a href='https://github.com/dbartolai/sports_analytics_uiuc' className='github'>
            <div className='github-div'>
                <h2 className='github'>Click here to see LowStakes in my Github (Web Deploy Coming Soon!)</h2>
            </div>
        </a>
        <div className='header'>
            <h1 className='story-header'>What is it?</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title='Features: ' module_map={feature_map}/>
        <Group group_title='Frameworks:' module_map={framework_map}/>
        <Group group_title='Constraints:' module_map={constraints_map}/>
        </>
    )
}

export default LowStakes


