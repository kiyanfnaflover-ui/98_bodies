document.addEventListener("DOMContentLoaded", () => {
    const linkList = document.getElementById("link-list");
    const totalLinks = 4; // Reads link1.txt up to link4.txt

    for (let i = 1; i <= totalLinks; i++) {
        fetch(`links/link${i}.txt`)
            .then(response => {
                if (!response.ok) throw new Error("Offline");
                return response.text();
            })
            .then(urlText => {
                const cleanUrl = urlText.trim();
                const li = document.createElement("li");
                const a = document.createElement("a");
                
                a.href = cleanUrl;
                a.textContent = `> ACCESS_DATA_FILE_${i}`;
                a.target = "_blank";
                
                li.appendChild(a);
                linkList.appendChild(li);
            })
            .catch(error => {
                const li = document.createElement("li");
                li.textContent = `> FILE_${i} [CORRUPTED/OFFLINE]`;
                li.style.color = "#440000";
                linkList.appendChild(li);
            });
    }
});