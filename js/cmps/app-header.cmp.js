export default {
    template: `
        <header class="app-header-layout app-header">
            <div class="logo-layout">
                <router-link to="/"><h1>Appsus</h1></router-link>
            </div>
            <nav class="main-nav-layout">
                <ul class="nav-layout">
                    <router-link to="/"><li>Home</li></router-link>
                    <router-link to="/mail"><li>Mail</li></router-link>
                    <router-link to="/keep"><li>Notes</li></router-link>
                    <router-link to="/book"><li>Books</li></router-link>
                    <router-link to="/about"><li>About</li></router-link>
                </ul>
            </nav>
        </header>
        `,
}