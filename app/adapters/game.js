import ApplicationAdapter from './application';

export default class GameAdapter extends ApplicationAdapter {
  urlForUpdateRecord(id, modelName, snapshot){
    let baseUrl = this.buildURL();

    return `${baseUrl}/games/${id}/start`;
  }
}
