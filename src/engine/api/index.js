import axios from 'axios';

class Api {
    
    constructor() {
        this.http = axios.create({ baseURL: 'https://github.com/bogdanblyzniuk94/ToDoList/blob/master/db.json' });
    }

    static getInstance() {
        
        if(!Api.instance) {
            Api.instance = new Api();
        }
        return Api.instance;
    }

    getRequest() {
        
        return this.http.get('/posts');

    }
    
    postRequest(postData, status) {

        return this.http.post('/posts', {
            title: postData,
            author: 'Bogdan',
            isDone: status
        })

        .catch(function(error){
            console.log(error);
        })

    }

    delRequest(deleteData) {

        return this.http.delete('/posts/' + deleteData, {

        })
        
        .catch(function(error){
            console.log(error);
        })
    }

    patchRequest(patchDataId, patchData ) {
        
        return this.http.patch('/posts/' + patchDataId, {
            title: patchData,
        })
        
        .catch(function(error){
            console.log(error);
        })
    }

    patchIsDoneRequest( patchDataId, status) {

        return this.http.patch('/posts/' + patchDataId, {
            isDone: status
        })
        
        .catch(function(error){
            console.log(error);
        })
    }

    
}

export default Api.getInstance();