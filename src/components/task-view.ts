import BaseView from "./base-view.js";
import TaskEdit from "./task-edit.js";

export class TaskView extends BaseView<Task[]>{

  constructor(public elm: string, public data?: Task[]){
    super(elm, data);
  }

  afterRender(){
    
    document.querySelectorAll("li").forEach(task=>{
      task.addEventListener("click",(e)=>{
        let taskId = (e.target as HTMLElement).dataset["taskid"];
        alert(taskId);
        let task = this.data?.find(d=>d.id?.toString() == taskId);
        const TaskEditView  =  new TaskEdit("#modal");
        TaskEditView.render(task);
      })
    })
  }
  
  render(): void{
      // let htmlElem = document.querySelector(this.elm) as HTMLElement;

      // htmlElem.innerHTML = "<h1>My Tasky</h1>";

      let taskHtml ="<ul>";

      this.data?.map(task=>{
        taskHtml +=`<li data-taskid="${task.id}">${task.title}</li>` 
      })

      taskHtml +="</ul>";

      // htmlElem.innerHTML =taskHtml;

      this.show(taskHtml);


  }

}