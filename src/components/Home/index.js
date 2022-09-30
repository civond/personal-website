import './index.scss'
import Logo from '../../assets/images/test2.png'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1><div className='firstLine'>Hello/你好/こんにちは!</div>
                    My name is
                    <br/>
                     Dorian!
                    <img src= {Logo} alt='logo' />
                </h1>
                <h2>Graduate student @ New York University</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            
        </div>
    )
}

export default Home