/* let places = [
    {region:"Cəbrayıl",
    village:79},

    {region:"Füzuli",
    village:36},

    {region:"Zəngilan",
    village:47},

    {region:"Xocavənd",
    village:22},

    {region:"Tərtər",
    village:3},
    
]


let lands = document.querySelector(".lands");

for(let i =0; i<places.length;i++){
    let land =`
        <tr>
        <td>${places[i].region}</td>
        <td>${places[i].village}</td>              
        </tr>           
    `
    lands.innerHTML+= land;
};


//Ən çox kəndə sahib olan rayonun adını göstərən funksiya yazın
let butunKendler = [];

for(let j in places){    
    let kend = places[j].village;
    butunKendler.push(kend);    
};
let enCoxKend = butunKendler[0];
    for(let j in butunKendler){        
        if(enCoxKend < butunKendler[j]){
        enCoxKend = butunKendler[j];
            };        
    };  
    console.log(enCoxKend);///nəticəsi 79-dur. Və bu 79 kən sayına sahib olan regionu tapmaq üçün aşağıdakı funksiya yazmışam, ammma nəticə düzgün olmadı.

function RayonTap(){
    for(let j in butunKendler)
        if(places[j].village = enCoxKend ){
   console.log(places[j].region);
        };
};
   RayonTap();


    //Azad edilən rayonlar arasında adı ən uzun olan rayonun necə kəndi olduğunu göstərən funksiya yazın

    let butunregionlar = [];

    for(let j in places){    
        let regions = places[j].region;
        butunregionlar.push(regions);    
    };
    let enUzunAd = butunregionlar[0];
        for(let j in butunregionlar){        
            if(enUzunAd < butunregionlar[j]){
            enUzunAd = butunregionlar[j];
                };        
        };  
    console.log(enUzunAd);// Burda Zengilan gosterir. En uzun adı tapıram.Amma kənd sayını tapmaq üçün yazdığım aşağıdakı kod düzgün nəticə göstərmədi:
    
    for(let j in places){
        if(places[j].region=enUzunAd){
            console.log(places[j].village);
        };
    };

    

    //Azad edilən rayonların adında a hərfi olan rayonların siyahısını array olaraq ekranda göstərin

    let butunregionlar = [];
    let aHerfli = [];
    for(let j in places){    
        let regions = places[j].region;
        butunregionlar.push(regions);
       
    };
    for(let j in butunregionlar){    
        butunregionlar[j].length;
        };




//Ümumi azad edilən kənd sayını göstərən funksiya yazın.

function villageCount(){
    let umumiKendSayi = 0;
        for(let j in places){    
            umumiKendSayi += places[j].village ;
        };
        console.log(umumiKendSayi)
};

villageCount(); */


// 22-ci dərs


/* 2.Dərsdə yazılan sistem ya da fərqli bir alqoritm tətbiq edərək şahmat taxtasının görüntüsünü yaradın.

Nəticə tam deyil. Amma düşündüyümü yazıram. Suallar ən sonda.  */

let table = document.querySelector(".table")
let tableWidth = table.clientWidth;
for(let i=0; i<8; i++){
    let tr = document.createElement("tr");
    for(let j=0; j<8; j++){
    let td = document.createElement("td");
    td.setAttribute("style",`width:${table/8}px;height:${table/8}px; border:1px solid red;`);//td-nin ölçüsünü tətbiq etmək olmadı.
    tr.appendChild(td);
    table.appendChild(tr);
    td.innerInnerTML = j;  
    };      
};
console.log(table);
/* /* Suallar:

2.1."let table = document.querySelector(".table") əvəzinə js vasitəsilə table yaratmaq olarmı? Yəni table-i html-ə yazmaqdansa, createElement-lə table yaradıb hər şeyi sıfırdan yaratmaq necə olardı? Mən cəhd etdim, nəticə olmadı. Yəni:

let table = document.createElement("table")
let tableWidth = table.clientWidth;
for(let i=0; i<8; i++){
    let tr = document.createElement("tr");
    for(let j=0; j<8; j++){
    let td = document.createElement("td");
    td.setAttribute("style",`width:${table/8}px;height:${table/8}px; border:1px solid red;`);
    tr.appendChild(td);
    table.appendChild(tr);
    td.innerInnerTML = j;  
    };      
};
console.log(table); */
/* 

2.2.Java scriptlə yaradılmış hazır tag-i appendChild əvəzinə, innerInnerTML-lə əlaə etsək nə kimi fərq olur?Məsələn: yuxarıdakı table-ə td əlavə edirik: table.innerHTML; */

/* 
3.  aşağıdakı sualları cavablandırın
class deyiləndə nə başa düşürsünüz? - class bir obyektin mənbəyidir, asanlıqla bir obyektə tətbiq edəcəyimiz və ya bazasında xüusisyyətlər yaradacağımız şablondur.

prototype və __proto__ ifadələri arasında nə kimi fərq var? - _proto_  - bult-in olaraq yaradılmış metdlar toplusudur. Əgər hər hansı obyekt başqa obyekt əsasında yaradılmışdırsa,  prototype vasitəsilə isə bu hazır built-in  metodları başqa obyektə tətbiq edə bilərik.

Miras alma prosesinin bizə gətirəcəyi müsbət nə ola bilər - bir neçə obyektdə oxşar, eyni xüsusiyyətlər vardırsa, hər bir obyektdə ayrıca üsusiyyət yazmaqdansa, bu xüsusiyyətləri miras almaq işi asanlaşdırır, həm də əlavə yer tutmur.
 */

    
/* 4.
4.1.Aşağıdakı problemləri həlledin
Hər hansı bir sözün daxilində olan kiçik hərfləri böyük hərfə, böyük hərfləri kiçik hərfə çevirən funksiya yazın.Aşağıdakı kodda nəticə əldə olunmasa da nəticəyə  yaxın olduğumu düşünürəm. Burada məntiq  böyük və kiçik hərflərə çevrilmiş sözün  hərflərini əsas sözün hərfləri ilə müqayisə etmək, bərabər olmadıqda bərabərləşdirməkdir.  */


let soz = "PRaGmaTEC";
let boyuk = soz.toUpperCase();
let kicik = soz.toLowerCase();
console.log(boyuk);
console.log(kicik);

for (i in soz){
  for(up in boyuk){
    for(low in kicik){
      if(!soz[i] === boyuk[up]){
        soz[i] === boyuk[up]        
      }else if(!soz[i] === kicik[low]){
               soz[i]===kicik[low]
               };
    };
  };
};

               console.log(soz);


4.2.
//js let arr=[23,12,34,12,30,12,34,89,1,3,0,123,453] verilən array daxilində eyni olan ədədlərdən təkrarlananları silərək sadəcə bir ədədini saxlayın və əldə edilən bütün dəyərləri yeni array şəklində ekrana çap edin. Bu tapşırığın nəticəsində əldə etməli olduğunuz array js yeniArray=[23,12,34,30,89,1,3,0,123,453] olmalıdır.

/* Burada da nəticəni göstərmək üçün console.log-u ara yamalı olduğumu bilmədim. Kodları daha sadə, "loru" dillə bi-bir iza etməyinizi xahiş edirəm. */

let arr=[23,12,34,12,30,12,34,89,1,3,0,123,453];
let arr2;
arr2=arr;

for( let i in arr ){
for( let j in arr2 ){
    if(arr2[j]==arr[i]){
        delete arr2[j];
        
    };
    
};  
console.log(arr2);
};
