

const mainSlide = document.querySelector('.slide')
const slides = document.querySelectorAll(".slide_inner")

const total_slides = slides.length
let current_slide = 0;

const prevBtn = document.querySelectorAll(".prev")
const nextBtn = document.querySelectorAll(".next")

prevBtn.forEach((btn)=>{
	btn.addEventListener('click', prev)
})

nextBtn.forEach((btn)=>{
	btn.addEventListener('click', next)
})


function next() {
	
	if(current_slide == (total_slides - 1)){
		//move to begining
		current_slide = 0
		mainSlide.style.transform = `translateX(-${100 * current_slide}vw)`
	}else{
		current_slide += 1;
		mainSlide.style.transform = `translateX(-${100 * current_slide}vw)`
	}
	console.log("current slide is ", current_slide)
	console.log("total slide is ", total_slides)
}

function prev() {
	if(current_slide == 0){
		//move to end
		current_slide = total_slides - 1
		mainSlide.style.transform = `translateX(-${100 * current_slide}vw)`
	}else{
		current_slide -= 1;
		mainSlide.style.transform = `translateX(-${100 * current_slide}vw)`
	}
}

