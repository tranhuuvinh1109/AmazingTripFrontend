import { 
	Fragment,
	useState,
	useEffect,
	useRef 
} from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import images from '../../../../../assets/images';
import authApi from '../../../../../api/authApi';

const cx = classNames.bind(styles);

function Step4({ formData, setFormData }) {

	const [activeInput, setActiveInput] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(images.userAvatar);

    // effect bắt sự kiện nhấp chuột vào ảnh hiện lên cửa sổ input
    const inputRef = useRef();
    useEffect(() => {
        const handler = (e) => {
            if(inputRef.current.contains(e.target))
                setActiveInput(true)
            if(!inputRef.current.contains(e.target))
                setActiveInput(false)
        }


        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })


    // Xóa ảnh xem tạm thời
    useEffect(() => {
        
        return () => {
            URL.revokeObjectURL(previewAvatar.preview)
        }
    }, [previewAvatar])

    // Xem tạm thời ảnh sau khi ảnh được
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setPreviewAvatar(file)
    }


	// Form Submit
	const handlerSubmit = () => {
		const { confirmPassword, ...postData } = formData;
		console.log(postData);
		try {
			//console.log(formData);
			authApi.postRegister(postData);
		} catch (error) {
			console.log('Toang meo chay roi loi cc: ', error);
		}
	}

	return (
		<Fragment>
			<h3 className={cx('title')}>Đăng ký</h3>
			<div
				ref={inputRef} 
				className={cx('input-ava')}
			>
				<img 
					src={ previewAvatar.preview || images.defaultava}
				/>
				{ activeInput && (
					<label htmlFor="avatar" className={cx('avatar')}>
					<Fragment>
						<div className={cx('camera-icon')}>
							<i className="fa-solid fa-camera"></i>
						</div>
						<div className={cx('input-ava')}>
							<input 
								type="file" 
								id="avatar"
								onChange={handlePreviewAvatar}
							/>
						</div>
					</Fragment>
					</label>
				)}
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='nickname'>Biệt danh</label>
				<input 
					type='text' 
					name='nickname' 
					id='nickname' 
					placeholder='Nhập biệt danh của bạn' 
					value={formData.nickname}
					onChange={(e) => 
						setFormData({...formData, nickname: e.target.value})
					}
				/>
			</div>
			<button
				type='submit'
				className={cx('login')}
				onClick={() => handlerSubmit()}
			>
				Đăng ký
			</button>
		</Fragment>
	)
}

export default Step4;