// import DS from 'ember-data';
//
// export default class AplicationAdapter extends DS.JSONAPIAdapter {
//   host = "https://polar-basin-61192.herokuapp.com";
// }

import ActiveModelAdapter from 'active-model-adapter';

export default class ApplicationAdapter extends ActiveModelAdapter {
	host = "https://polar-basin-61192.herokuapp.com";
}
