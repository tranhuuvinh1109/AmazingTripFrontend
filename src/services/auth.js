import firebase from "../firebase";


export const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
}