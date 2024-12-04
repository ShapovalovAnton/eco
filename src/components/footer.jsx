import './footer.css'
export function Footer() {
    return (
        <>
        <footer>
        <div class="container">
            <div class="contact-info">
                <h2>Контакти</h2>
                <p>+ (380) 97 518 19 94</p>
                <p>+ (380) 99 518 19 94</p>
            </div>
        
            <div class="menu">
                <h2>Меню</h2>
                <p><a href="index.html">Про нас</a></p>
                <p><a href="employees.html">Наша команда</a></p>
                <p><a href="services.html">Послуги</a></p>
                <p><a href="contacts.html">Контакти</a></p>
            </div>
        
            <div class="location">
                <h2>Наше розташування</h2>
                <p>вулиця Богдана Гаврилишина, 24,<br></br>Київ, 02000</p>
                <img src="img/map.svg" alt="" class="map"/>
            </div>
        
            <div class="social-media">
                <h2>Соціальні мережі</h2>
                <div class="social-icons">
                    <a href="#" class="icon-link">
                        <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000"/>
                    </a>
                    <a href="#" class="icon-link">
                        <img src="https://img.icons8.com/?size=100&id=62225&format=png&color=000000"/>
                    </a>
                    <a href="#" class="icon-link">
                        <img src="https://img.icons8.com/?size=100&id=61956&format=png&color=000000" alt=""/>
                    </a>
                    <a href="#" class="icon-link">
                        <img src="https://img.icons8.com/?size=100&id=PedPR10iVAnY&format=png&color=000000" alt=""/>
                    </a>
                    <a href="#" class="icon-link">
                        <img src="https://img.icons8.com/?size=100&id=437&format=png&color=000000" alt=""/>
                    </a>
                </div>
            </div>
        </div>
        
    </footer>
            
        </>
    );
}