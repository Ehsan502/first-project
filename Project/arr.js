document.addEventListener("DOMContentLoaded", () => {
    const users = [
        { name: 'Muhammad Atif', money: 8739.987},
        { name: 'Azeem ali', money: 1234.987},
        { name: 'Adnan ali', money: 7438.123},
        { name: 'Muhammad Asif', money: 1239.22},
        { name: 'Irfan minister',money: 8739.987},
        { name: 'Muhammad Atif',money: 9887.122},
        { name: 'Umair jutt',money: 3422.989},
    ]
    let array = [];
    let index = 0;
    let total =0;
    let addUsers = document.getElementById('add_users');
    let usersData=document.getElementById('users_data');
    let doubleMoney=document.getElementById('double_money');
    let millon=document.getElementById('show_million');
    let Richest=document.getElementById('sort_richest');
    let totalMoney=document.getElementById('total');
    let totalButton=document.getElementById('total_wealth');
    addUsers.addEventListener("click", () => {
        if (index<users.length) {
            added_user(users[index])
            index++;
        } else {
            alert('All users have been added.')
        }
    });
    function added_user(user) {
        array.push(user);
        renderUser();
    }
    doubleMoney.addEventListener("click",()=>{
        array.forEach((user)=>{
            user.money*=2;
            renderUser();
        })
    })
    millon.addEventListener("click",()=>{
        array=array.filter(user=>user.money>1300)
            renderUser();
    })
    Richest.addEventListener("click",()=>{
        array=array.sort((a,b)=>b.money-a.money);
        renderUser();
    })
    totalButton.addEventListener("click",()=>{
        let total_Money= array.reduce((sum,current)=> sum + current.money, 0);
        totalMoney.innerHTML=`
        <span>Total:${total_Money}</span>
        `;
        renderUser();
    })
    function renderUser(user) {
        usersData.innerHTML='';
        array.forEach(user=>{
            let newDiv=document.createElement('div');
            newDiv.classList.add('user');
            newDiv.innerHTML=`
            <span>${user.name}--PKR:$${user.money.toFixed(2)}</span>
            `;
            usersData.appendChild(newDiv);
        })
    }
})