let helper = {
    fixedScroll(status) {
        if (status) {
            document.body.style.position = "fixed";
          }else{
            document.body.style.position = "static";
          }
    }
}

export {helper}