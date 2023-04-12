const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolean = true) {
    this.direct = boolean;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Строка алфавита
    this.table = {};
    this.alphabet.split("").forEach((el, i) => {
      this.table[el] = this.alphabet.slice(this.alphabet.indexOf(el), this.alphabet.length) + this.alphabet.slice(0, i);
    });
  }

  encrypt(m, k) {
    if (!m || !k) throw Error("Incorrect arguments!");

    let mess = m
      .toUpperCase()
      .split("")
      .filter((el) => el !== " ");

    let key = k
      .repeat(Math.ceil(mess.length / k.length))
      .slice(0, mess.length)
      .toUpperCase();
    if (!this.direct) key = key.split("").reverse().join("");

    const str = mess
      .map((el, i) => {
        if (this.alphabet.includes(el)) {
          return this.table[el][this.alphabet.indexOf(key[i])];
        }
        return el;
      })
      .join("");

    const res = [];
    let j = 0;

    m.split(" ").forEach((el) => {
      res.push(str.slice(j, el.length + j));
      j = j + el.length;
    });

    return res.join(" ");
  }

  decrypt(m, k) {
    if (!m || !k) throw Error("Incorrect arguments!");

    let mess = m
      .toUpperCase()
      .split("")
      .filter((el) => el !== " ");

    if (!this.direct) mess = mess.reverse();

    let key = k
      .repeat(Math.ceil(mess.length / k.length))
      .slice(0, mess.length)
      .toUpperCase();

    if (!this.direct) key = key.split("").reverse().join("");

    const str = mess
      .map((el, i) => {
        if (this.alphabet.includes(el)) {
          return this.alphabet[this.table[key[i]].indexOf(el)];
        }
        return el;
      })
      .join("");

    const res = [];
    let j = 0;

    if (!this.direct) {
      m.split(" ")
        .reverse()
        .forEach((el) => {
          res.push(str.slice(j, el.length + j));
          j = j + el.length;
        });
    } else {
      m.split(" ").forEach((el) => {
        res.push(str.slice(j, el.length + j));
        j = j + el.length;
      });
    }

    if (!this.direct) return res.join(" ").split("").reverse().join("");

    return res.join(" ");
  }
}

module.exports = {
  VigenereCipheringMachine
};
