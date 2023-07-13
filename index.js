var arrNumber = [];
function inputnumberarray() {
  var number = document.querySelector("#input_number").value * 1;
  arrNumber.push(number);
  document.querySelector("#input_number").value = "";
  document.getElementById("result").innerHTML = `
  <p class=' mt-5 py-5'>👉 ${arrNumber}</p>
  `;
}
// bài 1 
document.querySelector("#btn-sum").onclick = function () {
  var sum = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    sum += arrNumber[index];
  }
  document.getElementById("result1").innerHTML = `
  <p class=' mt-5 py-5'>👉Tổng các số : ${sum}</p>
  `;
};
// bài 2
document.querySelector("#btn-count").onclick = function () {
  var count = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      count += 1;
    }
  }
  document.getElementById("result2").innerHTML = `
  <p class='mt-5 py-5'>👉số lượng số nguyên: ${count}</p>
  `;
};

// bài 3
document.querySelector("#btn-min").onclick = function () {
  var number = arrNumber[0];
  var position = 0;
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] < number) {
      position = index;
      number = arrNumber[index];
    }
  }
  document.getElementById("result3").innerHTML = `
  <p class=' mt-5 py-5'>👉số nhỏ nhất: ${number}</p>
  `;
};

// bài 4
document.querySelector("#btn-positiveintegersmin").onclick = function () {
  var arrPostitive = [];
  var kiemtramang = "";
  for (var index = 0; index < arrNumber.length; index++) {
    if (arrNumber[index] > 0) {
      arrPostitive.push(arrNumber[index]);
    }
  }
  if (arrPostitive.length > 0) {
    var positive = arrPostitive[0];
    for (var i = 0; i < arrPostitive.length; i++) {
      if (arrPostitive[i] < positive) {
        positive = arrPostitive[i];
      }
    }
    document.getElementById("result4").innerHTML = `
    <p class=' mt-5 py-5'>👉số nhỏ nhất: ${positive}</p>
    `;
  } else {
    kiemtramang = "Không có số dương trong mảng";
    document.getElementById("result4").innerHTML = `
    <p class=' mt-5 py-5'>👉${kiemtramang}</p>
    `;
  }
};

// bài 5 
document.querySelector("#btn-sochan").onclick = function () {
  var sochancuoicung = null; //Giá trị null được sử dụng để chỉ ra rằng biến chưa được gán bất kỳ giá trị cụ thể nào.
  for (var index = arrNumber.length - 1; index >= 0; index--) {
    if (arrNumber[index] % 2 == 0) {
      sochancuoicung = arrNumber[index];
      break; // Tìm thấy số chẵn, thoát khỏi vòng lặp
    }
  }
  if (sochancuoicung !== null) {
    document.getElementById("result5").innerHTML = `
    <p class=' mt-5 py-5'>👉số chẵn cuối cùng :${sochancuoicung}</p>
    `;
  } else {
    document.getElementById("result5").innerHTML = `
    <p class=' mt-5 py-5'>👉 không tìm thấy số chẵn cuối cùng </p>
    `;
  }
};

// bài 6
document.querySelector("#btn-doicho").onclick = function () {
  var number1 = document.getElementById("number-1").value * 1;
  var number2 = document.getElementById("number-2").value * 1;
  var temp = arrNumber[number1];
  arrNumber[number1] = arrNumber[number2];
  arrNumber[number2] = temp;
  document.getElementById("result6").innerHTML = `
  <p class=' mt-5 py-5'>👉 mảng đổi chỗ ${arrNumber} </p>
  `;
};

// bài 7 
document.querySelector("#btn-sort").onclick = function () {
  var len = arrNumber.length;
  for (var i = 1; i < len; i++) {
    var current = arrNumber[i];
    var j = i - 1;
    while (j >= 0 && arrNumber[j] > current) {
      arrNumber[j + 1] = arrNumber[j];
      j -= 1;
    }
    arrNumber[j + 1] = current;
  }
  document.getElementById("result7").innerHTML = `
  <p class=' mt-5 py-5'>👉 Sắp xếp mảng ${arrNumber} </p>
  `;
};


// bài 8 
function checkPrime(number) {
  if (number <= 1) {
    return false;
  } else {
    for (var i = 2; i < number; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
}
document.querySelector("#btn-prime").onclick = function () {
  var inspection = "Không tìm thấy số nguyên tố";
  for (var index = 0; index < arrNumber.length; index++) {
    if (checkPrime(arrNumber[index])) {
      document.getElementById("result8").innerHTML = `
      <p class=' mt-5 py-5'>👉 Số nguyên tố đầu tiên là${arrNumber[index]} </p>
      `;
      return;
    }
  }
  document.getElementById("result8").innerHTML = `
  <p class=' mt-5 py-5'>👉 ${inspection} </p>
  `;
};

// bài 9 
var arrNewNumber = [];
function inputnumbernewarray() {
  var number = document.querySelector("#input_number2").value * 1;
  arrNewNumber.push(number);
  document.querySelector("#input_number2").value = "";
  document.getElementById("result_9").innerHTML = `
  <p class=' mt-5 py-5'>👉 ${arrNewNumber}</p>
  `;
}
document.querySelector("#btn-integer").onclick = function () {
  var count = 0 ;
  for( var index = 0 ; index < arrNewNumber.length; index++){
    if(Number.isInteger(arrNewNumber[index])){
      count += 1;
    }
  }
  document.getElementById("result9").innerHTML = `
  <p class='mt-5 py-5'>👉 ${count} </p>
  `;
}

// bài 10
document.querySelector('#btn-sosanh').onclick = function() {
  var countPositive = 0;
  var countNegative = 0;
  for(var index = 0 ; index < arrNumber.length; index++){
    if(arrNumber[index] > 0){
      countPositive += 1;
    }else{
      countNegative += 1;
    }
  }
  if(countPositive > countNegative){
    document.getElementById("result10").innerHTML=`
    <p class='mt-5 py-5'>👉 Số dương > số âm </p>
    `
  }else{
    document.getElementById("result10").innerHTML=`
    <p class='mt-5 py-5'>👉 Số dương < số âm </p>
    `
  }
}