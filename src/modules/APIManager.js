

const remoteURL = "http://localhost:5002"

let APIManager = {
    /*
          Since the purpose of this module is to be used by
          all of the more specialized ones, then the string
          of `animals` should not be hard coded here.
    */

    get(id, database) {
        return fetch(`${remoteURL}/${database}/${id}`).then(e => e.json())
    },
    getAndExpand(id, database, expanded) {
        return fetch(`${remoteURL}/${database}/${id}?_expand=${expanded}`).then(e => e.json())
    },
    getAll(database) {
        //http://localhost:5002/favorites/1/comments?userId=1
        //http://localhost:5002/favorites/1/comments?userId=1 this one works
    },
        getCommentsFromOneFaveAndSingleUser(firstResource,id,secondResource,userId) {
            return fetch(`${remoteURL}/${firstResource}/${id}/${secondResource}?userId=${userId}`)
            .then(result => result.json())
        },

    getAllWithUserId(database,userId,secondResource) {
        return fetch(`${remoteURL}/${database}/?userId=${userId}&_embed=${secondResource}`).then(e => e.json())
    },                  //http://localhost:5002/favorites?_sort=votes&_order=asc&userId=1&_embed=comments this one works
    
    delete(id, database) {
        return fetch(`${remoteURL}/${database}/${id}`, {
                method: "DELETE"
            })
            .then(result => result.json())
    },
    post(newObject, database) {
        console.log(newObject)
        return fetch(`${remoteURL}/${database}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObject)
        }).then(data => data.json())
    },
    update(editedObject, database) {
        return fetch(`${remoteURL}/${database}/${editedObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
    updateComment(editedObject, database,id) {
        return fetch(`${remoteURL}/${database}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        }).then(data => data.json());
    },
    getObjectWithDatabase(firstdata,id, seconddata) {
        return fetch(`${remoteURL}/${firstdata}/${id}?_embed=${seconddata}`)
            .then(result => result.json())
    },
    searchDatabase(search, database, type) {
        return fetch(`${remoteURL}/${database}?${type}_like=${search}`)
            .then(result => result.json())
    },

    //APi Fetch That adds a user to json
    addUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    searchEmail(email) {
        return fetch(`${remoteURL}/users?email=${email}`)
            .then(e => e.json())
    },
    searchZomato(searchTerm) {
		return fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${searchTerm}&count=20&apikey=6e72e09f0a9e5501ab2d5645e8fac52d`)
			.then(result => result.json())
			// .then(parsedResult => {
			// 	console.log(parsedResult.restaurants);
			// 	return parsedResult.restaurants;
			// });
	}
}

export default APIManager