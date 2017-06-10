class SignPopup extends Popup{
    constructor (title, text){
        super(title);
        this.text = text;
    }
    getForm(){
        fetch("view/form.html").then(function(response) {
            return response.text()
        })
        .then(function(data){
            var form = document.querySelector('form');
            form.innerHTML = data;
            return new Promise(function (resolve, reject) {
                form.addEventListener('submit', function (e) {
                    e.preventDefault();
                    resolve(e);
                })
            })
        }).then(function (e) {
            // you can use sting literals for this or, preferred, use new FormData
            var formData = `first_name=${document.querySelector('input[name=first_name]').value}&last_name=${document.querySelector('input[name=last_name]').value}&email=${document.querySelector('input[type=email]').value}`;
            // var formData = "first_name=" + document.querySelector('input[name="first_name"]').value + "&last_name=" + document.querySelector('input[name="last_name"]').value + "&email=" + document.querySelector('input[type="email"]').value;
            var request = new Request('api.php', {
             method: 'POST',
             body: formData,
             headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
            });
            return fetch(request);
        }).then(function(data){
            if(data.status == 200){
                document.querySelector('.popup_container').remove();
            };
        });
    }

    build(className){
        super.build(className);
        var p = document.createElement('p');
        p.textContent = this.text;
        var form = document.createElement('form');
        // form.innerHTML = this.getForm; // it's a wrong operation
        this.content.appendChild(p);
        this.content.appendChild(form);
        var button = document.createElement('button');
        button.textContent = "X";
        button.addEventListener('click', this.destroy.bind(this));
        this.content.appendChild(button);
        this.getForm();
    }
    destroy(){
        this.container.remove();
    }
}
