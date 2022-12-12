import Noty from 'noty';


export function successMsg(text : string) {
    new Noty({
        text, 
        theme: 'relax',
        type:"success",
        timeout: 1000
    }).show()
}

export function errorMsg(text : string) {
    new Noty({
        text, 
        theme: 'relax',
        type:"error",
        timeout: 1000
    }).show()
}

export function warningMsg(text : string) {
    new Noty({
        text, 
        theme: 'relax',
        type:"warning",
        timeout: 1000
    }).show()
}