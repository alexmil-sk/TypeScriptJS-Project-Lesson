import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { userMaggie } from './helpers.js';

window.addEventListener('DOMContentLoaded', () => {
  //renderUserBlock('Wade Warren', 'img/avatar.png', 10);
  renderUserBlock(userMaggie.userName, userMaggie.avatarUrl, userMaggie.favorites);
  console.log('userMaggie', userMaggie);
  renderSearchFormBlock('', '');
  //renderSearchFormBlock('2022-02-03', '2022-03-03');
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } }
  );
});




