import classNames from 'classnames/bind';
import styles from './Form.module.scss';



const cx = classNames.bind(styles);


function UpdateAdress() {
        // const location = useLocation()
        // const { id_host } = location.state;
        // if(id_host) {

        //         console.log(id_host);
        // }
        // const navigate = useNavigate();

        // const [inputs, setInputs] = useState({ id_host });
        // const handleChange = (event) => {
        //         const name = event.target.name;
        //         const value = event.target.value;
        //         setInputs(values => ({ ...values, [name]: value }))
        // }


        // const submitForm = () => {
        //         http.post('/address', inputs).then((res) => {


        //                 navigate('/');

        //         })
        //         console.log(inputs);

        // }








        return (
                <div>
                        <div className={cx("main-content")}>
                                <div className={cx("container")}>
                                       
                                        <div className={cx("content")}>
                                                <h1>Thêm địa điểm của bạn</h1>

                                                        <div>
                                                                <label className="">Địa điểm của bạn là?</label>
                                                                <input type="text" name="address_name" className={cx("inputForm")}
                                                                       /* value={inputs.address_name || ''}
                                                                        onChange={handleChange}*/ placeholder="Nhập tên địa điểm" />
                                                        </div>
                                                        <div>
                                                                <label>Địa điểm của bạn ở đâu?</label>
                                                                <input type="text" name="address_map" className={cx("inputForm")}
                                                                        /*value={inputs.address_map || ''}
                                                                        onChange={handleChange} */placeholder="Nhập vị trí" />


                                                        </div>
                                                        <div>
                                                                <label>Địa điểm của bạn có gì ?</label>
                                                                <textarea type="text" name="address_description" className={cx("inputForm")}
                                                                        /*value={inputs.address_description || ''}
                                                                        onChange={handleChange}*/ id="" cols="10" rows="3" placeholder="Nhập mô tả địa điểm"></textarea>

                                                        </div>
                                                        <div>
                                                                <label>Hình ảnh về địa điểm của bạn</label>
                                                                <input name="address_image" type="file"
                                                                        /*value={inputs.address_image || ''}
                                                                        onChange={handleChange}*/ className={cx("uploadFile")} />

                                                        </div>
                                                        <button type="submit" /*</div>onClick={submitForm}*/ className={cx("submitBtn")}>Tham gia</button>
                                        </div>
                                </div>
                        </div></div>
        );

}

export default UpdateAdress;