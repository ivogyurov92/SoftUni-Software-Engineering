function pascalCaseSplitter(word) {
    console.log(word.split(/(?=[A-Z])/).join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');