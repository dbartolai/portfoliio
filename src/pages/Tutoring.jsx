import './Tutoring.css'
import Group from '../Group.jsx'

function STEM(){
    return (
        <>
            <ul>
                <li>Assist with students enrolled in STEM high school courses</li>
                <li>This includes homework help in calculus, AP Physics, AP Chem, and more</li>
                <li>I also help students build good study and organization habits as they navigate high school</li>
            </ul>
        </>
    )
}

function HS(){
    return (
        <>
            <ul>
                <li>Work with students as they prepare for the HSPT or CPS exams</li>
                <li>I administer a diagnostic exam to adjust the cirriculum based on each student's needs</li>
                <li>Start anytime! Students have had success with anywhere from one week to several months of review</li>
            </ul>
        </>
    )
}

function SAT(){
    return (
        <>
            <ul>
                <li>Work with students who have been able to boost their SAT scores over 150 points (from PSAT to SAT)</li>
                <li>Assist with the entire application process, landing students into Gies Business, Kelly Business, and more</li>
                <li>Help keep students on track through a very rigorous and draining process, while acting as a support system</li>
            </ul>
        </>
    )
}

const story = 'Back in my junior year of high school, I was a volunteer flag football and basketball coach for ICSJ, my old middle school. I coached the 8th graders, who were in the process of applying to high schools. They had been coming to me for advice on the admissions process, and I offered as much help as I could between reps at practice. Upon further reflection, I realized I could be truly beneficial to the students. That\'s when I began to offer my services. Four years later, I\'ve helped over a dozen clients land acceptances into high school and college.'

const subject_map = {
    'STEM' : {
        'title' : 'STEM Courses',
        'subtitle' : 'Math, Physics, Chemistry, etc.',
        'description' : <STEM />,
        'color' : 'blue'
    },
    'HS' : {
        'title' : 'High School',
        'subtitle' : 'HSPT & CPS Selective Enrollment',
        'description' : <HS />,
        'color' : 'purple'
    },
    'SAT' : {
        'title' : 'College',
        'subtitle' : 'SAT, ACT, Essays',
        'description' : <SAT />,
        'color' : 'red'
    }
}

function Tutoring(){
    return(
        <>
        <div className='tutoring-header'>
            <h1 className='story-header'>My Story:</h1>
            <p className='story'>{story}</p>
        </div>
        <Group group_title='Disciplines:' module_map={subject_map} />
        </>
    )
}

export default Tutoring