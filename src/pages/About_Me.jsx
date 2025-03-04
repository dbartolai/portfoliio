import './About_Me.css'
import Headshot from '../assets/headshot.jpg'
import Module from '../Module.jsx'
import Group from '../Group.jsx'
import BornToRun from '../assets/bornToRun.jpg'
import Crash from '../assets/crash.jpg'
import Wallflowers from '../assets/wallflowers.jpeg'
import Midnight from '../assets/midnight_library.jpeg'
import Ten from '../assets/1004.jpg'
import Borrower from '../assets/borrower.jpg'
import Eagles from '../assets/Eagles.webp'
import Graceland from '../assets/Graceland.jpeg'
import Playground from '../assets/Playground.jpg'

function WelcomeDescription(){
    return (
        <>
            <li>I'm Drake, a second year Computer Engineer (and aspiring Software Engineer) at UIUC</li>
            <li>Located in Chicago, IL and Urbana, IL</li>
            <li>I tutor, study, play basketball, and write computer programs</li>
            <li>Working to take advantage of my talents and provide value to my community</li>
            <li>Check out my favorite music and books below</li>
        </>
    )
}


function AboutMeHeader(){
    return (
        <>
            <div className='about-me-header'>
                <img src={Headshot} alt='Headshot' className='headshot'/>
                <Module module_title='Welcome to my Website!' module_description={<WelcomeDescription/>} module_color='purple'/>
            </div>
        </>
    )
}

const song_list = {
    'Thunder Road' : {
        'title' : 'Thunder Road',
        'subtitle' : 'Bruce Springsteen',
        'description' : <img src={BornToRun} className='album'/>,
        'color' : 'grey',
        'is_song' : true
    },
    'Two Step' : {
        'title' : 'Two Step',
        'subtitle' : 'Dave Matthews Band',
        'description' : <img src={Crash} className='album'/>,
        'color' : 'blue',
        'is_song' : true
    },
    'One Headlight' : {
        'title' : 'One Headlight',
        'subtitle' : 'The Wallflowers',
        'description' : <img src={Wallflowers} className='album'/>,
        'color' : 'yellow',
        'is_song' : true
    },
    'Lyin\' Eyes' : {
        'title' : 'Lyin\' Eyes',
        'subtitle' : 'Eagles',
        'description' : <img src={Eagles} className='album'/>,
        'color' : 'green',
        'is_song' : true
    },
    'You Can Call Me Al' : {
        'title' : 'You Can Call Me Al',
        'subtitle' : 'Paul Simon',
        'description' : <img src={Graceland} className='album'/>,
        'color' : 'red',
        'is_song' : true
    }
}

const book_list = {
    'Midnight Library' : {
        'title' : 'The Midnight Library',
        'subtitle' : 'Matt Haig',
        'description' : <img src={Midnight} className='album'/>,
        'color' : 'blue',
        'is_song' : true
    },
    '10:04' : {
        'title' : '10:04',
        'subtitle' : 'Ben Lerner',
        'description' : <img src={Ten} className='album'/>,
        'color' : 'grey',
        'is_song' : true
    },
    'Borrower' : {
        'title' : 'The Borrower',
        'subtitle' : 'Rebecca Makkai',
        'description' : <img src={Borrower} className='album'/>,
        'color' : 'pink',
        'is_song' : true
    },
    'Playground' : {
        'title' : 'Playground',
        'subtitle' : 'Richard Powers',
        'description' : <img src={Playground} className='album'/>,
        'color' : 'orange',
        'is_song' : true
    }
}

function About_Me(){
    return (
        <>
        <AboutMeHeader />
        <Group group_title='Go Listen:' module_map={song_list}/>
        <Group group_title='Go Read:' module_map={book_list}/>
        </>
    )
}
export default About_Me