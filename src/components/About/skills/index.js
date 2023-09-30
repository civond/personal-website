import './index.scss'

const Skills = () => {
    return (
        <>
        <div className='wrapper'>
            <div className='pub-container'>
            <h2>Publications</h2><hr/>
                <ol>
                    <li>
                        <a target = "_blank" rel="noreferrer" href="https://elifesciences.org/articles/58523">
                            <div className='button-wrapper'>Sniff-synchronized, gradient-guided olfactory search by freely moving mice.</div>
                        </a>
                    </li>  
                </ol>  

            </div>
            <div className='skill-container'>
                <h2>Languages</h2>
                <hr/>
                    <ul>
                        <li>Python</li>
                        <li>C / C++</li>
                        <li>Assembly</li>
                        <li>MATLAB</li>
                        <li>JavaScript</li>
                        <li>R</li>
                    </ul>        
            </div>

        <div className='skill-container'>
            <h2>Tools</h2>
            <hr/>
                <ul>
                    <li>Anaconda</li>
                    <li>MongoDB</li>
                    <li>Simulink</li>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AutoCAD</li>
                </ul>
        </div>
        <div className='skill-container'>
        <h2>Platforms</h2>
        <hr/>
            <ul>
                <li>DeepLabCut</li>
                <li>TweetyNet</li>
                <li>Google CoLabs</li>
                <li>AWS</li>
            </ul>
        </div>
    </div>
    </>
    )
}
export default Skills