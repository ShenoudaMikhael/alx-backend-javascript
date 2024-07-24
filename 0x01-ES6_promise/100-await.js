import signUpUser from './utils';
import uploadPhoto from './utils';

export default async function asyncUploadUser() {
    const res = {};
    try {
        res["photo"] = await uploadPhoto();
    } catch (error) {
        res["photo"] = null;

    }  try {
        res["user"] = await signUpUser();
    } catch (error) {
        res["user"] = null;

    }
  
    return res;
}