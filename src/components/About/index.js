import './index.scss'
import Personalpic from '../../assets/images/personalpic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'




const About = () => {
    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                   About me
                </h1>
                <p>
                    I am a ambitious M.S. Biomedical Engineering candidate attending New York University looking for a role with opportunities to work alongside other like-minded individuals to push the current boundaries of biomedical research!
                </p>
                <p>
                    I am a computational neuroscientist by trade, and thus my research interests are primarily directed in that field with the use of machine learning and other advanced data analysis techniques. 
                    Specifically, I wish to further our current understanding of neural circuits that underly locomation and behavior by creating predictive models.
                    I strongly believe that further research in this field is precedes great innovation in the design and manufacturing of next-generation biomedical devices!!!
                </p>
                <p>
                    If I could describe myself in one sentence, it would be: "Naturally curious and always looking for ways to improve myself and help those around me."!!
                </p>

                
                
            </div>
            <div className='right-container'>
            <img src={Personalpic} alt='profile-pic'/>
                <div>
                <ul>
                     <li>
                        <a target = "_blank" rel="noreferrer" href="https://drive.google.com/file/d/1uuB2IbEvSipSLSyAbDdTMuGUbqA074LN/view?usp=sharing">
                        <FontAwesomeIcon icon= {faNoteSticky} color="#4d4d4e"/> Curriculum vitae
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://www.linkedin.com/in/d-yeh/">
                            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> LinkedIn
                        </a>
                    </li>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://github.com/civond">
                            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> GitHub
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default About