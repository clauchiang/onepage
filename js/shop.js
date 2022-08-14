const itemLabel1 = document.getElementById('itemLabel1')
const itemLabel2 = document.getElementById('itemLabel2')
const itemLabel3 = document.getElementById('itemLabel3')
const itemLabel4 = document.getElementById('itemLabel4')
const itemLabel5 = document.getElementById('itemLabel5')
const itemLabel6 = document.getElementById('itemLabel6')

const itemSelect01 = document.getElementById('itemSelect01')
const itemSelect02 = document.getElementById('itemSelect02')
const itemSelect03 = document.getElementById('itemSelect03')
const itemSelect04 = document.getElementById('itemSelect04')
const itemSelect05 = document.getElementById('itemSelect05')
const itemSelect06 = document.getElementById('itemSelect06')

const styleSelect01 = document.getElementById('styleSelect01')
const styleSelect02 = document.getElementById('styleSelect02')
const styleSelect03 = document.getElementById('styleSelect03')
const styleSelect04 = document.getElementById('styleSelect04')
const styleSelect05 = document.getElementById('styleSelect05')
const styleSelect06 = document.getElementById('styleSelect06')



function shopFun1() {
    Swal.fire(
        itemLabel1.value + ' - ' + styleSelect01.value + ' X ' + itemSelect01.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}
function shopFun2() {
    Swal.fire(
        itemLabel2.value + ' - ' + styleSelect02.value + ' X ' + itemSelect02.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}
function shopFun3() {
    Swal.fire(
        itemLabel3.value + ' - ' + styleSelect03.value + ' X ' + itemSelect03.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}
function shopFun4() {
    Swal.fire(
        itemLabel4.value + ' - ' + styleSelect04.value + ' X ' + itemSelect04.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}
function shopFun5() {
    Swal.fire(
        itemLabel5.value + ' - ' + styleSelect05.value + ' X ' + itemSelect05.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}
function shopFun6() {
    Swal.fire(
        itemLabel6.value + ' - ' + styleSelect06.value + ' X ' + itemSelect06.value + '\n 已成功加入購物車',
        '',
        'success'
    )
    $("select").val("");
}

function resetFun(){
    $("select").val("");
}