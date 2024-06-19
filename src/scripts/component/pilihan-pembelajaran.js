class PilihanPembelajaran extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
            <div class="pilihanPembelajaran" id="pilihanPembelajaran">
                <div class="judulMenu">
                    <div class="aksesorisMenu"></div>
                    <h2>Pilihan Pembelajaran</h2>
                </div>
                <div class="listPembelajaran">
                    <a href="./bukuMatematika.html">
                        <div class="pembelajaran">
                            <img src="./img/keys.png" alt="ikon pembelajaran">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Matematika</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="pembelajaran">
                            <img src="./img/history.png" alt="ikon pembelajaran">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Sejarah</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="pembelajaran">
                            <img src="./img/science.png" alt="ikon pembelajaran">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Sains</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                    <a href="#">
                        <div class="pembelajaran">
                            <img src="./img/alphabet.png" alt="ikon pembelajaran">
                            <div class="detail">
                                <h3 class="judulPembelajaran">Umum</h3>
                                <p class="definisiPembelajaran">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore molestiae harum perferendis eum eaque cum est ut.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `
    }
}
customElements.define('pilihan-pembelajaran',PilihanPembelajaran)