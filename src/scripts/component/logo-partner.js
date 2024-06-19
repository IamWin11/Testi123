class LogoPartner extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="logoPartner">
                <ul>
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                    <li><img src="./img/wolf.png" alt="logoPartner"></li>  
                </ul>
            </div>
        `
    }
}

customElements.define('logo-partner', LogoPartner)