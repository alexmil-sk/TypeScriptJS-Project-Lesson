import { iUser } from './interfaces.js';

//=================< USER DATA>============================================

function getUserData(anyUser: { userName: unknown; avatarUrl: unknown; favorites: unknown }): object {
  // userId: string = (Math.floor(Math.random() * 100)).toString();
  const userId:  number | string = (Math.floor(Math.random() * 100));
  localStorage.removeItem(`user-${userId}`);
  localStorage.setItem(`user-${userId}`, JSON.stringify({
    userName: anyUser.userName,
    avatarUrl: anyUser.avatarUrl,
    favorites: anyUser.favorites

  }));

  const locSt: string = localStorage.getItem(`user-${userId}`);

  console.log('locSt: ', locSt);

  const user: iUser = JSON.parse(locSt);
  //const user: iUser = JSON.parse(localStorage.getItem(`user-${userId}`));
  return user;
}

localStorage.clear();

// export const userMaggie: unknown = getUserData({
//   userName: 'Wade Warren',
//   avatarUrl: 'img/avatar.png',
//   favorites: getFavoritesAmount('Wade Warren'),
// });

export const userMaggie: iUser = {
  userName: 'Wade Warren',
  avatarUrl: 'img/avatar.png',
  favorites: getFavoritesAmount('Wade Warren'),
};

getUserData(userMaggie);

//export const userPeter: unknown = getUserData({
//  userName: 'Peter Peterson',
//  avatarUrl: 'img/avatar2.png',
//  favorites: getFavoritesAmount('Peter Peterson'),
//
//});

export const userPeter: iUser = {
  userName: 'Peter Peterson',
  avatarUrl: 'img/avatar2.png',
  favorites: getFavoritesAmount('Peter Peterson'),

};

getUserData(userPeter);

//=================</ USER DATA>============================================


//=================< GET FAVORITES AMOUNT>==================================

function getFavoritesAmount(name: string): number | null {
  localStorage.setItem(`${name}`, JSON.stringify([`Favorite-1-${name}`, `Favorite-2-${name}`, `Favorite-3-${name}`]));
  const num: number | null = (JSON.parse(localStorage.getItem(`${name}`))).length;
  return num;
}

//=================</ GET FAVORITES AMOUNT>==================================

//=================< SEARCH>================================================




//=================</ SEARCH>================================================

//=================< SUBFORM>================================================



//=================</ SUBFORM>===============================================

