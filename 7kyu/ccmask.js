//Your task is to write a function maskify, which changes all but the 
//last four characters into '#'.

function maskify(cc) {
    if (cc.length <= 4) {
        return cc;
    } else {
        return "#".repeat(cc.length - 4) + cc.slice(-4);
    }
}