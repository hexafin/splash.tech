export const showToaster = (type,msg) => {
    let myToaster = new CustomEvent("showToast", {
        detail: {
         type:type,
         msg:msg,
         isShowToast:true
        }
    });
    document.dispatchEvent(myToaster);
}