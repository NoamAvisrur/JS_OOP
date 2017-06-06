class NewsPopup extends Popup{
    constructor (title, textArr){
        super(title);
        this.textArr = textArr;
    }
    build(className){
        super.build(className);
        var content = this.content
        this.textArr.forEach(function (p, i){
            var article = document.createElement('article');
            var text = document.createElement('p');
            text.textContent = p.text;
            var img = document.createElement('img');
            img.src = p.img;
            article.appendChild(text);
            article.appendChild(img);
            content.appendChild(article);
            console.log(i);
        })
        var button = document.createElement('button');
        button.textContent = "X";
        button.addEventListener('click', this.destroy.bind(this));
        this.content.appendChild(button);
    }
    destroy(){
        this.container.remove();
    }
}