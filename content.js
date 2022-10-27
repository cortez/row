let pastes = [
  "paste1",
  "paste2",
  "paste3",
  "paste4",
  "paste5",
  "paste6",
  "paste7",
  "paste8",
  "paste9"
];

function copy(text) {
  let a = document.createElement("textarea");
  document.body.appendChild(a);
  a.value = text;
  a.select();
  document.execCommand("copy");
  document.body.removeChild(a);
}

document.onkeyup = function(e) {
  for (let i=49; i<58; i++) {
    if (e.ctrlKey && e.which == i) {
      copy(pastes[i-49]);
    }
  }
};
