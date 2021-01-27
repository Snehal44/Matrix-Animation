<!DOCTYPE html>
<html lang="en">

<head>
    <title>Matrix Animation</title>
    

    <script>
  window.console = window.console || function(t) {};
    </script>



    <script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
    </script>


</head>

<body translate="no">

    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-157cd5b220a5c80d4ff8e0e70ac069bffd87a61252088146915e8726e5d9f147.js"></script>


    <script id="rendered-js">
class Drop {
  constructor(x, y) {
    var elem = document.createElement("div");
    elem.classList = ["drop"];
    elem.style.left = `${x}px`;
    elem.style.color = "chartreuse";
    elem.style.fontSize = GetASize();
    elem.style.fontFamily = "courier";
    elem.style.opacity = "0." + Math.floor(Math.random() * 10 + 1);
    elem.style.top = `${y}px`;
    elem.innerHTML = "<span class='tail'>" + GetAString(2) + "</span>" + GetAString(Math.floor(Math.random() * 20 + 1)) + "<span class='leader'>" + GetAString(1) + "</span>";
    document.body.appendChild(elem);
  }}


function GetASize() {
  var seed = Math.floor(Math.random() * 3);
  var reply = "large";
  switch (seed) {
    case 0:
      reply = "small";
      break;
    case 1:
      reply = "medium";
      break;
    case 2:
      reply = "large";
      break;}

  return reply;
}

function GetAString(len) {
  var chars = "ﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿｦｧｨｩｪｫｬｭｮｯ";
  var strOut = "";
  for (var i = 0; i < len; i++) {
    strOut += chars.substr(Math.floor(Math.random() * chars.length + 1), 1);
  }
  return strOut;
}

function cleanup() {
  var elements = document.getElementsByClassName("drop");
  while (elements.length > 200) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function loop() {
  // Get X start
  var rx = Math.floor(Math.random() * window.innerWidth + 1);
  new Drop(rx, 0);
  requestAnimationFrame(loop);
  cleanup();
}

loop();
//# sourceURL=pen.js
    </script>



</body>

</html>
