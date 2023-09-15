
const previewClick = document.querySelectorAll('.main-image')
previewClick.forEach((e) => e.addEventListener("click", getClass))

function getClass() {
  const cls = this.getAttribute('src')
    console.log(cls)

}

