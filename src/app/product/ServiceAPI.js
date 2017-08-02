
export function fetchJson(url, options=undefined) {
    return window.fetch(url, options)
           .then ( (response) => {
               console.log(response);
               return response.json();
           })
}
 

export function fetchProducts() {
        return fetchJson("http://localhost:7070/api/products")
    }

 
 
export function fetchPostJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'POST',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}


export function fetchPutJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'PUT',
        headers: Object.assign({
                    'Content-Type': 'application/json'
                 }, headers),
        body: JSON.stringify(data)
    })
}


export function fetchDeleteJson(url, data, headers = undefined) {
    return fetchJson(url, {
        method: 'DELETE',
        headers: headers,
        body: JSON.stringify(data)
    })
}

//GET /api/products/12345
export function  fetchProduct(id) {
    return fetchJson("http://localhost:7070/api/products/" + id)
}

export function fetchBrands() {
        return fetchJson("http://localhost:7070/api/brands")
    }





export function updateProduct(product) {
    return fetchPutJson('http://localhost:7070/api/products/' 
                         + product.id, product)
}

    //create new
export function createProduct(product) {
        return fetchPostJson('http://localhost:7070/api/products',
                             product)
    }

export function saveProduct(product) {
        if (product.id)
            return updateProduct(product);
        
        return createProduct(product);
    }