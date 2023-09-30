let currentusers:string[]=["iqbal","farhan","naqaash","mubashir","faheem"];
let newuser:string[]=["baber","rizwan","ahmed","mubashir",'fahim'];

function newusernametaken(usernames:string){
    return currentusers.some(existinguser=>existinguser.toLowerCase()==usernames.toLowerCase());
    
}
newuser.forEach(new_user =>{
    if(newusernametaken(new_user)){
        console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
    } else {
      console.log(`Congratulations! The username "${new_user}" is available.`);
    }
  });
    






export{};











