import get_app from "./get_app.js";
import Frame from "./Frame.js";
import Component from "./Component.js";

export default class Wiz {
private frame:Frame; 
private components : Component [] = [];
private app:any; ///----->???????   

constructor(){
this.app = get_app();
    // this.frame = new Frame();
this.frame = new Frame();    
this.components  = []; 
//add to this after creation
// this.init();
}
init():boolean {
    // console.log(this.app.stage.width);
    this.append_app_to_body();
    this.add_components_to_stage();
    return true;
}
private append_app_to_body():void{
document.body.appendChild(this.app.view);
}
private add_components_to_stage():void{
    this.components.forEach( c => {
    //--component is wiz component that is wrapper around pixi componenet (is placed in c.comp)    
    this.app.stage.addChild(c.comp);
    }); 
}

update():void{
    // place values in update_components 
    this.update_components();
    // more updates here
    //----update runners
    //-- update background
}
end():void{
this.app.ticker.stop();
console.log("stopped");
}

private update_components(){
//--no need to check if comp has start_frame or not just a complication    
this.frame.frame_cur += 1;    
this.components.forEach(component =>{
        component.update(this.frame.frame_cur);
    });
}
start(){
this.app.ticker.add(this.update.bind(this));
}    
add_component(){   
 let init_data={};
 init_data.renderer = this.app.renderer;
 init_data.stage = this.app.stage;    
let c = new Component(init_data);
//==importantay
this.components.push(c);
return c;
}

//////////////////////////////////////
}//wiz