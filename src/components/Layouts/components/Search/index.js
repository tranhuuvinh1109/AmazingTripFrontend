
import { Wrapper as PopperWrapper } from '../../Popper';
import { useEffect, useState, useRef } from 'react';
import AccountItem from '../AccountItem';
import Tippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss'

const cx = classNames.bind(styles)
function Search() {

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();



    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [searchValue])
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <PopperWrapper>
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <div className={cx('search-title')}>
                            Accounts
                        </div>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
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