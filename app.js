
    let cardsArray = [
        {
            'name': 'one',
            'img': 'https://p.kindpng.com/picc/s/64-646549_printable-glitter-numbers-hd-png-download.png',
        },
        {
            'name': 'two',
            'img': 'https://www.kindpng.com/picc/m/21-214577_number-digit-2-png-transparent-images-transparent-backgrounds.png',
        },
        {
            'name': 'three',
            'img': 'https://png.pngtree.com/png-clipart/20190612/original/pngtree-red-number-five-png-image_3396519.jpg',
            
        },
        {
            'name': 'four',
            'img': 'https://png.pngtree.com/png-clipart/20210118/ourmid/pngtree-number-4-golden-luxury-png-image_2762858.jpg',
        },
        {
            'name': 'five',
            'img': 'https://p.kindpng.com/picc/s/57-576272_glitter-number-5-hd-png-download.png',
        },
        {
            'name': 'six',
            'img': 'https://png.pngtree.com/png-clipart/20210120/ourlarge/pngtree-3d-number-6-red-png-image_2767135.jpg',
        }
    ];


    const parentDiv = document.querySelector('#card-section');

    // step 2 to duplicate each card
    const gameCard = cardsArray.concat(cardsArray)
    console.log(gameCard)

    // steps 3
    // Note that this method creates a new shuffled array instead of modifying the original one.
    // const myNumbers = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1))
    //         // console.log(i, j)
    //         let temp = array[i]
    //         array[i] = array[j]
    //         array[j] = temp
    //     }
    //     return array
    // }
    //
    // const shuffledChild = myNumbers(gameCard)
    let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


    let clickCount = 0;
    let firstCard = "";
    let secondCard = "";


    // styling the match card
    const card_matches = () => {
        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.add('card_match')
        })
    }


    // step 7

    const resetGame = () => {
        firstCard = "";
        secondCard = "";
        clickCount = 0;

        let card_selected = document.querySelectorAll('.card_selected');

        card_selected.forEach((curElem) => {
            curElem.classList.remove('card_selected')
        })

    }

    // step 4
    parentDiv.addEventListener('click', (event) => {
        let curCard = event.target;

        if(curCard.id === "card-section"){return false }

        clickCount ++;

        if(clickCount < 3){

            if(clickCount === 1){
                firstCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }else{
                secondCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }

            if(firstCard !== "" && secondCard !== ""){
                if(firstCard === secondCard){
                    setTimeout(() => {
                        card_matches()
                        resetGame()
                    }, 1000)

                }else{
                    setTimeout(() => {
                        resetGame()
                    }, 1000)
                }
            }

        }

    })


    // step 1 to add the card
    for(let i=0; i<shuffledChild.length; i++){

        const childDiv = document.createElement('div')
        childDiv.classList.add('card')
        childDiv.dataset.name = shuffledChild[i].name;

        const front_div = document.createElement('div');
        front_div.classList.add('front-card')

        const back_div = document.createElement('div');
        back_div.classList.add('back-card')

        back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

        parentDiv.appendChild(childDiv)

        childDiv.appendChild(front_div)
        childDiv.appendChild(back_div)
    }

    
