export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
       
    }

    getHTML(data) {
        return (
            `
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        ${data.title}
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    <img src="${data.src}" style="width: 400px";>
                    <br>
                    ${data.text}
                    
                    <button class="btn btn-primary" id="click-card-${data.id}" data-id="${data.id}">Узнать</button>
                    
                    </div>
                </div>
            </div>
            `
        )
    }
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}
