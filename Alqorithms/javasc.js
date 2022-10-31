let places = [
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

villageCount();



    
