function extractFile(text) {
    let wordsArr = text.split('\\');
    let file = wordsArr[wordsArr.length - 1];

    let files = file.split('.');
    let extensionLength = files[files.length - 1].length;
    let fileExtension = file.substring(file.length - extensionLength, file.length);
    let fileName = file.substring(0, file.length - extensionLength - 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');