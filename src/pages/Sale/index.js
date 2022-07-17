import React from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import http from '../../http';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

function Sale() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		time_start: "",
		time_finish: "",
		discount_rate: 0,
		discount_quantity: 0
	});

	const navigate = useNavigate();
	const { id } = useParams();
	return (
		<div>
			<div className={cx("main-content")}>
				<div className={cx("container")}>
					<div className={cx("image")}>
						<h1>
							Cùng gia nhập<br />
							đại gia đình <span className={cx("nameWeb")}>AmazingTrip</span>
						</h1>
					</div>
					<div className={cx("content")}>
						<h1>Thêm khuyến mãi </h1>
						<div>
							<label className="">Thời gian bắt đầu</label>
							<input type="date" {...register("time_start", { required: "Vui lòng nhập ngày bắt đầu" })} className={cx("inputForm")}
								placeholder="Nhập tên địa điểm" />
							<p className={cx('validate')}>{errors.time_start?.message}</p>
						</div>
						<div>
							<label>Thời gian kết thúc</label>
							<input type="date" {...register("time_finish", { required: "Vui lòng nhập ngày kết thúc" })} className={cx("inputForm")}
								placeholder="Nhập vị trí" />
							<p className={cx('validate')}>{errors.time_finish?.message}</p>
						</div>
						<div>
							<label>Mức giảm giá {'(%)'}</label>
							<input type="number" {...register("discount_rate", { required: "Vui lòng mức giảm giá" })} className={cx("inputForm")}
							/>
							<p className={cx('validate')}>{errors.discount_rate?.message}</p>
						</div>
						<div>
							<label>Số lượng</label>
							<input type="number" {...register("discount_quantity", { required: "Vui lòng nhập số lượng" })} className={cx("inputForm")}
							/>
							<p className={cx('validate')}>{errors.discount_quantity?.message}</p>
						</div>
						<button type="submit" onClick={handleSubmit((data) => {
							if (data.time_finish <= data.time_start) {
								if (data.discount_rate > 100) {
									alert("Ngày kết thúc phải lớn ngày bắt đầu && Mức giảm giá nhỏ hơn hoặc bằng 100%")
								}
								else {
									alert("Ngày kết thúc phải lớn ngày bắt đầu")
								}
							}
							else if (data.discount_rate > 100) {
								alert("Mức giảm giá nhỏ hơn hoặc bằng 100%")
							}
							else {
								data.address_id = id;
								data.number_registed = 0;
								http.post('/discount', data).then((res) => {
									navigate('/');
								})
							}
						})} className={cx("submitBtn")}>Thêm</button>
					</div>
				</div>
			</div></div>
	);

}

export default Sale;