const expandButton = document.querySelector('header button')
expandButton.addEventListener('click', expand)

function expand () {
  document.body.classList.toggle('expand')
}

function changeImage() {
  if (document.getElementById("imgClickAndChange").src == "https://media.discordapp.net/attachments/620743305713680385/1149644670532591687/vacation_3.png?width=1034&height=1034"){
      document.getElementById("imgClickAndChange").src = "https://media.discordapp.net/attachments/620743305713680385/1149641421188497439/outfitalleen.png?width=1034&height=1034";
  } else {
      document.getElementById("imgClickAndChange").src = "https://media.discordapp.net/attachments/620743305713680385/1149644670532591687/vacation_3.png?width=1034&height=1034";
  }
}
