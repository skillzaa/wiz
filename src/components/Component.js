import compCon from "./compcon.js";
import Batch from "./Batch.js";
import XY2screen from "./XY2screen.js"
export default class Component {
constructor(init_data={}){
// super();    
this.renderer = init_data.renderer;
this.stage = init_data.stage;
this.xy2screen = new XY2screen({renderer: this.renderer});
this.name = init_data.name || "base_component";
this.comp = compCon({
    x:init_data.x || 0,
    y:init_data.y || 0,
    width:init_data.width || 100,
    height:init_data.height || 25,
    color: 0xffff00 ,
    title_text:init_data.title_text || "Your Text Here.."
});
this.batches = [];
//--from inital_data
// this.agfs = get_class_agfs(this.name);
}
add_batch(init_data={}){
 //--this for global use
 init_data.renderer = this.renderer;
 init_data.stage = this.stage; 
 init_data.comp = this.comp;   
let batch = new Batch(init_data);
return batch;    
}
// add_batch(batch){
// //------------Creating Batch    
// // batch.start_frame = start_frame;
//  //Now we are in component so no more component.comp that  is an anit pattern. 
// batch.comp = this.comp;
// this.batches.push(batch);
// }
// --IMPORTANT--WITH IN ONE BATCH YOU CAN NOT HAVE 2 ANIMATION ON SAME VALUE E.G 2 ANIMATIONS FOR X OR Y
update(frame){
    this.batches.forEach(batch =>{
        if (batch.start_frame < frame){
            batch.update();
        }
    });
}

// is_batch_completed(batch_number){ 
//  try{
// return this.batches[batch_number-1].is_completed();  
//  }catch (err){
//      console.log(err);
//      return false;
//  }   
// }    
//------------------------    
}//base comp
     