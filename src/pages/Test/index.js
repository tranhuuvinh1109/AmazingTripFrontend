import { useState } from 'react';
import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import styles from './Test.module.scss';
import storeImage from '../../hooks/storeImage';
import getImage from '../../hooks/getImage';
import deleteImage from '../../hooks/deleteImage';
import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase';


const cx = classNames.bind(styles);

function Test() {

    const [imageUpload, setImageUpload] = useState(null);
    const [listImage, setListImage] = useState('');

    const handleUpload = async () => {
        if(imageUpload === null) return;
        const imagePath = await storeImage(imageUpload);
        setListImage(imagePath);
        console.log(listImage);
    }

    const handleDelete = () => {
        deleteImage(listImage);
        toast.warning('Xoa cmn anh roi !!!');
    }

    return ( 
        <div className={cx('container')}>
            <h1>Test Page</h1>
            <div>
                <input
                    type="file"
                    onChange={(e) => setImageUpload(e.target.files[0])}
                />
                <button
                    onClick={handleUpload}
                >
                    Tải ảnh lên
                </button>
                <br/>
                <button
                    onClick={handleDelete}
                >
                    Xóa ảnh
                </button>
            </div>
        </div>
    );
}

export default Test;