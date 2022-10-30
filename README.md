## 1. 

[Layihə şablonunun linki](http://preview.themeforest.net/item/gmag-blog-news-magazine-template/full_screen_preview/35377760?_ga=2.223831896.258011322.1667022024-1222788757.1661753231)

## 2. 

Layihə birsəhifəlidir. Header, slideç main hissədən ibarətdir. Main hissəni 2 aside-a bölmək olar. Sağ tərəfdəki aside bir müddət sabit qalır. 

## 3.

let word="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

function findStringLength(str){
    // daxil edilən str string məlumatının neçə xarakterdən ibarət olduğunu return edən metod yazın
    let character = str.length;
    return character;
}

findStringLength(word);

## 4.

Kodu nəzərdən keçirmədən öncə, bu videoya baxmağınızı xahiş edirəm:

let word="Any fool can write code that a computer can understand. Good programmers write code that humans can understand."

function findStringLength(str){
// daxil edilən str string məlumatının neçə hərfdən ibarət olduğunu return edən metod yazın
let stringLength = str.length;
let symbols = ( [`!@#$%^&*()_+-=[]{};':"\|,.<>/?~]1234567890 );
let bosluqSayi=0;
for(let i = 0; i<stringLength; i++){
if(str[i] == symbols){
bosluqSayi++;
let result = stringLength - bosluqSayi;
};
return result;
};

};

findStringLength(word);
