let storage={
    setStorage(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    getStorage(key){
        return JSON.parse(localStorage.getItem(key));
    },
    removeStorage(key){
        localStorage.removeStorage(key);
    }
}
export default storage;
