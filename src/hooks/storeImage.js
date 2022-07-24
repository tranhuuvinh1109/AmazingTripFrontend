import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { storage } from '../firebase';

const storeImage = async (image) => {
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    const res = await uploadBytes(imageRef, image);
    const path = res.metadata.fullPath;
    return path;
};

export default storeImage;