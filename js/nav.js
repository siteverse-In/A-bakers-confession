let nav = document.querySelector("nav")
nav.addEventListener("click", function (e) {
  e.preventDefault()
  console.log(window.location.href, e.target.href, e.target.href !== window.location.href)
  if (e.target.tagName == 'A' && e.target.href !== window.location.href) {
    let body = document.querySelectorAll("body")[0]
    body.classList.add('right')
    setTimeout(() => {
      window.location.href = e.target.href
    }, 150)
  }
})

//header

let burgerbtn = document.querySelector(".burger-icon")
let header = document.querySelector("header")
burgerbtn.addEventListener("click", function () {
  header.classList.toggle("mobside-open")
  document.querySelector("body").classList.toggle("noscroll")
})

//gallery


function enlargeImage(img) {
  const overlay = document.getElementById("overlay");
  const enlargedContainer = document.getElementById("enlargedContainer");
  const enlargedImg = document.getElementById("enlargedImg");

  enlargedImg.src = img.src;
  overlay.style.display = "block";
  enlargedContainer.classList.add("active");
  document.body.style.overflow = "hidden"; // Disable scrolling
}

function closeEnlargedImage() {
  const overlay = document.getElementById("overlay");
  const enlargedContainer = document.getElementById("enlargedContainer");

  overlay.style.display = "none";
  enlargedContainer.classList.remove("active");
  document.body.style.overflow = "auto"; // Enable scrolling
}
