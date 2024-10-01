export function setArray(element){
    const users = [
        {id:1, name:"Ram", isActive:true},
        {id:2, name:"Ashu", isActive:false},
        {id:3, name:"Rubi", isActive:false}
    ]
    const getUser = () => {
        users.forEach((user)=> {
            const listItem = document.createElement("li");
            listItem.textContent = `User Name is ${user.name}`;
            element.appendChild(listItem);
        })
    }
    getUser();
}