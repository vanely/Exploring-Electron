window.addEventListener('load', () => {
  // generic function for taking element from DOM, and adding text to it's textContent
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) {
      element.textContent += text;
    }
  }

  // iteratively adding versions to selected elements
  for (const type of ['node', 'chrome', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }

})