import { renderBlock } from './lib.js';
import { iSearchFormData } from './interfaces.js';


export function renderSearchFormBlock(checkInDate: string, checkOutDate: string) {

  (function search(): iSearchFormData {
    const searchObj = {
      city: 'Санкт-Петербург',
      dateIn: checkInDate,
      dateOut: checkOutDate,
      maxPrice: 120
    };
    return searchObj;
  }());


  //========================================

  function zeroBefore(value: string | number): number | string {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }

  const today: Date = new Date();
  const dayCheckIn: string | number = zeroBefore(today.getDate());
  const dayMinCheckOut: Date | string | number = zeroBefore(today.getDate() + 2);
  const monthCheckIn: Date | string | number = zeroBefore(today.getMonth() + 1);
  const year: string | number = today.getFullYear();
  const todayDate: string = year + '-' + monthCheckIn + '-' + dayCheckIn;
  const minDateOutStr: string = year + '-' + monthCheckIn + '-' + dayMinCheckOut;


  const monthCheckOut: string | number = zeroBefore(today.getMonth() + 2);
  const maxDateOut: Date | number | string = new Date(year, +monthCheckOut, 0);


  const maxDayCheckOut: string | number = zeroBefore(maxDateOut.getDate());
  const maxDateOutStr: string = year + '-' + monthCheckOut + '-' + maxDayCheckOut;

  while (todayDate > checkInDate || checkOutDate > maxDateOutStr) {
    if (todayDate > checkInDate) {
      alert('Введите верную дату въезда в INDEX.JS');
    } else if (checkOutDate > maxDateOutStr) {
      alert('Введите вернeю дату отъезда в INDEX.JS');
    }
    return;
  }

  //================================================================


  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkInDate ? checkInDate : todayDate}" min="${todayDate}" max="${maxDateOutStr}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${checkOutDate ? checkOutDate : minDateOutStr}" min="${minDateOutStr}" max="${maxDateOutStr}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
