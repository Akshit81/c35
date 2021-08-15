class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2")
        title.html("car racing game ")
        title.position(130,0)

        var input=createInput("name")
        var button=createButton("play")
        var greating=createElement("h3")
        input.position(130,160)
        button.position(250,100)

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();

            var greating=createElement("h3")
            greating.html("hello "+name)
            greating.position(130,160)
        })
    }

}
