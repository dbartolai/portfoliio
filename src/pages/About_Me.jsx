import './About_Me.css'
import Headshot from '../assets/headshot.jpg'
import Module from '../Module.jsx'
import Group from '../Group.jsx'
import BornToRun from '../assets/bornToRun.jpg'
import Crash from '../assets/crash.jpg'
import Wallflowers from '../assets/wallflowers.jpeg'

function WelcomeDescription(){
    return (
        <>
            <li>I'm Drake, a second year Computer Engineer at UIUC</li>
            <li>Located in Chicago, IL and Urbana, IL</li>
            <li>I tutor, study, play basketball, and write computer programs</li>
            <li>My goal is to use my abilities to provide value to my community</li>
        </>
    )
}


function AboutMeHeader(){
    return (
        <>
            <div className='about-me-header'>
                <img src={Headshot} alt='Headshot' className='headshot'/>
                <Module module_title='Welcome to my Website!' module_description={<WelcomeDescription/>} module_color='blue'/>
            </div>
        </>
    )
}

const song_list = {
    'Thunder Road' : {
        'title' : 'Thunder Road',
        'subtitle' : 'Bruce Springsteen',
        'description' : <img src={BornToRun} className='album'/>,
        'color' : 'green'
    },
    'Two Step' : {
        'title' : 'Two Step',
        'subtitle' : 'Dave Matthews Band',
        'description' : <img src={Crash} className='album'/>,
        'color' : 'red'
    },
    'One Headlight' : {
        'title' : 'One Headlight',
        'subtitle' : 'The Wallflowers',
        'description' : <img src={Wallflowers} className='album'/>,
        'color' : 'orange'
    }
}


function About_Me(){
    return (
        <>
        <AboutMeHeader />
        <Group group_title='Go Listen:' module_map={song_list}/>
        </>
    )
}
export default About_Me