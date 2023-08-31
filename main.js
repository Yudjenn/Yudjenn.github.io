let smallCursor = document.querySelector(".smallBall")
let bigCursor = document.querySelector(".bigBall")
let cursorClickText = document.querySelector(".cursorClickText")
// checking hover
let hoverElements = document.querySelectorAll(".hoverable")
for (let i = 0; i < hoverElements.length; i++) {
    hoverElements[i].addEventListener("mouseover", () => {
        smallCursor.classList.add("hovering")
        bigCursor.classList.add("hovering")
        cursorClickText.classList.add("hovering")
    })
    hoverElements[i].addEventListener("mouseleave", () => {
        smallCursor.classList.remove("hovering")
        bigCursor.classList.remove("hovering")
        cursorClickText.classList.remove("hovering")
    })
}

let textAnimated = document.querySelectorAll("p")
for (let i = 0; i < textAnimated.length; i++) {
    textAnimated[i].style.animationDelay = `${i / 20}s`
}

let projectImage = document.querySelectorAll(".projectImage")

for (let i = 0; i < projectImage.length; i++) {
    var backgroundPosition = 0;
    projectImage[i].addEventListener('mousemove', () => {
        backgroundPosition = window.getComputedStyle(projectImage[i]).backgroundPositionY
    })
    projectImage[i].addEventListener('mouseleave', () => {
        console.log(backgroundPosition)
        projectImage[i].style.setProperty("--backgroundPosition", `${backgroundPosition}`)
    })

    projectImage[i].addEventListener('mousemove', (event) => {
        const getBoudingRect = projectImage[i].getBoundingClientRect()
        const width = getBoudingRect.width
        const height = getBoudingRect.height
        const centreX = getBoudingRect.left + width / 2
        const centreY = getBoudingRect.top + height / 2
        const mouseX = event.clientX - centreX
        const mouseY = event.clientY - centreY
        const rotateX = 5 * mouseY / (height / 2)
        const rotateY = -5 * mouseX / (width / 2)

        projectImage[i].style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1)`
    })
}
for (let i = 0; i < projectImage.length; i++) {
    projectImage[i].addEventListener('mouseleave', (event) => {
            projectImage[i].style.transform = "none"
    })
}

let reveals = document.querySelectorAll(".reveal")
document.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let topElement = reveals[i].getBoundingClientRect().top
        let elementVisible = 150
        if (topElement < windowHeight - elementVisible) {
            reveals[i].classList.add("active")
        } else {
            reveals[i].classList.remove("active")
        }
    }
})

// move the cursor following the mouse position
document.addEventListener('mousemove', (event) => {
    setTimeout(() => {
        smallCursor.style.left = `calc(${event.clientX}px - ${smallCursor.getBoundingClientRect().width / 2}px)`
        smallCursor.style.top = `calc(${event.clientY}px - ${smallCursor.getBoundingClientRect().width / 2}px)`
    }, 10)
    setTimeout(() => {
        bigCursor.style.left = `calc(${event.clientX}px - ${bigCursor.getBoundingClientRect().width / 2}px)`
        bigCursor.style.top = `calc(${event.clientY}px - ${bigCursor.getBoundingClientRect().width / 2}px)`
    }, 40)
})