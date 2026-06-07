:root {
    --bg-color: #030000;
    --text-color: #b30000; /* Creepy dark red */
    --terminal-green: #00ff00;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: "Courier New", Courier, monospace;
    margin: 0;
    padding: 20px;
    /* 90s CRT Scanline effect */
    background-image: linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
    background-size: 100% 4px;
}

header {
    text-align: center;
    border-bottom: 2px dashed var(--text-color);
    padding-bottom: 20px;
    margin-bottom: 20px;
}

.logo {
    max-width: 250px;
    filter: grayscale(100%) contrast(150%) sepia(100%) hue-rotate(300deg) saturate(300%);
}

h1, h2, h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 5px var(--text-color);
}

.alert-text {
    color: #ff0000;
    text-decoration: underline dotted #ff0000;
}

.layout-container {
    display: flex;
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.content-box {
    flex: 3;
    border: 1px solid var(--text-color);
    padding: 20px;
    background: #0a0000;
    box-shadow: 0 0 10px rgba(179, 0, 0, 0.3);
}

/* Hacker Terminal Style */
.terminal-box {
    background: #000;
    border: 1px solid var(--terminal-green);
    color: var(--terminal-green);
    padding: 15px;
    margin: 20px 0;
    text-shadow: 0 0 5px var(--terminal-green);
}

.blink {
    animation: blinker 1s linear infinite;
}

@keyframes blinker {
    50% { opacity: 0; }
}

/* Sidebar for Links */
.sidebar {
    flex: 1;
    border: 1px dashed #550000;
    padding: 15px;
    background: #050000;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 15px;
}

a {
    color: var(--text-color);
    text-decoration: none;
    font-weight: bold;
    border-bottom: 1px solid transparent;
}

a:hover {
    color: #fff;
    text-shadow: 0 0 8px #fff;
    border-bottom: 1px solid #fff;
}

.small-text {
    font-size: 0.8em;
    color: #660000;
}

/* Your Ad Container */
.ad-container {
    margin-top: 40px;
    border: 2px solid #555;
    color: #555;
    padding: 20px;
    text-align: center;
    background: #000;
}

/* Download Button Styles */
.download-section {
    margin: 30px 0;
    text-align: center;
    border: 1px solid #330000;
    padding: 20px;
    background: #050000;
}

.creepy-btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #000;
    color: #ff0000;
    border: 2px solid #ff0000;
    font-family: "Courier New", Courier, monospace;
    font-weight: bold;
    font-size: 1.2em;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 0 5px #550000;
}

.creepy-btn:hover {
    background-color: #ff0000;
    color: #000;
    box-shadow: 0 0 15px #ff0000;
    text-shadow: none;
}

.creepy-btn:active {
    background-color: #aa0000;
    border-color: #aa0000;
}
