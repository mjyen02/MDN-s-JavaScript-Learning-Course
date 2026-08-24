const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function addItem(event)
{
    event.preventDefault();
    if (input.value === "")
    {
        input.focus();
        return;
    }

    const item = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn2 = document.createElement("button");

    li.appendChild(span);
    li.appendChild(btn2);

    span.textContent = item;
    btn2.textContent = "Remove Item";

    list.appendChild(li);
    btn2.addEventListener("click", () =>
    {
        list.removeChild(li);
    });

    input.focus();
}

btn.addEventListener("click", addItem);