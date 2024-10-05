let keyframeAndAnimation = {
  keyframes: {
    popopen: {
      from: { 
        opacity: "0%",
        transform: "translateY(-10px)"
      },
      to: {
        opacity: "100%",
        transform: "translateY(0px)"
      }
    },
    popclose: {
      from: {
        opacity: "100%",
        transform: "translateY(0px)"
      },
      to: {
        opacity: "0%",
        transform: "translateY(-10px)"
      }
    } 
  },
  animation:{
    popopen: "popopen 400ms ease-in-out",
    popclose: "popclose 400ms ease-in-out"
  }
}

export default keyframeAndAnimation