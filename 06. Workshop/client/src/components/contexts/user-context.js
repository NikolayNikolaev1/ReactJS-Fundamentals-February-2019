import { createContext } from 'react';

const defaultUserState = {
  roles: [],
  username: "",
  isLoggedIn: false,
  updateUser() {}
};

const { Consumer: UserConsumer, Provider: UserProvider } = createContext(defaultUserState);

export {
    UserConsumer,
    UserProvider,
    defaultUserState
};