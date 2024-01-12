export interface ILoginResponse {
  userInfo: IUserInfo;
  tokens: {
    token: 'string';
    refreshToken: 'string';
  };
}

export interface IUserInfo {
  userId: 0; // ID пользователя
  userName: 'string'; // Имя пользователя
  userAvatar: 'string'; // ссылка на аватерку
  userRole: 0; // Роль пользоваетля
}
