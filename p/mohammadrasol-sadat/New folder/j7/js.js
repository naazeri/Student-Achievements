function ggg(){
    var namber = document.querySelector('#namber')
    var namber2 = namber.value
    var name = document.querySelector('#name')
    var name2 = name.value
    var year = 1402;

    var age =year-namber2

   var result = document.querySelector('#result')
        result.innerHTML = name2+age+"سال سن دارید"
}