import { 
	Fragment,
	useState,
	useEffect,
	useRef,
	useContext 
} from 'react';
import classNames from 'classnames/bind';
import styles from './ByPhoneNumber.module.scss';
import images from '../../../../../assets/images';
import { RegisterContext } from '../../RegisterContext';
import storeImage from '../../../../../hooks/storeImage';
import deleteImage from '../../../../../hooks/deleteImage';

const cx = classNames.bind(styles);

function Step4() {

	const [activeInput, setActiveInput] = useState(false);
    const [previewAvatar, setPreviewAvatar] = useState(images.userAvatar);

	const context = useContext(RegisterContext);

	const [checkEmpty, setCheckEmpty] = useState(false);

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
			// if(context.formData.avatar !== '')
			//  	deleteImage(context.formData.avatar)
            URL.revokeObjectURL(previewAvatar.preview)
        }
    }, [previewAvatar])
	
    // Xem tạm thời ảnh sau khi ảnh được
    const handlePreviewAvatar = async (e) => {
		if(context.formData.avatar !== '')
		{
		 	deleteImage(context.formData.avatar);
			context.setFormData({ ...context.formData, avatar: ''});
		}
		const file = e.target.files[0]
		const imagePath = await storeImage(file);
		//console.log(imagePath);
		await context.setFormData({ ...context.formData, avatar: imagePath});
		//console.log('0', context.formData);
        file.preview = URL.createObjectURL(file);
		setPreviewAvatar(file);
    }

	useEffect(() => {
		
	}, [])
	
	
	const handleSubmit = () => {
		setCheckEmpty(true)
		
		if(context.formData.nickname)
		{
			//console.log('1', context.formData);
			context.handleSubmit()
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
								onChange={(e) => handlePreviewAvatar(e)}
							/>
						</div>
					</Fragment>
					</label>
				)}
			</div>
			<div className={cx('form-control')}>
				<label htmlFor='nickname'>
					Biệt danh
					<span className={context.formData.nickname ? cx('valid') : cx('hide')}>
						<i className="fa-solid fa-check"></i>
					</span>
					<span className={ context.formData.nickname || !checkEmpty ? cx('hide') : cx('invalid')}>
						<i className="fa-solid fa-xmark"></i>
					</span>
				</label>
				<input 
					type='text' 
					name='nickname' 
					id='nickname' 
					autoComplete='off'
					placeholder='Nhập biệt danh của bạn' 
					value={context.formData.nickname}
					onChange={(e) => 
						context.setFormData({...context.formData, nickname: e.target.value})
					}
					className={!context.formData.nickname && !checkEmpty ? cx('') : context.formData.nickname ? cx('border-success') : cx('border-err')}
				/>
			</div>
			<button
				type='submit'
				className={cx('login')}
				onClick={() => handleSubmit()}
			>
				Đăng ký
			</button>
		</Fragment>
	)
}

export default Step4;