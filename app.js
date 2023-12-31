
const previewClick = document.querySelectorAll('.main-image')
const productImage = document.getElementById('main-image')
const mainImageSrc = productImage.getAttribute('src')

for (let i = 0; i < previewClick.length; i++) {
  const thumbnailSrc = previewClick[i]
  if (mainImageSrc === thumbnailSrc.getAttribute('src')) {
    thumbnailSrc.style.opacity = "0.3"
  }
}

previewClick.forEach((e) => e.addEventListener("click", getClass))
function getClass() {
  for (let i = 0; i < previewClick.length; i++) {
    const thumbnailSrc = previewClick[i]
    thumbnailSrc.style.opacity = "0.3" ? "1" : "0.3"
  }
  const image_thumbnail = this.getAttribute('src')
  productImage.setAttribute('src', image_thumbnail)
  this.style.opacity = "0.3"
}

productImage.addEventListener("click", zoomImage)

function zoomImage(){
  console.log('Big Image Is Clicked')
}


