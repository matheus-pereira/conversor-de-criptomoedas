class HttpService {

    request(method, url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    (xhr.status == 200) ? resolve(xhr.responseText) : reject(xhr.responseText);
                }
            }
            xhr.send();
        })
    }
    
}