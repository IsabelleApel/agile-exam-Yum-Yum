
export function randomString(length){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let randomstring = '';
    for(let i = 0; i <= length; i++){
        let char = Math.floor(Math.random() * chars.length);
        randomstring += chars[char];
    }
    return randomstring;
}