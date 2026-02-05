const address = 'dhaka'

const part = address.slice(2,4);

console.log(part);

const sentence = 'I am  good boy i just graduated from GUB in computer Science';

console.log(sentence.split('a')
);



const friends = 'rakib,khalid,sajib,sajid,sohel,jibon,tonmoy,rasel';

const friendstr = friends.split(',');
console.log(friendstr);


const realfriends = ['khalid', 'akib', 'ratul', 'sohel', 'toki'
];
console.log(realfriends.join('|'
));
console.log(realfriends.join('-'
));

let fi= 'Abid';
let la= 'Nabid';

const ful = fi + ' ' + la;
console.log(ful);

// use of concat 

const ful2 = fi.concat(' ').concat(la);
console.log(ful2);