import Type from "./AppActionType";

export const startLoading=()=>{
    return{
        type: Type.showLoader
    }
}

export const stopLoading=()=>{
    return{
        type: Type.hideLoader
    }
}