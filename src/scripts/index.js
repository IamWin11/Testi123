import '../style/style.css'
import '../style/responsif.css'
import '../style/quiz.css'
import '../scripts/component/component.js'
import './buku.js'
import './quiz.js'

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('navMenuHidden');
    if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}

// Make functions global
window.toggleSidebar = toggleSidebar;