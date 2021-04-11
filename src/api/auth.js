import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = credentials => {
  return client.post('/api/auth/login', credentials).then(({ accessToken }) => {
    configureClient({ accessToken });
    //Si nos han marcado el check de guardar el token, procederemos a ello
    //const {check} = credentials
    if (credentials.check){
      //console.log(` Guardamos credenciales 1: ${check}`)
      storage.set('auth', accessToken);
    }else{
     //console.log(`Guardamos credenciales 2: ${check}`)
      storage.remove('auth');
    }
    

  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};