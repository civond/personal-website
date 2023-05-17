import './index.scss'
import { Displaydata } from './Displaydata'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Display = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [appState, changeState] = useState({
        activeObject: {index: 0}

    })

    function toggleActive(index) {
        changeState({...appState, activeObject: {index}})
    }
    console.log('active id')
    console.log(appState.activeObject)

    return (
        
        <>
            <div className='project-text'>
                {Displaydata.map((item, index) => {
                    console.log('the item id')
                    console.log(item.id)

                    function toggleActiveStyles(index) {
                        if (item.id === appState.activeObject) {
                            return "active-button-wrapper"
                            
                        } else {
                            return "button-wrapper"
                        }
                    }

                    return (
                        <>

                            <li className={toggleActiveStyles(index)}>
                                <div 
                                onClick={() => {setTabIndex(index);toggleActive(index)}}>
                                    {item.name}            
                                </div>
                            </li>             
                        </>
                    );   
                })}
            </div>
            
            <div className='project-display'>
                
                <h2><a target = "_blank" rel="noreferrer" href={Displaydata[tabIndex].link}>
                    {Displaydata[tabIndex].name} <FontAwesomeIcon icon={faLink}/>
                    </a>
                </h2> 
                <div >
                    {Displaydata[tabIndex].content}
                </div> <br/>
                <div className='img-container'>
                    <img src={Displaydata[tabIndex].image} alt='proj_image'/>
                </div>
            </div>
   
        </>
    )
}

export default Display