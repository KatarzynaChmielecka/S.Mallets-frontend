import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const UserPage = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const phone = useSelector((state: RootState) => state.user.phoneNumber);

  useEffect(() => {
    const getPhone = async () => {
      const headers = new Headers();
      headers.append('credentials', 'include');
      headers.append('withCredentials', 'true');
      const auth = localStorage.getItem('auth');
      if (auth) headers.append('auth', auth);
      const options = {
        method: 'GET',
        headers: headers,
      };
      const res = await fetch(
        // 'https://s-mallets-backend.vercel.app/auth/login',
        'https://s-mallets-backend-git-c-f-v-devsonthewaves.vercel.app/auth/login',
        options,
      );
      if (res.status === 200) {
        const resJson = await res.json();
        console.log(resJson);
      }
    };
    getPhone();
  }, []);

  return (
    <>
      <h1 className="p-8 text-center text-6xl">
        User Page
        {`Hello ${name}`}
      </h1>
      <p>{`telefon ${phone}`}</p>
    </>
  );
};

export default UserPage;
