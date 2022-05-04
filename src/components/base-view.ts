export default abstract class BaseView<T>{
  // data: T;

  constructor(public elm: string, public data?:T){ 
   
  }

  afterRender(): void{};

  abstract render(data: T): void

  show(html: string){
    let htmlElem = document.querySelector(this.elm) as HTMLElement;
    htmlElem.innerHTML =html;

    htmlElem.className="show";

    this.afterRender();
  }

  hide(){
    (document.querySelector(this.elm) as HTMLElement).className="hide";
  }

}