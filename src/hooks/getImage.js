import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const getImage = async (path) => {
    const imageRef = ref(storage, path);
    const url = await getDownloadURL(imageRef);
    return url;
};

export default getImage;