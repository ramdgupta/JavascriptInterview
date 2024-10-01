export function getName(element){
    const users = [
        {id:1, name:"Ram", isActive:true},
        {id:2, name:"Ajay", isActive:flase},
        {id:3, name:"Ashu", isActive:true}
    ]
    const getUser = () => {
        users.forEach(user=>{
            const listItem = document.createElement("li");
            listItem.textContent = `User name is ${user.name}`;
            element.appendChild(listItem);
        });
    };
    getUser();
}
