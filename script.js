// var fristInput = document.querySelector("input");
// var submitBTN = document.querySelector(".btn")

// var list = document.querySelector("ul")
// var massage = document.querySelector("h2")





// submitBTN.addEventListener('click', function () {
//     if (fristInput.value == "") {
//         massage.innerHTML = " value is required"
//     } else {
//         massage.innerHTML = ""
//         list.innerHTML = ""
//         for (i = 1; i <= 10; i++) {

//             var condition = fristInput.value

//             list.innerHTML += `<li> ${fristInput.value} x ${i} = ${fristInput.value * i} </li>`


//         }

//     }
// }

// )

var firstInput = document.querySelector("input");
var submitBTN = document.querySelector(".btn");

var list = document.querySelector("ul")
var message = document.querySelector("h2");

let alltask = []

submitBTN.addEventListener('click', function () {
    message.innerHTML = "";


    if (firstInput.value === "") {
        message.innerHTML = "Input value is required";
    } else {

        var inputValue = parseFloat(firstInput.value);
        if (inputValue) {

            if (inputValue <= 17) {
                list.innerHTML = ""
                message.innerHTML = "! ১৮ বছরের নিচের কেউ ভোট দিতে পারবে না ";
                for (i = 1; i <= 10; i++) {
                    list.innerHTML += `<li>${inputValue} x ${i} = ${inputValue * i} </li>`
                }
            } else {
                list.innerHTML = ""
                message.innerHTML = "আপনি ভোট দিতে পারবেন  "
            }


        } else {
            list.innerHTML = ""
            message.innerHTML = "Input value is a string";
            alltask.push({
                taskname: firstInput.value
            })
            disply()
        }
    }
})


function disply() {
    list.innerHTML = ""
    alltask.map((item, index) => {

        list.innerHTML += `<li class="listText">${item.taskname} <button class="dltBTN">Delete</button> </li>`
        
        let btnDlt = document.querySelectorAll('.dltBTN')
        let btnDltArray = Array.from(btnDlt)

        btnDltArray.map((singleButton, dltIndex) => {
            singleButton.addEventListener('click', function () {
                alltask.splice(dltIndex, 1)
               
                disply()
            })
        })
    })
}


