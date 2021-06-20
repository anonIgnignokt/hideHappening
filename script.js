
function removeHappening() {
  var element = document.querySelector('[aria-label="Timeline: Trending now"]');
  if (element) {
    element.parentElement.removeChild(element);
    console.log('Removed Trending Now')
  }
}

setInterval(removeHappening, 500);