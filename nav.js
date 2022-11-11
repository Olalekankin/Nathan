// Menu load for all page 

class NavigationBar extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`
            <nav>
                <div class="logo">
                <a href="index.html"><h1>Ollnate</h1></a> 
                </div>
                <button class="menu-btn">
                    <div class="bars one"></div>
                    <div class="bars two"></div>
                    <div class="bars three"></div>
                </button>
                <ul class="nav-links">
                    <li><a class="active" href="index.html">Home</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a class="abe" href="#">B <div class="be">
                        <span  class="hypen
                        ">-</span> <span>e</span>
                    </div></a></li>
                    <li><button class="nav-btn">Let's talk</button></li>
                </ul>
            
            </nav>
    `
    }
}

customElements.define('my-nav', NavigationBar);