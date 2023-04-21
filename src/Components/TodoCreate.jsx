import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => {
        e.preventDefault();



        if (!title.trim()) {
            return setTitle("");
        } 
            createTodo(title);
            setTitle(""); /**setTitle reinicia el formulario */
            

        };
        {/**la negacion  del title.trim, si entra a la negacion hago el return de set titlle, caso contrario hago el create todo con title y reinicio el formulario*/

        /**si eso es mayor a 0 le pasamos el title y reiniciamos el todo, else, caso contrario hacemos el reinicio de nuevo*/
        /**if (title.trim().length >0) {
            createTodo(title);
             return  setTitle("");
        } else {

        }*/}





    


    return (
        <form 
        onSubmit={handleSubmitAddTodo} 
        className="flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4 dark:bg-gray-800 transition-duration: 1000ms">
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo.."
                className="w-full text-gray-400 outline-none transition-duration: 1000ms dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
