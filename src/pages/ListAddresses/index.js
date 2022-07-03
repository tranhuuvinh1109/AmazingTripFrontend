import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind';
import http from '../../http';
import styles from './ListAddresses.module.scss'
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);


const ListAddresses = () => {
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        http.get('/address').then(res => {
            setAddresses(res.data.data);
        })

    }, ["adderesses"])
    return (
        <div className={cx('wrapper')} >
            {
                addresses.map((address, index) =>
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
