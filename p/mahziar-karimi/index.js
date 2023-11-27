const showSkillsButton = document.getElementById("showSkillsButton")
const showBioButton = document.getElementById("showBioButton")
const showProjectsButton = document.getElementById("showProjectsButton")
const hideSkillsButton = document.getElementById("hideSkillsButton")
const hideBioButton = document.getElementById("hideBioButton")
const hideProjectsButton = document.getElementById("hideProjectsButton")
const mainDiv = document.getElementById("holder")
const skillsDiv = document.getElementById("skillsDiv")
const projectsDiv = document.getElementById("projectsDiv")
const bioDiv = document.getElementById("bioDiv")
function showSkills() {
    document.getElementById("showProjectsButton").style.display = "none"
    document.getElementById("showBioButton").style.display = "none"
    document.getElementById("showSkillsButton").style.display = "none"
    document.getElementById("hideSkillsButton").style.display = "inline-block"
    document.getElementById("hideSkillsButton").style.marginLeft = "0px"
    document.getElementById("holder").style.height = "750px"
    //document.getElementById("holder").style.width = "1000px"
    skillsDiv.innerHTML = `
    <ul id="skillsUl">
        <li><h2>SQL ( Beginner)</h2></li>
        <li><h2>Java ( Intermediate)</h2> </li>
        <li><h2>C# (Intermediate)</h2> </li>
        <li><h2>Python ( Beginner-Intermediate)</h2> </li>
        <li><h2>HTML,CSS ( Intermediate)</h2></li>
        <li><h2>JavaScript ( Intermediate-Advanced)</h2></li>
        
    </ul>`
}
function hideSkills() {
    document.getElementById("showProjectsButton").style.display = "inline-block"
    document.getElementById("showBioButton").style.display = "inline-block"
    document.getElementById("showSkillsButton").style.display = "inline-block"
    document.getElementById("hideSkillsButton").style.display = "none"
    document.getElementById("holder").style.height = "350px"
    skillsDiv.innerHTML = ""
}
// forgive me for using document.getElementById instead of the var to .style it :(

function showProjects() {
    showProjectsButton.style.display = "none"
    showBioButton.style.display = "none"
    showSkillsButton.style.display = "none"
    hideProjectsButton.style.display = "inline-block"
    hideProjectsButton.style.marginLeft = "0px"
    mainDiv.style.height = "900px"

    projectsDiv.innerHTML = `
    <ul>
        <li><a href="https://mahziarkf.github.io/Projects-signupLoginPage/" class="projectLinks">Login Page</a></li>
        <p><b>Description : </b> this is a login/signup page<br>
        with the ability to actualy create an account and login<br>
        First click on New? button then create an account<br>
        After creating an account go back to the login option<br>
        then type in your username and password.<br>
        <b></b> if multiple user are using the website on the<br>
        same System/browser your password and username is visible<br>
        <b>Inspect -> Applications -> LocalStorage</b></p>
        <li><a href="https://mahziarkf.github.io/poker/poker.html" class="projectLinks">BlackJack</a></li>
        <p><b>Description : </b>Have you ever played blackjack before?<br>
        well if not i can explain it real fast.<br>
        it is a card and luck based game that draws 3 random cards<br>
        from 1-13. if your total cards add up to more than 21 you<b>lose</b><br>
        ,if your total sum of cards are below 21 you can draw cards again
        and if you finally get a sum of 21 before losing you <b>Win!</b>.</p>
        
    </ul>
    `

}
function hideProjects() {
    showBioButton.style.display = "inline-block"
    showProjectsButton.style.display = "inline-block"
    showSkillsButton.style.display = "inline-block"
    hideProjectsButton.style.display = "none"
    mainDiv.style.height = "350px"
    projectsDiv.innerHTML = ""
}

function showBio() {
    showProjectsButton.style.display = "none"
    showBioButton.style.display = "none"
    showSkillsButton.style.display = "none"
    hideBioButton.style.display = "inline-block"
    mainDiv.style.height = "820px"
    bioDiv.innerHTML = `
    <p><b>Thanks For clicking on me!</b></p>
    <p>if you wasn't blind you already know my name but if somehow<br>
    you didn't catch my name, it is <b>Mahziar Karimifar</b>
    <br>
    <br>
    I am 16 years old and soon i'll turn 17 witch gets me excited<br>
    about getting my driver's license a year later.
    <br>
    <br>
    i also Wacth anime.
    <br>
    i have watched aot,jojo,jujusto kaison, opm, hell's paradise,tokyo revenger and ghoul<br>
    my favorite anime tho is ofcourse Jojo and my fav character is Diavolo from golden wind.</p>
    <br>
    <br>
    <p>And for games i play R6 And Some chess!</p>
    `
}

function hideBio() {
    showBioButton.style.display = "inline-block"
    showProjectsButton.style.display = "inline-block"
    showSkillsButton.style.display = "inline-block"
    hideBioButton.style.display = "none"
    mainDiv.style.height = "350px"
    bioDiv.innerHTML = ""
}