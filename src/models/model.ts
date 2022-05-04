export default class Model<T>{

  async getAll(): Promise<T[]>{


    let response  = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();

    console.log("Data", data);
    return data;
    // return [{id:1, userId:1, title:"Task1 - newly addded ", completed: false},
    // {id:2, userId:1, title:"Task2 - newly addded ", completed: false},
    // {id:3, userId:1, title:"Task3 - newly addded ", completed: false}]
  }
}