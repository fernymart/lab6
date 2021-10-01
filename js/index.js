
$(document).ready(function(){

    $(".agregar").on("click", function(e){
        e.preventDefault()
        console.log("AAAA")
        
        var div = $("<div>")
        var li = $("<li>")
        var delB = $("<button>")
        var checkB = $("<button>")

        div.prop("class", "lis")

        li.prop("class", "post")
        li.append($('input:text').val())

        div.append(li)

        checkB.prop("class", "checar")
        checkB.text("Check");

        div.append(checkB)

        delB.prop("class", "del")
        delB.text("Delete")

        div.append(delB)
        $(".Lista").append(div);

        $("#newText").val("");
    })

    $(".Lista").on("click", ".del", function(e) {
        e.preventDefault()
        $(this).parent().remove();
    })

    $(".Lista").on("click", ".checar", function(e){
        e.preventDefault()
        $(this).parent().toggleClass("chec")
    })

})
