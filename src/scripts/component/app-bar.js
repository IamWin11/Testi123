class AppBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <div class="logo">
                        <a href="/">
                            <img src="./img/wolf.png" alt="LoneWolf">
                            <p class="webTitle">LoneWolf</p>
                        </a>
                    </div>
                    <div class="navMenu">
                        <ul>
                            <li class="navItem"><a href="/#pilihanPembelajaran">Produk</a></li>
                            <li class="navItem"><a href="/#service">Layanan</a></li>
                            <li class="navItem"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="burgerMenu">
                        <button id="burgerButton" onclick="toggleSidebar()">☰</button>
                    </div>
                    <div class="navMenuHidden" id="navMenuHidden">
                        <ul>
                            <li class="navItem"><a href="/#pilihanPembelajaran">Produk</a></li>
                            <li class="navItem"><a href="/#service">Layanan</a></li>
                            <li class="navItem"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-bar', AppBar);
