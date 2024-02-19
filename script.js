var tl = gsap.timeline()

tl.from("#nav h1,#nav ul,#nav .btn",{
	y:-100,
	duration:1,
	opacity:0,
	stagger:0.2,
})
tl.from("#home .left, .right",{
	x:-100,
	y:100,
	duration:1,
	opacity:0,
})
tl.from("#home .center",{
	x:-100,
	duration:1,
	opacity:0,
})
