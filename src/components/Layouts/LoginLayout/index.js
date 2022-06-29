import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginLayout.module.scss';
import images from '../../../assets/images';
const cx = classNames.bind(styles);

export default function LoginLayout({ children }) {
        return (
                <div className = {cx('wrapper')}> 
                        <div className = {cx('container')}>
                                <Link to='/'>
                                        <img src={images.logo} className={cx('nav-logo')} alt='logo' />
                                </Link>
                                {children}
                        </div>
                </div>
        )
}
