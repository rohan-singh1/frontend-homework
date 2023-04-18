const originalContentHtml = document.getElementById('content').innerHTML;
let contentHtml = originalContentHtml;
const input = document.getElementById('search-input');

function handleKeyUp() {
  contentHtml = originalContentHtml;
  const searchWord = document.getElementById('search-input').value;

  /**
   * Regex and its boundary condition sourced from:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
   * https://www.regular-expressions.info/wordboundaries.html
   * https://stackoverflow.com/questions/17885855/use-dynamic-variable-string-as-regex-pattern-in-javascript
   */
  const wordRegex = new RegExp('\\b' + searchWord + '\\b', 'gi');
  const innerHtml =
    '<span style = "background-color: #ffff00">' + searchWord + '</span>';
  contentHtml = contentHtml.replaceAll(wordRegex, innerHtml);
  document.getElementById('content').innerHTML = contentHtml;
}

/**
 * Changed the keydown event to keyup because the value returned from 
 * the input field did not contain the last entered character.
 * Renamed the handler function accordingly.
 */
input.addEventListener('keyup', handleKeyUp);
