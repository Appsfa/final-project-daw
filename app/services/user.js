import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default class UserService extends Service {
  // @service('user') user_global;
  username = '';
  email = '';
  user_id = '';
  setUser (user){
    this.user = user;
  }

  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }

  getUser(){
    this.username = getCookie("username");
  }

  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  }

  login(user){
    // this.setCookie("username", user, 1);
    var auxuser, auxid, auxemail

    $.ajax({
      url: `https://polar-basin-61192.herokuapp.com/users`,
      type: 'GET',
      dataType: 'json',
      success: function(data){
        console.log(data);

        if(data.users.length > 0)
        {
          for(var i = 0; i < data.users.length; i++){
            if(data.users[i].username == user){
              auxuser = data.users[i].username;
              auxid = data.users[i].id;
              auxemail = data.users[i].email;
            }
          }
        }
      }
    }).done(function(){
      console.log(auxid);
      if(auxuser != undefined){
        var d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = "username" + "=" + auxuser + "; " + expires;
        document.cookie = "id" + "=" + auxid + "; " + expires;
        document.cookie = "email" + "=" + auxemail + "; " + expires;
        location.href = "/";
        // hola();
      }
    })




  }

}
