import {ButtonComponent} from "../../components/button/index.js";
import {ProductPage} from "../product/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";
export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    //hello3
    
    //hello4
    
    //card1
    getData() {
        return [
            {
                id: 1,
                src:"/pages/main/img1.jpg",
                title: "Факт 1",
                text: "Собаки – единственный вид животных, кроме самих людей, которые могут распознавать наши эмоции. Им достаточно беглого взгляда, чтобы понять, радуетесь ли вы, смущаетесь, злитесь или грустите. Они способны даже сопереживать людям, чувствуя те же эмоции, что их человек."
            },
            {
                id: 2,
                src: "/pages/main/img2.jpg",
                title: "Факт 2",
                text: "Оказывается, собаки тоже потеют. Но в то время как у людей пот выделяется через кожу по всей поверхности тела, у собак он проступает через лапы. Вы можете убедиться в этом, понаблюдав за собакой в жаркий летний день. Характерным признаком будет солоноватый запах, напоминающий запах попкорна или кукурузных чипсов."
            },
            {
                id: 3,
                src: "/pages/main/img3.jpg",
                title: "Факт 3",
                text: "Отпечатки собачьих носов уникальны, поэтому они используются для идентификации животного, также как отпечатки пальцев используются для идентификации человека. Криминалисты нередко пользуются этим обстоятельством при расследовании преступлений с участием животных и их хозяев."
            },
        ]
    }
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }    
    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
        
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
            
        })
    } 
        
    
    // render() {

    //     this.parent.insertAdjacentHTML('beforeend', '<button type="button" class="btn btn-primary">Hello world 3!</button>');

    //     const button = new ButtonComponent(this.parent)
    //     button.render()

    //     const data = this.getData()
    //     const productCard = new ProductCardComponent(this.parent)
    //     productCard.render(data)

        
    // }
    
}