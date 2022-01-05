import rectangle from "./rectangle.js";


export default class BaseComp {
constructor(name){
// super();    
this.name = name;    
this.comp = rectangle({x:0,y:0,width:100,height:25,color: 0xffff00 });
this.batches = [];
//--from inital_data
// this.agfs = get_class_agfs(this.name);
}
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
     