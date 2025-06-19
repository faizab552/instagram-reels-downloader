
document.getElementById("download-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const url = document.getElementById("video-url").value;
    const result = document.getElementById("result");

    if (!url.includes("instagram.com")) {
        result.innerHTML = "<p style='color:red;'>Please enter a valid Instagram URL.</p>";
        return;
    }

    const embedUrl = url.replace("/reel/", "/p/").split("?")[0] + "embed";
    result.innerHTML = \`
        <p>Preview:</p>
        <iframe src="\${embedUrl}" width="300" height="400" frameborder="0"></iframe>
        <p><a href="\${url}" target="_blank">Open in Instagram</a></p>
    \`;
});
