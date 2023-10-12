function getCurrency(count, words = ['рублей', 'рубль', 'рубля']) {
    if (count % 100 > 10 && count % 100 <= 20) {
        return `${count} ${words[0]}`;
    }
    if (count % 10 == 1) {
        return `${count} ${words[1]}`;
    }
    if (count % 10 >= 2 && count % 10 <= 4) {
        return `${count} ${words[2]}`;
    }
    return `${count} ${words[0]}`;
}

module.exports = getCurrency;
