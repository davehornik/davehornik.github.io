gsap.to('.text1',{
    x:'10%',rotate:10,duration:0.85,scrollTrigger:{
      trigger:'.text0',
      scrub:true,
      start:'top 10%'
    }
  })
  gsap.to('.text2',{
    x:'20%',rotate:-10,duration:0.85,scrollTrigger:{
      trigger:'.text2',
      scrub:true,
      start:'top 20%'
    }
  })
  gsap.to('.text3',{
    x:'-50%',rotate:10,duration:0.85,scrollTrigger:{
      trigger:'.text1',
      scrub:true,
      start:'top 30%'
    }
  })
  gsap.to('.text4',{
    x:'-20%',rotate:-10,duration:0.85,scrollTrigger:{
      trigger:'.text3',
      scrub:true,
      start:'top 40%'
    }
  })