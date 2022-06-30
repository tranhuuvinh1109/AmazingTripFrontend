import Cookie from 'js-cookie';

const setCookie = (cookiename, userin) => {
    Cookie.set(cookiename, userin, {
        expires: 1, // 1 ngày
        secure: true,
        sameSite: 'strict',
        path: '/'
    });
};

export default setCookie;