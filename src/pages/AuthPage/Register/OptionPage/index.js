import { Fragment, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './OptionPage.module.scss';
import images from '../../../../assets/images';
import { RegisterContext } from '../RegisterContext';


const cx = classNames.bind(styles);

function OptionPage({ handleSetPage }) {

	const getErr = useContext(RegisterContext);

    return ( 
        <Fragment>
            <span className={cx('title')}>
				Tham gia vào cộng đồng  
				<span className={cx('subtitle')}> AmazingTrip</span>
			</span>
			<button 
				onClick={() => getErr.handleSetPage(true)}
				className={cx('btn-control')}
			>
				<i className="fa-regular fa-user"></i>
				<span className={cx('optionContent')}>Sử dụng SĐT</span>
			</button>

			<button className={cx('btn-control')}>
				<img src={images.google} alt='Google' />
				<span className={cx('optionContent')}>Tiếp tục với Google</span>
			</button>
			<button className={cx('btn-control')}>
				<img src={images.facebook} alt='facebook' />
				<span className={cx('optionContent')}>
					Tiếp tục với Facebook
				</span>
			</button>
        </Fragment>
    );
}

export default OptionPage;