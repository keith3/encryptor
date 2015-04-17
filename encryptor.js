var pbkdf2 = Npm.require('pbkdf2-sha256');

// generate salt
var genSalt = function(len) {
  var len = (typeof len == 'number' ? parseInt(len) : 12);
  var salt = '';
  var wordDict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghipqrstuvwxyz0123456789';
  var wordDictLen = wordDict.length;

  for (var i = 0; i < 16; i++) {
    salt += wordDict.charAt(Math.floor(Math.random() * wordDictLen));
  }

  return salt;
}

Encryptor = {
  // django default encrypt method
  django: function(key) {
    var iterations = 15000;
    var keyLenBytes = 32;
    var salt = genSalt();
    var prefix = 'pbkdf2_sha256';

    return prefix + '$' + iterations + '$' + salt + '$' + pbkdf2(key, salt, iterations, keyLenBytes).toString('base64');
  }
}
