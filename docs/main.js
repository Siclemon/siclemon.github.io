const buttons = document.querySelectorAll("button.nav__button");
const tabs = document.querySelectorAll(".tab");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        //display the correct tab
        tabs.forEach(tab => {
            tab.style.display = "none";
        });
        const currentTab = document.querySelector(`#${btn.id}_tab`);
        if (currentTab)
            currentTab.style.display = "flex";

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        //add style to pressed button
        const lis = document.querySelectorAll("li.nav__button");
        lis.forEach(li => {
            li.classList.remove("active");
        });
        btn.closest("li").classList.add("active");
    });
});

buttons[0].click();

const listElements = document.querySelectorAll("#skills_tab li, .interests li");
listElements.forEach((skill, i) => {
    skill.style.animationDelay = `${i * 1}s`;

    let skillName = skill.innerHTML;
    const icon = document.createElement("img");
    if (skillName == "C#") skillName = "csharp";
    icon.src = `./assets/img/icons/${skillName}.svg`;
    icon.style.height = "1.7rem";
    icon.style.width = "50px";
    icon.style.position = "absolute";
    icon.style.left = "27px";
    icon.style.marginTop = "3px";
    skill.appendChild(icon);
});

const options = document.querySelector("dialog");
const close = document.querySelector(".options__close");
options.showModal();
close.addEventListener("click", () => options.close());

const animationToggle = document.getElementById("animCheckbox");
const animationTogglee = document.querySelector("#animLabel div");
let animatedElements = document.querySelectorAll(".animated");
animatedElements = [...animatedElements].concat([...listElements]);

console.log(animatedElements)

for (const el of animatedElements) {
    if (!animationToggle.checked) {
        el.classList.add("noAnimation");
    }
}

animationToggle.addEventListener("change", () => {
    for (const el of animatedElements) {
        el.classList.toggle("noAnimation");
    }
});

const dysToggle = document.getElementById("dysFont");
const html = document.querySelector("html");
const body = document.body;

dysToggle.addEventListener("change", () => {
    if (dysToggle.checked) {
        body.style.fontFamily = "openDyslexic";
        html.style.fontSize = "0.9rem";
    } else {
        body.style.fontFamily = "Pokemon BW";
        html.style.fontSize = "1.4rem";
    }
});