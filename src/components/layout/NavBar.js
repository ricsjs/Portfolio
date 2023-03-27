import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

function NavBar({src, alt}){
    return (
        <nav className={styles.navbar}>
            <div className="container text-center">
                <div className="row row-cols-2">
                    <div className="col">
                        <a href='/'><img className={styles.image} src={src} alt={alt}></img></a>
                    </div>
                    <div className="col">
                        <ul>
                            <li className={styles.liNavbar}>
                                <Link to="/about">About</Link>
                            </li>
                            <li className={styles.liNavbar}>
                                <Link to="/techs">Technologies</Link>
                            </li>
                            <li className={styles.liNavbar}>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar