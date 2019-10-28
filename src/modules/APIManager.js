

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
        return fetch(`${remoteURL}/${database}`).then(e => e.json())
    },
    delete(id, database) {
        return fetch(`${remoteURL}/${database}/${id}`, {
                method: "DELETE"
            })
            .then(result => result.json())
    },
    post(newObject, database) {
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
    getObjectWithDatabase(id, firstdata, seconddata) {
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
    searchUsername(username) {
        return fetch(`${remoteURL}/users?username=${username}`)
            .then(e => e.json())
    },
}

export default APIManager