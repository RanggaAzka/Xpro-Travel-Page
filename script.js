// Enhanced hamburger menu functionality with smooth animations
const menuBtn = document.getElementById("menu-btn")
const menuClose = document.getElementById("menu-close")
const navUl = document.querySelector("nav ul")
const menuLinks = document.querySelectorAll("nav ul li a")

// Enhanced hamburger menu with smooth transitions
menuBtn?.addEventListener("click", () => {
  navUl.classList.add(
    "fixed",
    "top-0",
    "-right-64",
    "bg-black",
    "bg-opacity-80",
    "backdrop-blur-md",
    "border",
    "border-gray-500",
    "w-64",
    "h-screen",
    "flex",
    "flex-col",
    "justify-start",
    "items-start",
    "transition-all",
    "duration-500",
    "z-50",
    "lg:flex",
    "lg:flex-col",
    "active",
    "shadow-2xl",
  )
  navUl.classList.remove("lg:ml-96")

  menuLinks.forEach((link) => {
    link.classList.add("text-white", "hover:text-cyan-300")
    link.classList.remove("text-muted-foreground", "hover:text-primary")
  })

  menuClose.classList.remove("hidden")
  document.body.style.overflow = "hidden"
})

menuClose?.addEventListener("click", () => {
  navUl.classList.remove(
    "fixed",
    "top-0",
    "-right-64",
    "bg-black",
    "bg-opacity-80",
    "backdrop-blur-md",
    "border",
    "border-gray-500",
    "w-64",
    "h-screen",
    "flex",
    "flex-col",
    "justify-start",
    "items-start",
    "active",
    "shadow-2xl",
  )
  navUl.classList.add("lg:ml-96")

  menuLinks.forEach((link) => {
    link.classList.remove("text-white", "hover:text-cyan-300")
    link.classList.add("text-muted-foreground", "hover:text-primary")
  })

  menuClose.classList.add("hidden")
  document.body.style.overflow = "auto"
})

// Import Swiper from Swiper library
import Swiper from "swiper"

// Initialize Swiper after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    effect: "slide",
    speed: 600,
  })

  // Observe elements for scroll animations
  const elementsToAnimate = document.querySelectorAll(".testimoni, .swiper-slide, .leg1")
  elementsToAnimate.forEach((el) => observer.observe(el))

  // Initialize with budget packages shown by default
  showbudget()
})

function showbudget() {
  // Update button states
  updateButtonStates("budget")

  // Show budget packages with animation
  const budgetPackages = ["budget", "budget2", "budget3", "budget4", "budget5", "budget6"]
  const standardPackages = ["standar", "standar2", "standar3", "standar4", "standar5", "standar6"]
  const premiumPackages = ["premium", "premium2", "premium3", "premium4", "premium5", "premium6"]

  showPackages(budgetPackages)
  hidePackages([...standardPackages, ...premiumPackages])
}

function showstandar() {
  // Update button states
  updateButtonStates("standard")

  // Show standard packages with animation
  const budgetPackages = ["budget", "budget2", "budget3", "budget4", "budget5", "budget6"]
  const standardPackages = ["standar", "standar2", "standar3", "standar4", "standar5", "standar6"]
  const premiumPackages = ["premium", "premium2", "premium3", "premium4", "premium5", "premium6"]

  showPackages(standardPackages)
  hidePackages([...budgetPackages, ...premiumPackages])
}

function showpremium() {
  // Update button states
  updateButtonStates("premium")

  // Show premium packages with animation
  const budgetPackages = ["budget", "budget2", "budget3", "budget4", "budget5", "budget6"]
  const standardPackages = ["standar", "standar2", "standar3", "standar4", "standar5", "standar6"]
  const premiumPackages = ["premium", "premium2", "premium3", "premium4", "premium5", "premium6"]

  showPackages(premiumPackages)
  hidePackages([...budgetPackages, ...standardPackages])
}

function updateButtonStates(activeType) {
  const buttons = document.querySelectorAll(".destinasi button")
  buttons.forEach((button) => {
    button.classList.remove("ring-2", "ring-offset-2")
    if (
      (activeType === "budget" && button.textContent.includes("Budget")) ||
      (activeType === "standard" && button.textContent.includes("Standar")) ||
      (activeType === "premium" && button.textContent.includes("Premium"))
    ) {
      button.classList.add("ring-2", "ring-offset-2")
    }
  })
}

function showPackages(packageIds) {
  packageIds.forEach((id, index) => {
    const element = document.getElementById(id)
    if (element) {
      setTimeout(() => {
        element.classList.remove("hidden")
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"

        // Trigger animation
        setTimeout(() => {
          element.style.transition = "all 0.5s ease"
          element.style.opacity = "1"
          element.style.transform = "translateY(0)"
        }, 50)
      }, index * 100) // Stagger animation
    }
  })
}

function hidePackages(packageIds) {
  packageIds.forEach((id) => {
    const element = document.getElementById(id)
    if (element) {
      element.style.transition = "all 0.3s ease"
      element.style.opacity = "0"
      element.style.transform = "translateY(-20px)"

      setTimeout(() => {
        element.classList.add("hidden")
      }, 300)
    }
  })
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      if (navUl.classList.contains("active")) {
        menuClose.click()
      }
    }
  })
})

const observerOptions = { 
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in")
    }
  })
}, observerOptions)

window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
