import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import http from '../../http';
import styles from './ListAddresses.module.scss'
import { Link } from 'react-router-dom';
import getCookie from '../../hooks/getCookie';
import addressApi from '../../api/addressApi';

const cx = classNames.bind(styles);


const ListAddresses = () => {
    const [addresses, setAddresses] = useState([]);
    const userData = JSON.parse(getCookie('userin'));

    useEffect(() => {
        const fetchAddresList = async () => {
            if(userData.role == '2')
            {
                try {
                    const res = await addressApi.getAll();
                    setAddresses(res.data);
                } catch (error) {
                    console.log('Toang meo chay r loi cc: ', error);
                }
            } else {
                try {
                    const res = await addressApi.getAllHostAddress(userData.id);
                    setAddresses(res.data);
                } catch (error) {
                    console.log('Toang meo chay r loi cc: ', error);
                }
            }
        }

        fetchAddresList();
    }, [])
    return (
        <div className={cx('wrapper')} style={{ height: '1000px' }}>
            {
                addresses?.map((address, index) =>
                (
                    <Link to={`/address/${address.address_id}`}  key={index} >
                        <h2 key={index}>{address.address_name}</h2>
                    </Link>
                )
                )

            }

        </div>
    )
}

export default ListAddresses
