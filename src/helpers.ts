import { iUser } from './interfaces.js';

//=================< USER DATA>============================================

function getUserData(anyUser: unknown): unknown {
  const userId: string = (Math.floor(Math.random() * 100)).toString();
  localStorage.removeItem(`user-${userId}`);
  localStorage.setItem(`user-${userId}`, JSON.stringify({
    userName: anyUser.userName,
    avatarUrl: anyUser.avatarUrl,
    favorites: anyUser.favorites

  }));

  const user: iUser = JSON.parse(localStorage.getItem(`user-${userId}`));
  return user;
}

localStorage.clear();

export const userMaggie: unknown = getUserData({
  userName: 'Wade Warren',
  avatarUrl: 'img/avatar.png',
  favorites: getFavoritesAmount('Wade Warren'),

});

export const userPeter: unknown = getUserData({
  userName: 'Peter Peterson',
  avatarUrl: 'img/avatar2.png',
  favorites: getFavoritesAmount('Peter Peterson'),

});

//=================</ USER DATA>============================================


//=================< GET FAVORITES AMOUNT>==================================

function getFavoritesAmount(name: string): unknown {
  localStorage.setItem(`${name}`, JSON.stringify([`Favorite-1-${name}`, `Favorite-2-${name}`, `Favorite-3-${name}`]));
  const num: number = (JSON.parse(localStorage.getItem(`${name}`))).length;
  return num;
}

//=================</ GET FAVORITES AMOUNT>==================================

//=================< SEARCH>================================================




//=================</ SEARCH>================================================

//=================< SUBFORM>================================================



//=================</ SUBFORM>===============================================

