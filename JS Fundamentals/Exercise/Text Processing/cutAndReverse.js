function cutAndReverse(word) {
    let first = word.substring(0, word.length / 2);
    let second = word.substring(word.length / 2, word.length);
    console.log(first.split('').reverse().join(''));
    console.log(second.split('').reverse().join(''));
}

//cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');