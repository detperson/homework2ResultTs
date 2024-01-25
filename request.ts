//Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. 
//Выведите их в консоль в формате: "ID: id, Email: email".

interface Post {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments'

const getData = <T>(url: string): Promise<T> => {
    let result = fetch(url).then(response => response.json())
    return result as Promise<T>
}

getData<Post[]>(COMMENTS_URL)
    .then(data => {
        for (let i: number = 0; i < data.length; i++) {
            let id: number = data[i].id
            let email: string = data[i].email
            console.log(`ID: ${id}, Email: ${email}`)
        }
    });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */