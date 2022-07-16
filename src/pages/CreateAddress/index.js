import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Form.module.scss';
import http from '../../http';
import { useNavigate } from 'react-router-dom';
import getCookie from "../../hooks/getCookie";
import { useForm } from 'react-hook-form';


const cx = classNames.bind(styles);


function CreateAddress() {

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const current_user = JSON.parse(getCookie('userin'));

	const navigate = useNavigate();

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
						<h1>Thêm địa điểm của bạn</h1>

						<div>
							<label className="">Địa điểm của bạn là?</label>
							<input type="text" {...register("address_name", { required: "Vui lòng nhập tên địa điểm" })} className={cx("inputForm")}
								placeholder="Nhập tên địa điểm" />
							<p className={cx('validate')}>{errors.address_name?.message}</p>

						</div>
						<div>
							<label>Địa điểm của bạn ở đâu?</label>
							<input type="text" {...register("address_map", { required: "Vui lòng nhập vị trí của địa điểm" })} className={cx("inputForm")}
								placeholder="Nhập vị trí"
							/>
							<p className={cx('validate')}>{errors.address_map?.message}</p>



						</div>
						<div>
							<label>Địa điểm của bạn có gì ?</label>
							<textarea type="text" {...register("address_description", {
								required: "Vui lòng nhập mô tả của địa điểm"
							})} className={cx("inputForm")}
								id="" cols="10" rows="3" placeholder="Nhập mô tả địa điểm"></textarea>
							<p className={cx('validate')}>{errors.address_description?.message}</p>


						</div>
						<div>
							<label>Hình ảnh về địa điểm của bạn</label>
							<input {...register("address_image", { required: "Vui lòng cung cấp ảnh của địa điểm" })} type="file"
								className={cx("uploadFile")} />
							<p className={cx('validate')}>{errors.address_image?.message}</p>


						</div>
						<button type="submit" onClick={handleSubmit(data => {
							data.id_host = current_user.id;
							data.address_image = "chua luu duoc"
							http.post('/address', data).then((res) => {
								navigate('/');
							})
						})} className={cx("submitBtn")}>Tham gia</button>
					</div>
				</div>
			</div>
		</div>
	);

}

export default CreateAddress;