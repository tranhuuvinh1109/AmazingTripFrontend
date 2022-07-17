import { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import getCookie from "../../../../../hooks/getCookie";
import discountApi from '../../../../../api/discountApi';


const cx = classNames.bind(styles);


function CreateAddress() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [inputData, setInputData] = useState({
		address_id: id,
		number_registed: 0,
		time_start: '',
		time_finish: '',
		discount_rate: '',
		discount_quantity: '',
	});

	const {
		register,
		formState: { errors },
	} = useForm({ inputData });

	const handleSubmit = async (e) => {
		e.preventDefault();
        try {
			const res = await discountApi.post(inputData);
			toast.success('Thêm giảm giá thành công !!!', {
				toastId: 1,
			});
			navigate(-1);
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
						<h1>Thêm khuyến mãi</h1>
						<div className={cx('form-control')}>
							<label htmlFor='time_start'>Thời điểm bắt đầu: </label>
							<input 
								type="date" 
								id='time_start'
								{...register("time_start", { required: "Vui lòng nhập ngày bắt đầu" })}
								value={inputData.time_start}
								onChange={(e) => {
									setInputData({...inputData, time_start: e.target.value})
								}}
								placeholder="Nhập tên địa điểm" 
							/>
							<p className={cx('validate')}>{errors.time_start?.message}</p>

						</div>
						<div className={cx('form-control')}>
							<label htmlFor='time_finish'>Thời điểm kết thúc: </label>
							<input 
								type="date" 
								id='time_finish'
								{...register("time_finish", { required: "Vui lòng nhập ngày kết thúc" })}
								value={inputData.time_finish}
								onChange={(e) => {
									setInputData({...inputData, time_finish: e.target.value})
								}}
								placeholder="Nhập tên địa điểm" 
							/>
							<p className={cx('validate')}>{errors.time_finish?.message}</p>
						</div>
						<div className={cx('form-control')}>
							<label htmlFor='discount_rate'>Mức giảm giá: </label>
							<input 
								type="number" 
								id='discount_rate'
								{...register("discount_rate", { required: "Vui lòng mức giảm giá" })}
								value={inputData.discount_rate}
								onChange={(e) => {
									setInputData({...inputData, discount_rate: e.target.value})
								}}
								placeholder="Nhập tên địa điểm" 
							/>
							<p className={cx('validate')}>{errors.discount_rate?.message}</p>
						</div>
						<div className={cx('form-control')}>
							<label htmlFor='discount_quantity'>Số lượng giảm giá: </label>
							<input 
								type="number" 
								id='discount_quantity'
								{...register("discount_quantity", { required: "Vui lòng nhập số lượng" })}
								value={inputData.discount_quantity}
								onChange={(e) => {
									setInputData({...inputData, discount_quantity: e.target.value})
								}}
								placeholder="Nhập tên địa điểm" 
							/>
							<p className={cx('validate')}>{errors.discount_quantity?.message}</p>
						</div>
						<div className={cx('submit')}>
							<button 
								type="submit" 
								onClick={(e) => handleSubmit(e)} 
								className={cx('btn-submit')}
							>
								Thêm giảm giá
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);

}

export default CreateAddress;