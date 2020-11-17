let btnChangeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", (data) => {
  btnChangeColor.style.backgroundColor = data.color;
  btnChangeColor.setAttribute("value", data.color);
});

btnChangeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";',
    });
  });
};
