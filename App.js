
 var obtain = document.getElementById('obtainMark');
    var total = document.getElementById('totalMark');
    //  var btn = document.getElementById('calculate');
    var perCent = document.getElementById('per')

    calcbtn.onclick = function () {
      let x = (obtain.value / total.value) * 100;
      x = parseInt(x);
      per.innerHTML = x + "%"
    };