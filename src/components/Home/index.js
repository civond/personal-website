import './index.scss'
import Logo from '../../assets/images/otter.png'

import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className='text-zone'>
                    <h1><div className='firstline'>Hello/你好/こんにちは!</div>
                    <div className='secondline'>My name is</div>
                        
                        <div className='thirdline'>Dorian!
                        </div>
                        
                    </h1>
                    <div className='othertext'>
                        <h2>Graduate student @ New York University</h2>
                        <Link to="/contact" className='flat-button'>
                            CONTACT ME
                        </Link>
                    </div>
                </div>
            </div>

            <div className='logo-container'>
                <img src={ Logo } alt='otter' />
            </div>
        </>
    )
}

export default Home