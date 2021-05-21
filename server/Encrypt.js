const crypto = require("crypto");

module.exports = class Encrypt {
  static encrypt(password) {
    return (
      crypto
        // Creates and returns a Hmac object that uses the given algorithm and salt (whatever you want) to hash the password. "sha" stands for Secure Hash Algorithm.
        .createHmac("sha256", "Bananer i Pyjamas")
        .update(password) // Hashes the password
        .digest("hex") // Encoding type
    );
  }
};
