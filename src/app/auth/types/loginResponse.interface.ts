export interface ILoginResponse {
  hasError: true;
  errors: ['string'];
  total: 0;
  data: {
    userInfo: {
      userId: 0; // ID пользователя
      userName: 'string'; // Имя пользователя
      userAvatar: 'string'; // ссылка на аватерку
      userRole: 0; // Роль пользоваетля
    };
    tokens: {
      token: 'string';
      refreshToken: 'string';
    };
  };
}
