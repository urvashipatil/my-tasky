import { TaskView } from "./components/task-view.js";
import  Model from "./models/model.js";




var task = new Model<Task>();
task.getAll().then(function(result){
  const taskView = new TaskView("#root") ;
  taskView.data = result;
  taskView.render();
});

