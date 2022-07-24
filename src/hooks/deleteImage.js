import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase';

const deleteImage = (path) => {
    const imageRef = ref(storage, path);
    deleteObject(imageRef);
};

export default deleteImage;