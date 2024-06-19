class HeroElement extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="hero">
                <div class="descriptionHero">
                    <h1>Awal Masa Depan Mulai dari Pendidikan</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique incidunt modi beatae nobis nam quibusdam eligendi aliquid suscipit reprehenderit, numquam minus mollitia nulla commodi veritatis voluptas deserunt atque odio quia!</p>
                    <a href="#" class="buttonStartStudy">Start Study</a>
                </div>
                <img src="./img/gambar-keberhasilan.png" alt="gambar-keberhasilan">
            </div>
        `
    }
}
customElements.define('hero-element', HeroElement)