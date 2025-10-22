import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <p>© 2025 Lairen. TCG Fan Store by Coronel Dalma</p>
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/dalma-coronel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="icon" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 8.98h4v12H3v-12zM9 8.98h3.6v1.64h.05a3.95 3.95 0 013.55-1.95c3.8 0 4.5 2.5 4.5 5.75v6.56h-4v-5.8c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.9H9v-12z"/></svg>
                </a>
                <a href="https://github.com/CoronelDalma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg className="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.48v-1.7c-2.78.61-3.37-1.36-3.37-1.36-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.26 10.26 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
                </a>
                <a href='https://lairentcg.com.ar/'>Lairen Oficial</a>
            </div>
        </footer>
    )
}