class Popup {
    constructor (title, text) {
	this.title = title;
    }
    build(className) {
        this.container = document.createElement('div');
        this.container.className = 'popup_container';
        this.content = document.createElement('div');
        this.content.className = className;
        this.container.appendChild(this.content);
        var title = document.createElement('h2');
        title.textContent = this.title;
        this.content.appendChild(title);
        document.body.appendChild(this.container);
    }
}