const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = 
[
    {filename: "pic1.jpg", alt: "Closeup of a human eye"},
    {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
    {filename: "pic3.jpg", alt: "Purple and white pansies"},
    {filename: "pic4.jpg", alt: "Section of wall form a pharaoh's tomb"},
    {filename: "pic5.jpg", alt: "Large moth on a leaf"}
]

const basePath = "images/";
for (const image of images)
{
    const img = document.createElement("img");
    img.src = `${basePath}${image.filename}`;
    img.alt = `${image.alt}`;
    img.setAttribute("tabindex", 0);
    thumbBar.appendChild(img);
    img.addEventListener("click", updateDisplayedImage);
    img.addEventListener("keydown", (event) =>
    {
        if (event.key === "Enter")
        {
          updateDisplayedImage(event);
        }
    });
}

function updateDisplayedImage(event)
{
    displayedImage.src = event.target.src;
    displayedImage.alt = event.target.alt;
}

btn.addEventListener("click", () =>
{
    if (btn.classList.contains("dark"))
    {
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    }
    else
    {
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    btn.classList.toggle("dark");
});