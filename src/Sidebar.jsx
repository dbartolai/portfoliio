import {useState} from 'react';
import './Sidebar.css';




function Link({ text, activePage, setActivePage }){
    let linkClassName = ''
    if (activePage == text){
        linkClassName = 'link-div-active'
    } else {
        linkClassName = 'link-div'
    }
    
    return(
        <>
        <div className={linkClassName} onClick={() => setActivePage(text)}>
            <h5 className='link'>{text}</h5>
        </div>
       
        </>
    )
}

const linkNames = ['Dashboard', 'About Me', 'Tutoring']

function Links({ names, activePage, setActivePage }){

    let links = []
    names.forEach((value) =>
        links.push(<Link text={value} key={value} activePage={activePage} setActivePage={() => setActivePage(value)}/>)
    )
    return (
        <>
        <div className = 'links'>{links}</div>
        </>
    )
}

function Project({ project_name, activePage, setActivePage }){
    let className = ''
    if (activePage==project_name){
        className='section-link-div-active'
    } else {
        className = 'section-link-div'
    }
    return(
        <>
        <div className={className} onClick={() => setActivePage(project_name)}>
            <p className='section-element'>{project_name}</p>
        </div>
        </>
    )
}

function Section({ child_names, section_title, activePage, setActivePage }){
    let projects = []
    child_names.forEach((project_name) =>
        projects.push(<Project project_name={project_name} key={project_name} activePage={activePage} setActivePage={() => setActivePage(project_name)} />)
    )
    return(
        <div className='section'>
            <div className='section-title-div'>
                <h5 className='section-title'>{section_title} </h5>
            </div>
            
            <div className='section-links'>
                {projects}
            </div>
        </div>
    )
}

function Social(){
    return(
        <>
        <div className='section'>
            <div className='section-title-div'>
                <h5 className='section-title'>Reach Me Here</h5>
            </div>
            <div className='section-links'>
                <a href='https://github.com/dbartolai' className='section-link-div'> 
                    <div >
                        <p className='section-element'>Github</p>
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/drake-bartolai/' className='section-link-div'>
                    <div>
                        <p className='section-element' >LinkedIn</p>
                    </div>
                </a>
                <a href='mailto:drakeab2@illinois.edu' className='section-link-div'>
                    <div>
                        <p className='section-element' >Email</p>
                    </div>
                </a>
                    
                
                
            </div>
        </div>
        </>
    )
}

const project_names = ['ClassMate', 'LowStakes']
const experience = ['Sports Analytics Society', 'University of Illinois', 'Acannability']
const socials = ['Github', 'Linkedin', 'Email']
const courses = ['CS 225', 'ECE 220', 'MATH 257', 'CS 173']

function Sidebar({activePage, setActivePage}){

    return(
        <>
        <div className='sidebar'>
            <div className='name-div'>
                <h3 className='name'>Drake Bartolai</h3>
            </div>
            <Links names={linkNames} activePage={activePage} setActivePage={setActivePage}/>
            <Section child_names={experience} section_title='Experience' activePage={activePage} setActivePage={setActivePage}/>
            <Section child_names={project_names} section_title='Projects' activePage={activePage} setActivePage={setActivePage}/>
            <Section child_names={courses} section_title='Coursework' activePage={activePage} setActivePage={setActivePage}/>
            <Social />
        </div>
        </>
    );
}

export default Sidebar