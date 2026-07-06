export async function getData(){
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1/posts');
        if(!response.ok){
            throw new Error('Error al obtener los datos de testimonios por favor recarga la página');
        }
        return await response.json();
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}