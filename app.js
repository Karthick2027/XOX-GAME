let user1 = null
let user2 = null
let clr1 = 0
let clr2 = 0
let count = 0
function clickbox(elem) {

  if (!user1) {
    user1 = elem
    if (user1.classList.contains("bg-primary") || user1.classList.contains("bg-dark")) {
      user1 = null
    } else {
      user1.classList.add("bg-primary")
      clr1++
      user2 = null
    }
    win()
    if (count != 1) {
      color()
    }
  }
  else if (!user2) {
    user2 = elem
    if (user2.classList.contains("bg-dark") || user2.classList.contains("bg-primary")) {
      user2 = null
    } else {
      user2.classList.add("bg-dark")
      clr2++
      user1 = null
    }
    win()
    if (count != 1) {
      color()
    }
  }
}

function win() {
  const b1 = document.getElementById("b1")
  const b2 = document.getElementById("b2")
  const b3 = document.getElementById("b3")
  const b4 = document.getElementById("b4")
  const b5 = document.getElementById("b5")
  const b6 = document.getElementById("b6")
  const b7 = document.getElementById("b7")
  const b8 = document.getElementById("b8")
  const b9 = document.getElementById("b9")

  if ((b1.classList.contains("bg-primary") && b2.classList.contains("bg-primary") && b3.classList.contains("bg-primary")) ||
    (b1.classList.contains("bg-dark") && b2.classList.contains("bg-dark") && b3.classList.contains("bg-dark"))) {
    if (b1.classList.contains("bg-primary")) {
      model1()
      count++
    } else {
      model2()
      count++

    }
  }


  else if ((b4.classList.contains("bg-primary") && b5.classList.contains("bg-primary") && b6.classList.contains("bg-primary")) ||
    (b4.classList.contains("bg-dark") && b5.classList.contains("bg-dark") && b6.classList.contains("bg-dark"))) {
    if (b4.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b7.classList.contains("bg-primary") && b8.classList.contains("bg-primary") && b9.classList.contains("bg-primary")) ||
    (b7.classList.contains("bg-dark") && b8.classList.contains("bg-dark") && b9.classList.contains("bg-dark"))) {
    if (b7.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b1.classList.contains("bg-primary") && b4.classList.contains("bg-primary") && b7.classList.contains("bg-primary")) ||
    (b1.classList.contains("bg-dark") && b4.classList.contains("bg-dark") && b7.classList.contains("bg-dark"))) {
    if (b1.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b2.classList.contains("bg-primary") && b5.classList.contains("bg-primary") && b8.classList.contains("bg-primary")) ||
    (b2.classList.contains("bg-dark") && b5.classList.contains("bg-dark") && b8.classList.contains("bg-dark"))) {
    if (b2.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b3.classList.contains("bg-primary") && b6.classList.contains("bg-primary") && b9.classList.contains("bg-primary")) ||
    (b3.classList.contains("bg-dark") && b6.classList.contains("bg-dark") && b9.classList.contains("bg-dark"))) {
    if (b3.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b1.classList.contains("bg-primary") && b5.classList.contains("bg-primary") && b9.classList.contains("bg-primary")) ||
    (b1.classList.contains("bg-dark") && b5.classList.contains("bg-dark") && b9.classList.contains("bg-dark"))) {
    if (b1.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }

  else if ((b3.classList.contains("bg-primary") && b5.classList.contains("bg-primary") && b7.classList.contains("bg-primary")) ||
    (b3.classList.contains("bg-dark") && b5.classList.contains("bg-dark") && b7.classList.contains("bg-dark"))) {
    if (b3.classList.contains("bg-primary")) {
      model1()
      count++

    } else {
      model2()
      count++

    }
  }
}

function color() {
  if (clr1 == 4 && clr2 == 5) {

    model3()

  } else if (clr1 == 5 && clr2 == 4) {

    model3()
  }
}

function model1() {
  document.getElementById("trig-modal1").click()

}
function model2() {
  document.getElementById("trig-modal2").click()

}
function model3() {
  document.getElementById("trig-modal3").click()

}
