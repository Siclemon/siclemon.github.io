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

        // const abtme = document.querySelector("#about_me")
        // abtme.style.display = "none";
    })
});

buttons[0].click();

const skills = document.querySelectorAll("#skills_tab li, .interests li");
skills.forEach((skill, i) => {
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