let pastes = [
  "paste1", // ctrl+1
  "paste2", // ctrl+2
  "paste3", // ctrl+3
  "paste4", // ctrl+4
  "paste5", // ctrl+5
  "paste6", // ctrl+6
  "paste7", // ctrl+7
  "paste8", // ctrl+8
  "paste9"  // ctrl+9
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
