import {ProductComponent} from "../../components/product/index.js";
import { MainPage } from "../main/index.js";
import {BackButtonComponent} from "../../components/back-button/index.js";
export class ProductPage {
    constructor(parent, id) {
        this.parent = parent
        this.id = id
    }

    getData() {
        return {
                id: 1,
                src: "https://www.proplan.ru/sites/owners.proplan.ru/files/styles/article720x340/public/2020-03/shutterstock_155382377_2.jpg?itok=EBJQe5gN",
                title: ``,
                text: "Собаки – единственный вид животных, кроме самих людей, которые могут распознавать наши эмоции. Им достаточно беглого взгляда, чтобы понять, радуетесь ли вы, смущаетесь, злитесь или грустите. Они способны даже сопереживать людям, чувствуя те же эмоции, что их человек."
             
            }
             
        

        
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
            `
        )
    }
    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const product = new ProductComponent(this.pageRoot)
        product.render(data)
    }
}