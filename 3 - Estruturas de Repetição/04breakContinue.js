//Nas estruturas de repetição existem duas palavrinhas que ativam certos compoertamentos no código
    //break
        //Break serve para interromper o loop, e volta ao código principal
        let i = 0;
        while (i < 100) {
            console.log(i);
            i++
            if (i == 6) {
                break
            }
        }
    
    //continue
        //Continue serve para que o loop pule para a próxima iteração
        for (i = 0; i <= 5; i++) {
            if(i == 3) {
                continue;
            }
            console.log(i);
        }