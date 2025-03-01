import axios from 'axios';


const API = "http://localhost:7777"; 
const getDishes = () => axios.get(`${API}/dishes/all`);
const addDish = (dishData) => axios.post(`${API}/dishes/add`,dishData);
// const addDish = (dishData) => axios.post(`${API}/dishes/add`,{dishData}, { withCredentials: true });
const getRecipesForDish = (dishName) => axios.get(`${API}/dishes/${dishName}/recipes`);
const addRecipeToDish = (dishName, recipeData) => axios.post(`${API}/dishes/${dishName}/recipes/add`, recipeData);
const addPost=(Post)=>axios.post(`${API}/post/add`,Post);
const getPost=(user)=>axios.get(`${API}/post/user/${user}`);
const getPostAll=()=>axios.get(`${API}/post/all`);
const deleteDish=(dishName)=>axios.delete(`${API}/delete/${dishName}`);
const getorderProduct=()=>axios.get(`${API}/orderproduct/all`);
const addUser=(user)=>axios.post(`${API}/users/add`,user);
const getUser=(username)=>axios.get(`${API}/users/${username}`);
export {
    getDishes,
    addDish,
    getRecipesForDish,
    addRecipeToDish,
    addPost,
    getPost,
    getPostAll,
    deleteDish,
    getorderProduct,
    addUser,
    getUser
};