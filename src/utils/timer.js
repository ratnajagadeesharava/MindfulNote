/* 
* creates a debounce function that will delay the execution of the function  by the delay amount
* @param {Function} func - the function to be executed
* @param {number} delay - the delay amount in milliseconds
* @returns {Function} - the debounced function
*/
function debounce(func,delay){
    //creates a closure to store the timeout
    let timeout;
    return function()
    {
        // get the context of the function from where it is getting called
        const context = this;
        // get the arguments passed to the function
        const args = arguments;
        //clear the timeout for every key strok that is done imediately
        clearTimeout(timeout);
        timeout = setTimeout(()=>func.apply(context,args),delay);
    }

}
/**
 * creates throttle for the specified function and delay
 * @param {Function} func The function to be throttled
 * @param {number} delay wait time in milliseconds
 * @returns {Function} returns the throttled function
 */
function throttle(func,delay){
    let timeout;
    return function(){
        const context = this;
        const args = arguments;
        if(timeout == null){
            timeout = setTimeout(()=>{
                func.apply(context,args);
                timeout = null;
            },delay);
        }
    }
};

export default {debounce,throttle};