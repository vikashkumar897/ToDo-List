exports.getDate=function(){
const today= new Date();
const currentDay=today.getDay();

const options={
    weekday:"long",
    day:"numeric",
    month:"long"
};

return today.toLocaleDateString("hi-IN", options);
}

exports.getDay=function(){
    const today= new Date();
    const currentDay=today.getDay();
    
    const options={
        weekday:"long"
    };
    
    return today.toLocaleDateString("hi-IN", options);
}