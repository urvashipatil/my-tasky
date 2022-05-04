import BaseView from "./base-view.js";


export default class TaskEdit extends BaseView<Task>{

  // show: boolean ;

  constructor(public elm: string){
    super(elm);    
  }


  afterRender(): void {
      document.querySelector(".modal-close")?.addEventListener("click",(e)=>{
        this.hide();
      });

      document.querySelector(".btn-edit-save")?.addEventListener("click",(e)=>{
        alert((document.querySelector(".input-name") as HTMLInputElement).value);
        this.hide();
      })
  }
 

  render(data: Task | undefined){
   
    
    let tasksHtml: string = "<div>";
    
      tasksHtml +=`<div class="modal">
        <div class="card">
          <label class="modal-close">X</label>
          <input class="input-name" value="${data?.title}" />
          <button class="btn-edit-save">Save</button>
        </div>
      </div>`; 

    tasksHtml += "</div>";
    
    this.show(tasksHtml);   
  }
}