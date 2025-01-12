let num=15;

if(num%15 == 0){    //15の倍数のとき
    console.log('15の倍数です');
}else if(num%3 == 0){    //3の倍数のとき
    console.log('3の倍数です');
}else if(num%5 == 0){
    console.log('5の倍数です');
}else{    //それ以外のとき
    console.log(num);
}