
var data = [
    {
        id:1,
        name:'Ozodbek',
        username:'ozodbek12',
        online:'Yesterday at 12:00',
        img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:2,
        name:'Erkinakam',
        username:'erkinakam',
        online:'Last seen 12:56',
        img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:3,
        name:'Abdulloh',
        username:'A.muhammadj0nov',
        online:'last seen 17 minut ago',
        img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:4,
        name:'Mentalist',
        username:'dostonbek12',
        online:'last seen 12:00',
        img:'https://media.istockphoto.com/photos/website-designer-creative-planning-phone-app-development-template-picture-id1265038430?b=1&k=20&m=1265038430&s=170667a&w=0&h=gZCgyKR7kruSqovZGppn57MJ5rKUDWWxfZDlGTm6-RE='
    },
    {
        id:5,
        name:'Dilshod',
        username:'dilshod92',
        online:'last seen 21:21',
        img:'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      
      id:6,  name:'Hushnutbek',
        username:'hushnutbek02',
        online:'last year',
        img:'https://media.istockphoto.com/photos/self-management-is-a-freelancers-greatest-tool-picture-id1294442411?b=1&k=20&m=1294442411&s=170667a&w=0&h=DzebibUiw8fb056LdMdG5oKURp9LJHfohv_nSG1d764=',
    },
    {
        id:7,
        name:'Gayratakam',
        username:'gayrat_maxmudov',
        online:'online',
        img:'https://yt3.ggpht.com/ytc/AKedOLQJFxFYXuZx7xoc2n1TFM1nZmKIqJPG2IfBfbGr=s88-c-k-c0x00ffffff-no-rj',
    },
    {
        name:'B-2',
        username:'https://t.me/gruppab2',
        online:'last month',
        img:'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:8,
        name:'B-4',
        username:'https://t.me/gruppab2',
        online:'last month',
        img:'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
        id:9,
        name:'B-5',
        username:'https://t.me/gruppab2',
        online:'last month',
        img:'https://media.istockphoto.com/photos/self-management-is-a-freelancers-greatest-tool-picture-id1294442411?b=1&k=20&m=1294442411&s=170667a&w=0&h=DzebibUiw8fb056LdMdG5oKURp9LJHfohv_nSG1d764=',
    },
]
var Input = document.getElementById('inp')
Input.onkeypress = search

function search() {
    var filtered = data.filter((item)=>{
        return item.username.includes(Input.value)
    })

    var text = ""
    filtered.map((item)=>{
        text+=
        `<div id='user'>
        <img  src=${item.img} onclick='hi' alt=''>
        <div>
        <h2>${item.name}</h2>
        <p>${item.online}</p>
        <p>${item.username}</p>
        </div>
        </div>`
    })
    if(text === ''){
        document.getElementById('users').innerHTML = 
        `<p align='center'>NO users</p>`
    }
    else{
        document.getElementById('users').innerHTML = text
    }
    
}
function intial() {
    var text = ""
    data.map((item)=>{
        text+=
        `<div id='user'  >
        <img  src=${item.img} onclick='hi' alt=''>
        <div>
        <h2>${item.name}</h2>
        <p>${item.online}</p>
        <p>${item.username}</p>
        </div>
        </div>`
    })
    document.getElementById('users').innerHTML = text
}
intial()
function hi(id){
    var filtered = data.filter((item)=>{
        return item.id===id
    })
    console.log(id);
    console.log(filtered);
    document.getElementById('on').innerHTML = `
    <div>
    <img src="${filtered[0].img}" alt="">
    <h2>${filtered[0].name} <p class="p" >${filtered[0].name}</p></h2>
</div>
    `
}

