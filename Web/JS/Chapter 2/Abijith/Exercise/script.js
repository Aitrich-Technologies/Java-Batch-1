const content = document.getElementById('content');

var objectArray = [{profile:"images/member (1).png",name:'Alen',qualification:'MCA',exp:'3 years',location:'Banglore'},
    {profile:'images/pro2.jpg', name:'Vivek',qualification:'Btech',exp:'5 years',location:'Thiruvananthapuram'},
    {profile:'images/olivia-round.png', name:'Sarah',qualification:'MSC',exp:'2 years',location:'Chennai'},
    {profile:'images/member (2).png', name:'Alen',qualification:'Btech',exp:'2 years',location:'Calicut'}
];

for(let i in objectArray){
    let card = document.createElement('div');
    card.setAttribute('id','candidate');

    const image = document.createElement('img');
    const Name = document.createElement('p');
    const Quali = document.createElement('p');
    const Exp = document.createElement('p');
    const Location = document.createElement('p');

    image.src=objectArray[i].profile;
    Name.innerText=objectArray[i].name;
    Quali.innerText=objectArray[i].qualification;
    Exp.innerText=objectArray[i].exp;
    Location.innerText=objectArray[i].location;

    card.appendChild(image);
    card.appendChild(Name);
    card.appendChild(Quali);
    card.appendChild(Exp);
    card.appendChild(Location);

    content.appendChild(card);
}