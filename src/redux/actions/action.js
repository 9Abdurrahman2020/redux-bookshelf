export function addBookToReadingList(payload){
    return {
        type:'add_book',
        payload
    }
}
export function removeBookToReadingList(payload){
    return {
        type:'remove_book',
        payload
    }
}