class RegPopup extends Popup {
    constructor (title, text) {
        super(title);
        this.text = text;
    }
    build(className){
        super.build(className);
        var text = document.createElement('p');
        text.textContent = this.text;
        var button = document.createElement('button');
        button.textContent = "I agree";
        this.content.appendChild(text);
        button.addEventListener('click', this.destroy.bind(this));
        this.content.appendChild(button);
    }
    destroy(){
        this.container.remove();
    }
}