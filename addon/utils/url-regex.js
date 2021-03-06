import Ember from 'ember';

// URL regex courtesy of https://github.com/kevva/url-regex
function urlRegex () {
  return /(?:^|\s)(["'])?(?:(?:(?:(?:https?|ftp|\w):)?\/\/)|(?:www.))(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:1\d\d|2[0-4]\d|25[0-4]|[1-9]\d?))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?\1(?=$|\s)/ig;
}

function emailRegex () {
  return /(?:\b)(["'])?(?:[^\s@]+)@(?:[^\s@]+)\.(?:[^\s@]+)(?:\b)/ig;
}

// Shortens the URL and adds three dots to the end
function shortenUrl ( url , length ) {

  if( !Ember.isBlank( url ) && url.length > length) {
      url = url.substr( 0 , length ) + "...";
  }

  return url;
}

export { emailRegex, urlRegex, shortenUrl };
