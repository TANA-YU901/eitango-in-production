var point=0

function mondai() {
  const messageNo = Math.floor( Math.random() * date.length);
  console.log(date.json[messageNo]);
  var toi = date.[messageNo]
  toi.innerHTML = toi;
}

function kotaeawase() {
  kotae = 'kotae'
  if (kotae == toi) {
    alert("正解！")
    point = point + 1
  }
  else{
    alert("不正解…")
  }
}

function pass() {

}

function reset() {
  point=0
  alert("リセットしました…")
}
