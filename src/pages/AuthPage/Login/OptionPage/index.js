import { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './OptionPage.module.scss';
import images from '../../../../assets/images';


const cx = classNames.bind(styles);

function OptionPage({ handleSetPage }) {


    return ( 
        <Fragment>
            <span className={cx('title')}>
				Cùng 
				<span className={cx('subtitle')}> AmazingTrip </span>
				khám phá thế giới
			</span>
			<button 
				onClick={() => handleSetPage(true)}
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