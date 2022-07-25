
import { Wrapper as PopperWrapper } from '../../Popper';
import { useEffect, useState, useRef } from 'react';
import AccountItem from '../AccountItem';
import AddressItem from '../AddressItem';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import getImage from '../../../../hooks/getImage';
import useDebounce from '../../../../hooks/useDebounce';

const cx = classNames.bind(styles)
function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [searchAddressResult, setSearchAddressResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();
    const debounced = useDebounce(searchValue, 500)


    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            setSearchAddressResult([])
            return;
        }
        setLoading(true);

        fetch(`http://localhost:8000/api/search=${encodeURIComponent(debounced)}`)
            .then((res) => res.json())
            .then((res) => {
                // res.user?.map( async (each) => {
                //     if (each.avatar !== null) {
                //         const image = await getImage(each.avatar);
                //         each.avatar = image;
                //     }
                // })
                // if (res.address_image !== null) {
                //     const image = await getImage(res.address_image);
                //     res.address_image = image;
                // }
                setSearchResult(res.user);
                setSearchAddressResult(res.address)
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [debounced])
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        setSearchAddressResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive
            visible={showResult && searchResult?.length > 0 || searchAddressResult?.length > 0}
            render={attrs => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {
                            searchResult &&
                            <>
                                <div className={cx('search-title')}>
                                    Accounts
                                </div>

                                {searchResult.map((result) => (
                                    // console.log(result)
                                    < AccountItem key={result.id} data={result} />
                                ))}
                            </>
                        }


                        {
                            searchAddressResult && 
                            <>
                                <div className={cx('search-title')}>
                                    Address
                                </div>
                                
                                {searchAddressResult.map((result) => (
                                    // console.log(result)
                                    < AddressItem key={result.address_id} data={result} />
                                ))}
                            </>
                        }
                    </div>
                </PopperWrapper>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search-bar')}>
                <form action="#" className={cx('input-group')}>
                    <div className={cx('d-sm-flex align-items-center')} style={{ position: "relative" }}>


                        <span className={cx('search-icon')}><i className={cx('fa-solid fa-magnifying-glass me-sm-2')}></i></span>
                        <input
                            ref={inputRef}
                            className={cx('flex-grow-1')} type="text" placeholder="Nơi bạn muốn tới..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClear}>
                                <i className={cx('fa-solid fa-circle-xmark')}></i>
                            </button>
                        )}

                        {loading &&
                            <span className={cx('loading')}>
                                <i className={cx('fa-solid fa-spinner')}></i>
                            </span>
                        }
                    </div>
                </form>
            </div>
        </Tippy>
    );
}

export default Search;