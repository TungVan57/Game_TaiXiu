const btnPlay = document.querySelector("#btn");
const radioTai = document.querySelector("#taiInput");
const radioXiu = document.querySelector("#xiuInput");
const inputText = document.querySelectorAll(".result_input")
const h2Input = document.querySelector("#taiOrxiu")
const result_context = document.querySelector("#result_context")
const header_result = document.querySelector("#header_result")
const mucCuoc = document.querySelector("#mucCuoc")
const btn_Reset = document.querySelector("#btn_Reset")


console.log(Number(mucCuoc.value))
btnPlay.addEventListener('click', () => {
    if (Number(mucCuoc.value) !== 0) {
        if (radioTai.checked == true) {
            let kq = 0;
            for (let index = 0; index < inputText.length; index++) {
                inputText[index].value = Math.floor(Math.random() * 6) + 1
                kq += Number(inputText[index].value);
            }
            if (kq >= 11 && kq <= 17) {
                h2Input.innerHTML = "Tài";
                result_context.innerHTML = "Bạn 10 Điểm";
                header_result.innerHTML = Number(header_result.innerHTML) + Number(mucCuoc.value);
            }
            else {
                h2Input.innerHTML = "Xỉu";
                result_context.innerHTML = "Bạn Thua Rồi !";
                header_result.innerHTML = Number(header_result.innerHTML) - Number(mucCuoc.value);
            }
        }
        if (radioXiu.checked == true) {
            let kq = 0;
            for (let index = 0; index < inputText.length; index++) {
                inputText[index].value = Math.floor(Math.random() * 6) + 1
                kq += Number(inputText[index].value);
            }
            if (kq >= 4 && kq <= 10) {
                h2Input.innerHTML = "Xỉu";
                result_context.innerHTML = "Bạn 10 Điểm";
                header_result.innerHTML = Number(header_result.innerHTML) + Number(mucCuoc.value);
            }
            else {
                result_context.innerHTML = "Bạn Thua Rồi !";
                h2Input.innerHTML = "Tài";
                header_result.innerHTML = Number(header_result.innerHTML) - Number(mucCuoc.value);
            }
        }
    }
})
btn_Reset.addEventListener('click', () => {
    location.reload();
})
