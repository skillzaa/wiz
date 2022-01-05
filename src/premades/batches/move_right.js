import IntInc from "../../animations/IntInc.js";
import BatchBase from "../../batch/BatchBase.js";

export default function walk_l(comp){
let animations = [];
let rt  = new IntInc();
        rt.component_target = "x";
        rt.comp_pointer = comp;
        rt.begin_data = 0;
        rt.final_data = 80;
        rt.increment = 1;    
animations.push(rt);

let down  = new IntInc();
        down.component_target = "x";
        down.comp_pointer = comp;
        down.begin_data = 50;
        down.final_data = 90;
        down.increment = 1;    
animations.push(down);


let b = new BatchBase(animations);
return b;
}