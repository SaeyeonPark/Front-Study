const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", setGame);
const tdArr = document.getElementsByTagName("td");

function setGame() {
  const row = parseInt(document.getElementById("row").value);
  const col = parseInt(document.getElementById("col").value);
  const mineNum = parseInt(document.getElementById("mineNum").value);
  const mineArr = setMineNumArr(mineNum, row * col);

  makeBoard(row, col);
  putMineInBoard(mineArr);
}

function makeBoard(rowNum, colNum) {
  let tableEle = "<table>";

  for (let i = 0; i < colNum; i++) {
    tableEle += "<tr>";
    for (let j = 0; j < rowNum; j++) {
      tableEle += "<td></td>";
    }
    tableEle += "</tr>";
  }
  tableEle += "</table>";
  document.getElementById("gameBoard").innerHTML = tableEle;
}

function setMineNumArr(numLimit, numRange) {
  let mineArr = [];
  for (let i = 0; i < numLimit; i++) {
    let randomNum = Math.floor(Math.random() * numRange);
    if (!findMine(randomNum)) {
      mineArr.push(randomNum);
    } else {
      i--;
    }
  }
  return mineArr;
}

function putMineInBoard(mine) {
  for (let i = 0; i < tdArr.length; i++) {
    if (findMine(i)) {
      tdArr[i].classList.add("mine");
    }
  }
}

function tileEvent(mine, targetNum, aroundArr) {
  tdArr[targetNum].addEventListener("click", function () {
    if (
      tdArr[targetNum].className !== "flag" &&
      tdArr[targetNum].className !== "qmark" &&
      tdArr[targetNum].className !== "mine flag" &&
      tdArr[targetNum].className !== "mine qmark"
    ) {
      let count = 0;
      for (let i = 0; i < aroundArr.length; i++) {
        if (mine.indexOf(aroundArr[i]) !== -1) {
          count++;
        }
      }
      if (tdArr[targetNum].className === "mine") {
        alert("GAME OVER");
      } else if (count === 0) {
        tdArr[targetNum].style.backgroundColor = "darkcyan";
        for (let i = 0; i < aroundArr.length; i++) {
          tdArr[aroundArr[i]].click();
        }
      } else {
        tdArr[targetNum].innerHTML = count;
      }
    }
  });

  tdArr[targetNum].addEventListener("auxclick", function () {
    tdArr[targetNum].addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    if (
      tdArr[targetNum].className === "flag" ||
      tdArr[targetNum].className === "mine flag"
    ) {
      tdArr[targetNum].classList.remove("flag");
      tdArr[targetNum].classList.add("qmark");
      tdArr[targetNum].innerHTML = "❓";
    } else if (
      tdArr[targetNum].className === "qmark" ||
      tdArr[targetNum].className === "mine qmark"
    ) {
      tdArr[targetNum].classList.remove("qmark");
      tdArr[targetNum].innerHTML = "";
    } else {
      tdArr[targetNum].classList.add("flag");
      tdArr[targetNum].innerHTML = "🚩";
    }
  });
}

const noContext = document.getElementById("noContextMenu");
noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

tileEvent(mineArr, 0, 1, row, row + 1);
// 우상
tileEvent(mineArr, row - 1, row - 2, 2 * row - 2, 2 * row - 1);
// 좌하
tileEvent(
  mineArr,
  row * (col - 1),
  row * (col - 2),
  row * (col - 2) + 1,
  row * (col - 1) + 1
);
// 우하
tileEvent(
  mineArr,
  row * col - 1,
  row * (col - 1) - 2,
  row * (col - 1) - 1,
  row * col - 2
);

// 모서리 타일
// 상
for (let i = 1; i <= row - 2; i++) {
  tileEvent(mineArr, i, i - 1, i + 1, i + row - 1, i + row, i + row + 1);
}
// 하
for (let i = row * (col - 1) + 1; i <= row * col - 2; i++) {
  tileEvent(mineArr, i, i - row - 1, i - row, i - row + 1, i - 1, i + 1);
}
// 좌
for (let i = row; i <= row * (col - 2); i += row) {
  tileEvent(mineArr, i, i - row, i - row + 1, i + 1, i + row, i + row + 1);
}
// 우
for (let i = 2 * row - 1; i <= row * (col - 1) - 1; i += row) {
  tileEvent(mineArr, i, i - row - 1, i - row, i - 1, i + row - 1, i + row);
}

// 나머지 모든 타일
for (let i = 1; i <= col - 2; i++) {
  for (let j = i * row + 1; j <= (1 + i) * row - 2; j++) {
    tileEvent(
      mineArr,
      j,
      j - row - 1,
      j - row,
      j - row + 1,
      j - 1,
      j + 1,
      j + row - 1,
      j + row,
      j + row + 1
    );
  }
}