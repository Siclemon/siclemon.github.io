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

        //add style to pressed button
        const lis = document.querySelectorAll("li.nav__button");
        lis.forEach(li => {
            li.classList.remove("active");
        });
        btn.closest("li").classList.add("active");

        const abtme = document.querySelector("#about_me")
        abtme.style.display = "none";
    })
});

const skills = document.querySelectorAll("#skills_tab li");
skills.forEach((skill, i) => {
    skill.style.animationDelay = `${i * 2}s`;
})