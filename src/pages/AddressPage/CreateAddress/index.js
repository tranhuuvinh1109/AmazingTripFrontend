import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Dropzone from 'react-dropzone';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import getCookie from '../../../hooks/getCookie';
import storeImage from '../../../hooks/storeImage';
import addressApi from '../../../api/addressApi';

const cx = classNames.bind(styles);


function CreateAddress() {
	const navigate = useNavigate();
	const userData = JSON.parse(getCookie('userin'));
	const btnDelRef = useRef();

	const {
		register,
		formState: { errors },
	} = useForm();

	const [previewAvatar, setPreviewAvatar] = useState('');
	const [showDelete, setShowDelete] = useState(false);
	const [delAble, setDelAble] = useState(false);

	const [inputData, setInputData] = useState({
		id_host: userData.id,
		address_name: '',
		address_map: '',
		address_description: '',
		address_image: '',
	});

	const handleDrop = async (e) => {
        const file = e[0];
        
        file.preview = URL.createObjectURL(file);
        setPreviewAvatar(file);
        const image = await storeImage(file);
		setInputData({ ...inputData,  address_image: image});
    }

	const handleDel = () => {
        URL.revokeObjectURL(previewAvatar.preview);
        setPreviewAvatar('');
        setShowDelete(false);
        setDelAble(false);
    }

	const handleSubmit = async (e) => {
		e.preventDefault();
        try {
			const res = await addressApi.post(inputData);
			toast.success('Thêm địa điểm thành công !!!', {
				toastId: 1,
			});
			navigate(`/address/${res.data.address_id}`)
		} catch (error) {
			console.log('Toang meo chay r loi cc: ', error);
		}
    }


	return (
		<>
			<div className={cx("main-content")}>
				<div className={cx("form-container")}>
					<div className={cx("image")}>
						<h1>
							Cùng gia nhập<br />
							đại gia đình <span className={cx("nameWeb")}>AmazingTrip</span>
						</h1>
					</div>
					<div className={cx("content")}>
						<h1>Thêm địa điểm của bạn</h1>
						<div className={cx('form-control')}>
							<label htmlFor='address-name'>Địa điểm của bạn là?</label>
							<input 
								type="text" 
								id='address-name'
								{...register("address_name", { required: "Vui lòng nhập tên địa điểm" })} className={cx("inputForm")}
								value={inputData.address_name}
								onChange={(e) => {
									setInputData({...inputData, address_name: e.target.value})
								}}
								placeholder="Nhập tên địa điểm" 
							/>
							<p className={cx('validate')}>{errors.address_name?.message}</p>

						</div>
						<div className={cx('form-control')}>
							<label htmlFor='address-location'>Địa điểm của bạn ở đâu?</label>
							<input 
								type="text"
								id='address-location' 
								{...register("address_map", { required: "Vui lòng nhập vị trí của địa điểm" })} className={cx("inputForm")}
								value={inputData.address_map}
								onChange={(e) => {
									setInputData({...inputData, address_map: e.target.value})
								}}
								placeholder="Nhập vị trí"
							/>
							<p className={cx('validate')}>{errors.address_map?.message}</p>



						</div>
						<div className={cx('form-control')}>
							<label htmlFor='address-des'>Địa điểm của bạn có gì ?</label>
							<textarea 
								type="text" 
								id='address-des' 
								{...register("address_description", {
								required: "Vui lòng nhập mô tả của địa điểm" })}
								className={cx("inputForm")}
								cols="10" rows="3" 
								placeholder="Nhập mô tả địa điểm"
								value={inputData.address_description}
								onChange={(e) => {
									setInputData({...inputData, address_description: e.target.value})
								}}
							/>
							<p className={cx('validate')}>{errors.address_description?.message}</p>


						</div>
						<div className={cx('form-control')}>
							<label htmlFor='address-img'>Hình ảnh về địa điểm của bạn</label>
							<Dropzone 
								onDrop={(e) => handleDrop(e)}
								noClick={delAble}
							>
								{({getRootProps, getInputProps}) => (
									<div
										className={cx('drop-zone')} 
										{...getRootProps()}
										onMouseOver={() => setShowDelete(true)}
										onMouseOut={() => setShowDelete(false)}
									>
										<input
											id='post-image'
											{...getInputProps()} 
										/>
										<div className={cx('camera-icon')} >
											<i className='fa-solid fa-camera'></i>
										</div>
										{ previewAvatar !== '' && (
											<div className={cx('preview-image')}>
												<img 
													src={previewAvatar.preview}
												/>
												{ showDelete && (
													<div className={cx('del-area')}>
														<button
															ref={btnDelRef}
															className={cx('btn-del')}
															onClick={() => handleDel()}
															onMouseOver={() => setDelAble(true)}
															onMouseOut={() => setDelAble(false)}
														>
															<i className="fa-solid fa-circle-xmark"></i>
														</button>
													</div>
												)}
											</div>
										)}
									</div>
								)}
							</Dropzone>
							<p className={cx('validate')}>{errors.address_image?.message}</p>
						</div>
						<div className={cx('submit')}>
							<button 
								type="submit" 
								onClick={(e) => handleSubmit(e)} 
								className={cx('btn-submit')}
							>
								Tham gia
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);

}

export default CreateAddress;