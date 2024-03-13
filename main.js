//EJERCICIO 1.1

fetch('https://jsonplaceholder.typicode.com/users')
.then(respuesta => respuesta.json()) //COGE LA RESPUESTA DE LA PETICION Y PARSEALA
.then(respJson =>{
    console.log(respJson)
    for(let i = 0; i<=4;i++){
            let [nombre, apellido] = respJson[i].name.split(" ")
            document.querySelector('#tablaUsuarios').innerHTML += `
                <tr>
                    <th id="${i}" scope="row">${respJson[i].id}</th>
                    <td id="${i}">${nombre}</td>
                    <td id="${i}">${apellido}</td>
                    <td id="${i}">${respJson[i].email}</td>
                </tr>
                `
    }

    //EJERCICIO 1.2
    document.querySelector('#tablaUsuarios').addEventListener('click', (e) => {
        document.querySelector('#cardUsu').innerHTML =
        `
            <h5 class="card-title">${respJson[e.target.id].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Datos</h6>
            <p><strong>Username: </strong> ${respJson[e.target.id].username}</p>
            <p><strong>City: </strong> ${respJson[e.target.id].address.city}</p>
            <p><strong>Phone: </strong> ${respJson[e.target.id].phone}</p>
            <a href="${respJson[e.target.id].website}" class="card-link">${respJson[e.target.id].website}</a>
        `
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${respJson[e.target.id].id}`)
        .then(respJsonPosts => respJsonPosts.json()) 
        .then(respJsonPost =>{
            console.log(respJsonPost)
            document.querySelector('#listaPosts').innerHTML = ""
            for(let i = 0; i<=4;i++){
                document.querySelector('#listaPosts').innerHTML += 
                `
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div id="${respJsonPost[i].id}" class="ms-2 me-auto">
                        <div id="${respJsonPost[i].id}" class="fw-bold">${respJsonPost[i].title}</div>
                        <div id="${respJsonPost[i].id}" >${respJsonPost[i].body}</div>
                    </div>
                    <span class="badge bg-primary rounded-pill">5</span>
                </li>

                `
            }
        })


        document.querySelector('#listaPosts').addEventListener('click', (e) => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${e.target.id}`)
            .then(respJsonCommentsPosts => respJsonCommentsPosts.json()) 
            .then(respJsonCommentsPosts =>{
                console.log(respJsonCommentsPosts)
                document.querySelector('#listaComentariosPosts').innerHTML = ""
                for(let i = 0; i<=4;i++){
                    document.querySelector('#listaComentariosPosts').innerHTML += 
                    `
                    <div class="card mt-2">
                        <div class="card-body">
                            <h5 class="card-title">${respJsonCommentsPosts[i].name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${respJsonCommentsPosts[i].email}</h6>
                            <p class="card-text">${respJsonCommentsPosts[i].body}</p> 
                        </div>
                    </div>
                    
                    `
                }
            })
        })

        
    })

})
.catch(error => console.log(error))
.finally(console.log('SE ACABO'))

//EJERCICIO 1.3
fetch('https://jsonplaceholder.typicode.com/comments')
        .then(respuestaComentarios => respuestaComentarios.json()) 
        .then(respJsonComent =>{
            console.log(respJsonComent)
            let palabras = ["One","Two","Three","Four","Five"]
            for(let i = 0; i<=4;i++){
                document.querySelector('#accordionExample').innerHTML += 
                `
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${palabras[i]}">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${palabras[i]}" aria-expanded="true" aria-controls="collapse${palabras[i]}">
                            PostId: ${respJsonComent[i].postId}
                        </button>
                    </h2>
                    <div id="collapse${palabras[i]}" class="accordion-collapse collapse" aria-labelledby="heading${palabras[i]}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            ${respJsonComent[i].body}
                        </div>
                    </div>
                </div>

                `
            }
        })
.catch(error => console.log(error))
.finally(console.log('SE ACABO el 2'))

//EJERCICIO 1.4
