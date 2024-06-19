class FooterBar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
            <footer>
                <div class="detailFooter">
                    <div class="detailInstansi">
                        <div class="logo">
                            <img src="./img/wolf.png" alt="logo">
                            <p>LoneWolf</p>
                        </div>
                        <p>Jalan Duri No. 90, Duri Kepa, Kebon Jeruk, Kota Jakarta Barat, DKI Jakarta 20123</p>
                        <div class="sosmed">
                            <a href="#"><img src="./img/instagram.png" alt="instagram"></a>
                            <a href="#"><img src="./img/youtube.png" alt="youtube"></a>
                            <a href="#"><img src="./img/twitter.png" alt="twitter"></a>
                        </div>
                    </div>
                    <div class="service" id="service">
                        <ul>
                            <li><h1>Hebatnya Ilmu untuk Dunia</h1></li>
                            <li class="itemMenu"><a href="#">Tentang Kami</a></li>
                            <li class="itemMenu"><a href="#">Kebijakan Privasi</a></li>
                            <li class="itemMenu"><a href="#">Bantuan</a></li>
                        </ul>
                    </div>
                    <div class="contactPerson">
                        <ul>
                            <li><h2>Hubungi Kami</h2></li>
                            <li class="itemMenu"><a href="#">lonewolf.academy@gmail.com</a></li>
                            <li class="itemMenu"><a href="#">+62 1111 2222 3333</a></li>
                            <li class="itemMenu"><a href="#">+62 1212 2323 3434</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <p>@ 2024 | LoneWolf Academy</p>
                </div>
            </footer>
        `
    }
}
customElements.define('footer-bar', FooterBar)