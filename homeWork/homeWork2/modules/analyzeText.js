const textToArray = (text) => {
    //text.toLowerCase().split(/[ ,!.";:-]+/) - returns an array of words skiping ,!.";:-
    return text.toLowerCase().split(/[ ,!.";:-]+/).sort();
}
const numberOfSentences = (text) => {
    return `Number of sentences: ${text.split(".").length} `;
}
//transforms text into array of words sorted in ascending order(a-z)
const numberOfWords = (text) => {
    return `Number of words: ${textToArray(text).length}`;
}
const numOfCharacters = (text) => {
    // \S Not whitespace - Matches any character that is not a whitespace character (spaces, tabs, line breaks)
    // text.match(/\S/g) - returns an array of characters skiping whitespaces
    return `Number of characters: ${text.match(/\S/g).length}`;
}
const compareToSeven = (text) => {
    let greaterThanSeven = 0;
    let lessThanSeven = 0;
    let equalToSeven = 0;

    let wordsInArray = textToArray(text);
    for (let i = 0; i < wordsInArray.length; i++) {
        if (wordsInArray[i].length > 7) {
            greaterThanSeven++;
        } else if (wordsInArray[i].length < 7) {
            lessThanSeven++;
        } else if (wordsInArray[i] === 7) {
            equalToSeven++;
        }
    }
    return `Greater than 7: ${greaterThanSeven} ${"\n"}Less than 7: ${lessThanSeven} ${"\n"}Equal to 7: ${equalToSeven}`;
}

const frequentWord = (text) => {
    //transforms text into array of words sorted in ascending order(a-z)
    //regexr.com
    //avoid these [ ,!?.";:-]
    const words = textToArray(text);
    //console.log(words);

    //declare an empty object
    const wordFrequencies = {};

    //iterates until the last word of  the array is reached
    for (let i = 0; i <= words.length; i++) {
        //wordFrequencies[words[i]]- adds a property to the object from the words array- (same as wordFrequencies.prop1)
        //(if)--if the word is not in the wordFrequencies object add it
        //(if)--we add the word from the array as a property of an object (wordFrequencies.firstWord = 1)
        //else--if the word has already been added increase the counter +1

        if (!(words[i] in wordFrequencies)) {
            //if the word is not in the wordFrequencies object add it -- wordFrequencies.firstItemOfArray = 1
            wordFrequencies[words[i]] = 1;
        } else {
            //if the same word has repeated more than once, increment the counter +1
            wordFrequencies[words[i]]++;
        }
    }
    //Print the object - object = { key: value} 
    //Key-Word
    //Value-how frequent it is in the text
    //console.log(wordFrequencies);

    //assign the first key of the object as the currnetMax
    let currentMaxKey = Object.keys(wordFrequencies)[0];
    let currentMaxValue = wordFrequencies[currentMaxKey];
    //console.log(mostFrequent);

    //loop through object to compare which word is the most frequent
    for (let word in wordFrequencies) {
        if (wordFrequencies[word] > currentMaxValue) {
            //object["key"] = value
            //if another word has a larger number assign that number to the currentMaxValue
            currentMaxKey = word;
            currentMaxValue = wordFrequencies[currentMaxKey];
        }
    }
    return `The most frequent word is "${currentMaxKey}" : ${currentMaxValue} `;
}
module.exports = {
    numberOfSentences,
    numberOfWords,
    numOfCharacters,
    compareToSeven,
    frequentWord
}

//Test
// console.log(numberOfSentences(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tortor sit amet molestie malesuada, dui lacus ullamcorper urna, vel hendrerit erat enim vitae purus. Fusce ligula velit, suscipit id dictum non, euismod ut sem. Fusce rhoncus erat non sapien lobortis, at eleifend tellus feugiat. Fusce magna quam, sodales quis nunc sed, suscipit facilisis mauris. Suspendisse vehicula tincidunt ex et lobortis. Donec porttitor imperdiet lorem ut vehicula. Donec faucibus diam ac vulputate vehicula. Sed cursus ante sit amet ligula tristique fermentum. Ut hendrerit nisl lacus, id elementum lorem pretium eget. Sed sed sapien ut tortor mollis consectetur. Etiam tempus libero sapien, non sagittis neque accumsan quis. Mauris aliquam dolor egestas faucibus feugiat. Nam gravida justo vitae dapibus rutrum. Fusce ac fringilla ligula. Nam sit amet turpis egestas, sagittis sapien nec, tempor turpis.

// Nullam at dictum eros, in viverra leo. Sed mattis, quam ut consequat maximus, orci justo dignissim nisl, sed pharetra lorem quam in felis. Morbi nec lectus varius, egestas urna tempor, suscipit ipsum. Quisque lectus tortor, elementum at justo id, placerat accumsan lectus. Phasellus sed sodales magna. Aenean cursus gravida auctor. Quisque facilisis, mauris eget tempus hendrerit, nisi mi euismod odio, sit amet aliquam ligula elit vitae lorem. Ut ut ante est. Mauris sit amet luctus odio, eu commodo purus. Quisque rutrum urna eu urna pretium finibus. Phasellus iaculis ac nibh at consectetur. Aliquam porta pulvinar massa congue suscipit. Sed interdum malesuada eleifend. Vestibulum ac felis eu nulla rutrum ornare a non arcu. Pellentesque feugiat semper quam nec vehicula. Nulla porta sit amet mi id lacinia.

// Vivamus laoreet nunc nec eros dapibus auctor. Nunc eu vestibulum felis. Phasellus ultrices id tortor eget varius. Fusce pulvinar nibh nibh, eget auctor ligula feugiat eu. In hendrerit elit a arcu malesuada bibendum. Curabitur eleifend feugiat massa sit amet faucibus. Aliquam convallis faucibus turpis, sit amet interdum odio imperdiet non. Curabitur varius iaculis felis, at maximus dolor semper in. Nullam mollis sagittis mauris, et ultrices enim dapibus ut. Duis vulputate sagittis rutrum. Ut suscipit placerat nisi, tempor rutrum nisi sagittis et. Vivamus maximus diam ex, at sollicitudin velit elementum et.

// Mauris a interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna enim, molestie vitae odio sed, imperdiet porta arcu. Ut in malesuada ligula, varius rhoncus purus. Sed nunc libero, ullamcorper ut commodo sit amet, eleifend ac neque. Nam lacinia ex vitae orci rutrum, quis pharetra neque convallis. Sed quam turpis, placerat id rutrum id, venenatis porttitor neque. Curabitur purus urna, maximus non mauris in, vestibulum gravida purus. Morbi convallis nibh eu aliquet finibus. Integer a dui id purus rutrum bibendum in vel justo.

// Nulla nisi sem, posuere a neque a, elementum volutpat sapien. Aenean sed leo felis. Vivamus euismod ipsum nec neque interdum scelerisque. Maecenas maximus, urna imperdiet egestas eleifend, mauris eros iaculis neque, ac dapibus tortor lorem aliquam leo. Nulla dapibus rutrum sapien, id semper urna vulputate sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur turpis. Suspendisse commodo non ipsum vehicula efficitur. Ut in iaculis lectus. Aenean id rhoncus felis, ac gravida ex.
// `));

// console.log(numberOfWords(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tortor sit amet molestie malesuada, dui lacus ullamcorper urna, vel hendrerit erat enim vitae purus. Fusce ligula velit, suscipit id dictum non, euismod ut sem. Fusce rhoncus erat non sapien lobortis, at eleifend tellus feugiat. Fusce magna quam, sodales quis nunc sed, suscipit facilisis mauris. Suspendisse vehicula tincidunt ex et lobortis. Donec porttitor imperdiet lorem ut vehicula. Donec faucibus diam ac vulputate vehicula. Sed cursus ante sit amet ligula tristique fermentum. Ut hendrerit nisl lacus, id elementum lorem pretium eget. Sed sed sapien ut tortor mollis consectetur. Etiam tempus libero sapien, non sagittis neque accumsan quis. Mauris aliquam dolor egestas faucibus feugiat. Nam gravida justo vitae dapibus rutrum. Fusce ac fringilla ligula. Nam sit amet turpis egestas, sagittis sapien nec, tempor turpis.

// Nullam at dictum eros, in viverra leo. Sed mattis, quam ut consequat maximus, orci justo dignissim nisl, sed pharetra lorem quam in felis. Morbi nec lectus varius, egestas urna tempor, suscipit ipsum. Quisque lectus tortor, elementum at justo id, placerat accumsan lectus. Phasellus sed sodales magna. Aenean cursus gravida auctor. Quisque facilisis, mauris eget tempus hendrerit, nisi mi euismod odio, sit amet aliquam ligula elit vitae lorem. Ut ut ante est. Mauris sit amet luctus odio, eu commodo purus. Quisque rutrum urna eu urna pretium finibus. Phasellus iaculis ac nibh at consectetur. Aliquam porta pulvinar massa congue suscipit. Sed interdum malesuada eleifend. Vestibulum ac felis eu nulla rutrum ornare a non arcu. Pellentesque feugiat semper quam nec vehicula. Nulla porta sit amet mi id lacinia.

// Vivamus laoreet nunc nec eros dapibus auctor. Nunc eu vestibulum felis. Phasellus ultrices id tortor eget varius. Fusce pulvinar nibh nibh, eget auctor ligula feugiat eu. In hendrerit elit a arcu malesuada bibendum. Curabitur eleifend feugiat massa sit amet faucibus. Aliquam convallis faucibus turpis, sit amet interdum odio imperdiet non. Curabitur varius iaculis felis, at maximus dolor semper in. Nullam mollis sagittis mauris, et ultrices enim dapibus ut. Duis vulputate sagittis rutrum. Ut suscipit placerat nisi, tempor rutrum nisi sagittis et. Vivamus maximus diam ex, at sollicitudin velit elementum et.

// Mauris a interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna enim, molestie vitae odio sed, imperdiet porta arcu. Ut in malesuada ligula, varius rhoncus purus. Sed nunc libero, ullamcorper ut commodo sit amet, eleifend ac neque. Nam lacinia ex vitae orci rutrum, quis pharetra neque convallis. Sed quam turpis, placerat id rutrum id, venenatis porttitor neque. Curabitur purus urna, maximus non mauris in, vestibulum gravida purus. Morbi convallis nibh eu aliquet finibus. Integer a dui id purus rutrum bibendum in vel justo.

// Nulla nisi sem, posuere a neque a, elementum volutpat sapien. Aenean sed leo felis. Vivamus euismod ipsum nec neque interdum scelerisque. Maecenas maximus, urna imperdiet egestas eleifend, mauris eros iaculis neque, ac dapibus tortor lorem aliquam leo. Nulla dapibus rutrum sapien, id semper urna vulputate sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur turpis. Suspendisse commodo non ipsum vehicula efficitur. Ut in iaculis lectus. Aenean id rhoncus felis, ac gravida ex.
// `));
// console.log(numOfCharacters(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tortor sit amet molestie malesuada, dui lacus ullamcorper urna, vel hendrerit erat enim vitae purus. Fusce ligula velit, suscipit id dictum non, euismod ut sem. Fusce rhoncus erat non sapien lobortis, at eleifend tellus feugiat. Fusce magna quam, sodales quis nunc sed, suscipit facilisis mauris. Suspendisse vehicula tincidunt ex et lobortis. Donec porttitor imperdiet lorem ut vehicula. Donec faucibus diam ac vulputate vehicula. Sed cursus ante sit amet ligula tristique fermentum. Ut hendrerit nisl lacus, id elementum lorem pretium eget. Sed sed sapien ut tortor mollis consectetur. Etiam tempus libero sapien, non sagittis neque accumsan quis. Mauris aliquam dolor egestas faucibus feugiat. Nam gravida justo vitae dapibus rutrum. Fusce ac fringilla ligula. Nam sit amet turpis egestas, sagittis sapien nec, tempor turpis.

// Nullam at dictum eros, in viverra leo. Sed mattis, quam ut consequat maximus, orci justo dignissim nisl, sed pharetra lorem quam in felis. Morbi nec lectus varius, egestas urna tempor, suscipit ipsum. Quisque lectus tortor, elementum at justo id, placerat accumsan lectus. Phasellus sed sodales magna. Aenean cursus gravida auctor. Quisque facilisis, mauris eget tempus hendrerit, nisi mi euismod odio, sit amet aliquam ligula elit vitae lorem. Ut ut ante est. Mauris sit amet luctus odio, eu commodo purus. Quisque rutrum urna eu urna pretium finibus. Phasellus iaculis ac nibh at consectetur. Aliquam porta pulvinar massa congue suscipit. Sed interdum malesuada eleifend. Vestibulum ac felis eu nulla rutrum ornare a non arcu. Pellentesque feugiat semper quam nec vehicula. Nulla porta sit amet mi id lacinia.

// Vivamus laoreet nunc nec eros dapibus auctor. Nunc eu vestibulum felis. Phasellus ultrices id tortor eget varius. Fusce pulvinar nibh nibh, eget auctor ligula feugiat eu. In hendrerit elit a arcu malesuada bibendum. Curabitur eleifend feugiat massa sit amet faucibus. Aliquam convallis faucibus turpis, sit amet interdum odio imperdiet non. Curabitur varius iaculis felis, at maximus dolor semper in. Nullam mollis sagittis mauris, et ultrices enim dapibus ut. Duis vulputate sagittis rutrum. Ut suscipit placerat nisi, tempor rutrum nisi sagittis et. Vivamus maximus diam ex, at sollicitudin velit elementum et.

// Mauris a interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna enim, molestie vitae odio sed, imperdiet porta arcu. Ut in malesuada ligula, varius rhoncus purus. Sed nunc libero, ullamcorper ut commodo sit amet, eleifend ac neque. Nam lacinia ex vitae orci rutrum, quis pharetra neque convallis. Sed quam turpis, placerat id rutrum id, venenatis porttitor neque. Curabitur purus urna, maximus non mauris in, vestibulum gravida purus. Morbi convallis nibh eu aliquet finibus. Integer a dui id purus rutrum bibendum in vel justo.

// Nulla nisi sem, posuere a neque a, elementum volutpat sapien. Aenean sed leo felis. Vivamus euismod ipsum nec neque interdum scelerisque. Maecenas maximus, urna imperdiet egestas eleifend, mauris eros iaculis neque, ac dapibus tortor lorem aliquam leo. Nulla dapibus rutrum sapien, id semper urna vulputate sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur turpis. Suspendisse commodo non ipsum vehicula efficitur. Ut in iaculis lectus. Aenean id rhoncus felis, ac gravida ex.
// `));

// console.log(frequentWord(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tortor sit amet molestie malesuada, dui lacus ullamcorper urna, vel hendrerit erat enim vitae purus. Fusce ligula velit, suscipit id dictum non, euismod ut sem. Fusce rhoncus erat non sapien lobortis, at eleifend tellus feugiat. Fusce magna quam, sodales quis nunc sed, suscipit facilisis mauris. Suspendisse vehicula tincidunt ex et lobortis. Donec porttitor imperdiet lorem ut vehicula. Donec faucibus diam ac vulputate vehicula. Sed cursus ante sit amet ligula tristique fermentum. Ut hendrerit nisl lacus, id elementum lorem pretium eget. Sed sed sapien ut tortor mollis consectetur. Etiam tempus libero sapien, non sagittis neque accumsan quis. Mauris aliquam dolor egestas faucibus feugiat. Nam gravida justo vitae dapibus rutrum. Fusce ac fringilla ligula. Nam sit amet turpis egestas, sagittis sapien nec, tempor turpis.

// Nullam at dictum eros, in viverra leo. Sed mattis, quam ut consequat maximus, orci justo dignissim nisl, sed pharetra lorem quam in felis. Morbi nec lectus varius, egestas urna tempor, suscipit ipsum. Quisque lectus tortor, elementum at justo id, placerat accumsan lectus. Phasellus sed sodales magna. Aenean cursus gravida auctor. Quisque facilisis, mauris eget tempus hendrerit, nisi mi euismod odio, sit amet aliquam ligula elit vitae lorem. Ut ut ante est. Mauris sit amet luctus odio, eu commodo purus. Quisque rutrum urna eu urna pretium finibus. Phasellus iaculis ac nibh at consectetur. Aliquam porta pulvinar massa congue suscipit. Sed interdum malesuada eleifend. Vestibulum ac felis eu nulla rutrum ornare a non arcu. Pellentesque feugiat semper quam nec vehicula. Nulla porta sit amet mi id lacinia.

// Vivamus laoreet nunc nec eros dapibus auctor. Nunc eu vestibulum felis. Phasellus ultrices id tortor eget varius. Fusce pulvinar nibh nibh, eget auctor ligula feugiat eu. In hendrerit elit a arcu malesuada bibendum. Curabitur eleifend feugiat massa sit amet faucibus. Aliquam convallis faucibus turpis, sit amet interdum odio imperdiet non. Curabitur varius iaculis felis, at maximus dolor semper in. Nullam mollis sagittis mauris, et ultrices enim dapibus ut. Duis vulputate sagittis rutrum. Ut suscipit placerat nisi, tempor rutrum nisi sagittis et. Vivamus maximus diam ex, at sollicitudin velit elementum et.

// Mauris a interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna enim, molestie vitae odio sed, imperdiet porta arcu. Ut in malesuada ligula, varius rhoncus purus. Sed nunc libero, ullamcorper ut commodo sit amet, eleifend ac neque. Nam lacinia ex vitae orci rutrum, quis pharetra neque convallis. Sed quam turpis, placerat id rutrum id, venenatis porttitor neque. Curabitur purus urna, maximus non mauris in, vestibulum gravida purus. Morbi convallis nibh eu aliquet finibus. Integer a dui id purus rutrum bibendum in vel justo.

// Nulla nisi sem, posuere a neque a, elementum volutpat sapien. Aenean sed leo felis. Vivamus euismod ipsum nec neque interdum scelerisque. Maecenas maximus, urna imperdiet egestas eleifend, mauris eros iaculis neque, ac dapibus tortor lorem aliquam leo. Nulla dapibus rutrum sapien, id semper urna vulputate sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur turpis. Suspendisse commodo non ipsum vehicula efficitur. Ut in iaculis lectus. Aenean id rhoncus felis, ac gravida ex.
// `));

// console.log(compareToSeven(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor, tortor sit amet molestie malesuada, dui lacus ullamcorper urna, vel hendrerit erat enim vitae purus. Fusce ligula velit, suscipit id dictum non, euismod ut sem. Fusce rhoncus erat non sapien lobortis, at eleifend tellus feugiat. Fusce magna quam, sodales quis nunc sed, suscipit facilisis mauris. Suspendisse vehicula tincidunt ex et lobortis. Donec porttitor imperdiet lorem ut vehicula. Donec faucibus diam ac vulputate vehicula. Sed cursus ante sit amet ligula tristique fermentum. Ut hendrerit nisl lacus, id elementum lorem pretium eget. Sed sed sapien ut tortor mollis consectetur. Etiam tempus libero sapien, non sagittis neque accumsan quis. Mauris aliquam dolor egestas faucibus feugiat. Nam gravida justo vitae dapibus rutrum. Fusce ac fringilla ligula. Nam sit amet turpis egestas, sagittis sapien nec, tempor turpis.

// Nullam at dictum eros, in viverra leo. Sed mattis, quam ut consequat maximus, orci justo dignissim nisl, sed pharetra lorem quam in felis. Morbi nec lectus varius, egestas urna tempor, suscipit ipsum. Quisque lectus tortor, elementum at justo id, placerat accumsan lectus. Phasellus sed sodales magna. Aenean cursus gravida auctor. Quisque facilisis, mauris eget tempus hendrerit, nisi mi euismod odio, sit amet aliquam ligula elit vitae lorem. Ut ut ante est. Mauris sit amet luctus odio, eu commodo purus. Quisque rutrum urna eu urna pretium finibus. Phasellus iaculis ac nibh at consectetur. Aliquam porta pulvinar massa congue suscipit. Sed interdum malesuada eleifend. Vestibulum ac felis eu nulla rutrum ornare a non arcu. Pellentesque feugiat semper quam nec vehicula. Nulla porta sit amet mi id lacinia.

// Vivamus laoreet nunc nec eros dapibus auctor. Nunc eu vestibulum felis. Phasellus ultrices id tortor eget varius. Fusce pulvinar nibh nibh, eget auctor ligula feugiat eu. In hendrerit elit a arcu malesuada bibendum. Curabitur eleifend feugiat massa sit amet faucibus. Aliquam convallis faucibus turpis, sit amet interdum odio imperdiet non. Curabitur varius iaculis felis, at maximus dolor semper in. Nullam mollis sagittis mauris, et ultrices enim dapibus ut. Duis vulputate sagittis rutrum. Ut suscipit placerat nisi, tempor rutrum nisi sagittis et. Vivamus maximus diam ex, at sollicitudin velit elementum et.

// Mauris a interdum odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna enim, molestie vitae odio sed, imperdiet porta arcu. Ut in malesuada ligula, varius rhoncus purus. Sed nunc libero, ullamcorper ut commodo sit amet, eleifend ac neque. Nam lacinia ex vitae orci rutrum, quis pharetra neque convallis. Sed quam turpis, placerat id rutrum id, venenatis porttitor neque. Curabitur purus urna, maximus non mauris in, vestibulum gravida purus. Morbi convallis nibh eu aliquet finibus. Integer a dui id purus rutrum bibendum in vel justo.

// Nulla nisi sem, posuere a neque a, elementum volutpat sapien. Aenean sed leo felis. Vivamus euismod ipsum nec neque interdum scelerisque. Maecenas maximus, urna imperdiet egestas eleifend, mauris eros iaculis neque, ac dapibus tortor lorem aliquam leo. Nulla dapibus rutrum sapien, id semper urna vulputate sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. In in efficitur turpis. Suspendisse commodo non ipsum vehicula efficitur. Ut in iaculis lectus. Aenean id rhoncus felis, ac gravida ex.
// `));