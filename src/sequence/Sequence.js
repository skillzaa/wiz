

export default class Sequence {
constructor(){
this.start_frame = 0;    //??????????
this.running_batch = 0; 
this.batches = [];

}
update(){
    this.batches[this.running_batch].update();
}
// update_batch_number(){    
// if (this.all_comp_batch_done() == true){
// this.batch_number += 1;    
// console.log("wiz increased interanl batch_number");
// }else {
// this.frame_counter++;
// return false;
// }    
// }


}