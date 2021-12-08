/*
*   Regular Expression
*   ^(.)    -> Match beginning of the string & capture the first character
*   \s      -> Match a string that has a whitespaces (\s)
*   (.)     -> Match the character after the expression above
 */

function properCase(element){
    return element.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
}

/*
*   Regular Expression
*   ^(.)    -> Match beginning of the string & capture the first character
*   \.(\s)* -> Match a string that has a full stop character (\.) followed by zero or more whitespaces ((\s)*)
*   (.)     -> Match the character after the expression above
 */

function sentenceCase(element){
    return element.toLowerCase().replace(/^(.)|\.(\s)*(.)/g,
        function ($1) {return $1.toUpperCase();});
}

/* Generate text file, populate with text and download */
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("upper-case").addEventListener("click", function() {
    let element = document.querySelector("textarea");
    element.value = element.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    let element = document.querySelector("textarea");
    element.value = element.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let element = document.querySelector("textarea");
    element.value = properCase(element.value);
});

document.getElementById("sentence-case").addEventListener("click", function() {
    let element = document.querySelector("textarea");
    element.value = sentenceCase(element.value);
});

document.getElementById("save-text-file").addEventListener("click", function() {
    let element = document.querySelector("textarea");
    download("text.txt", element.value);
});