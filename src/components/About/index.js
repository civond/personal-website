import './index.scss'
import Skills from './skills'
import Personalpic from '../../assets/images/personalpic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'




const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <div className='header-animation'>
                    <h1>
                    About me
                    </h1>
                </div>
                <div className='text-animation1'>
                    <p>
                        I am a ambitious M.S. Biomedical Engineering candidate attending New York University looking for a role with opportunities to work alongside other like-minded individuals to push the current boundaries of biomedical research!
                    </p>
                </div>
                <div className='text-animation2'>
                    <p>
                        I am a computational neuroscientist by trade, and thus my research interests are primarily directed in that field with the use of machine learning and other advanced data analysis techniques. 
                        Specifically, I wish to further our current understanding of neural circuits that underly locomation and behavior by creating predictive models.
                        I strongly believe that further research in this field is precedes great innovation in the design and manufacturing of next-generation biomedical devices!!!
                    </p>
                </div>
                <div className='text-animation3'>
                    <p>
                        If I could describe myself in one sentence, it would be: "Naturally curious and always looking for ways to improve myself and help those around me."!!
                        If you are interested in learning more specifics about my background, please refer to my CV~
                    </p>            
                </div>
            </div>
            
            <div className='image-container'>
                <img src={Personalpic} alt='profile-pic'/>
            </div>
            <div className='icon-list'>
                <h2>Links</h2>
                <ul>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://drive.google.com/file/d/1uuB2IbEvSipSLSyAbDdTMuGUbqA074LN/view?usp=sharing">
                        <div className='button-wrapper'><FontAwesomeIcon icon= {faNoteSticky} color="#4d4d4e"/> Curriculum vitae</div> 
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-yeh/">
                        <div className='button-wrapper'><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> LinkedIn</div>
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://github.com/civond">
                        <div className='button-wrapper'><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> GitHub</div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <Skills/>
        </div>
    )
}

export default About