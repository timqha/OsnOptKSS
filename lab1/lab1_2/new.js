var
    getNextArr = function(prevArr){ // функция для построения следующего массива из предыдущего
        var
            newLen =  prevArr.length + 9, // длинна следующего массива будет больше на 9
            arr = []; // заготовка результата
        for(var i=0; i<newLen; i++){
            var q = 0; // заготовка нового значения
            for(j=0; j<10; j++) // берем 10 нужных значений
                if(prevArr[i-j]) // ...если они существуют в предыдущем массиве
                    q+=prevArr[i-j]; // добавляем
            arr[i] = q; // или arr.push(q);
        }
        return arr;
    },
    luckyTickets = function(num){ // собственно сам  счетчик
        var
            arr = [], // первый массив
            result = 0; // то, что мы вернем
        for(i=0;i<10;i++) arr.push(1); // впихиваем в первый массив 10 единиц
        for(i=0;i<(num/2-1);i++) // нужное количество раз
            arr = getNextArr(arr); // строим следующие массивы
        arr.forEach(function(v){ result+=Math.pow(v,2); }); // сводим квадраты значений в получившемся массиве
        return result;
    };
//https://habrahabr.ru/post/266479/
//21,2k
console.time("trude");
console.log( luckyTickets(300) );
console.timeEnd("trude");