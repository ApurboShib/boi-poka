const get_stored_book = () => {
    const storedBookStr = localStorage.getItem('readList');
    if (storedBookStr) {
        const StoredBookData = JSON.parse(storedBookStr);
        return StoredBookData;
    }
    else {
        return [];
    }
}



const Add_to_store_DB = (id) => {
    const StoredBookData = get_stored_book();
    if (StoredBookData.includes(id)) {
        alert("This book is already in your read list.");
    } else {
        StoredBookData.push(id);
        localStorage.setItem('readList', JSON.stringify(StoredBookData));
    }

}
export { Add_to_store_DB, get_stored_book };