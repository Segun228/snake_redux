import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
    name: 'game',
    initialState: {
        status: "Start",
        statusValues:{
            Start: "Pause",
            Pause: "Resume",
            Resume: "Pause",
        },
        snake: [
            {x: 0, y: 0},
            {x: 1, y: 0}
        ],
        score: 0,
        snakeSize: 2,
        gameSpeed: 1,
        snakeHead: {x: 1, y: 0},
        apple: {x: 5, y: 5},
        direction: 'd',
        stopKeyCombinations: [
            ['w', 's'],
            ['s', 'w'],
            ['a', 'd'],
            ['d', 'a'],
            ['ц', 'ы'],
            ['ы', 'ц'],
            ['ф', 'в'],
            ['в', 'ф'],
            ['ArrowUp', 'ArrowDown'],
            ['ArrowDown', 'ArrowUp'],
            ['ArrowLeft', 'ArrowRight'],
            ['ArrowLeft', 'ArrowLeft'],

        ],
        savedKey :'d',
        allowedKeys : ['w', 'd', 's', 'a', 'ц', 'в', 'ы', 'ф', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Space'],
    },
    reducers: 
        {changeStatus (state){
            state.status = state.statusValues[state.status]
        },
        moveSnake (state){
            if(state.status === 'Restart'){
                console.log("рестарт")
                return;
            }
            let {x, y} = state.snakeHead;
            switch(state.direction){   
                case 'd' : x = (x>=9) ? 0 : x+1; break;
                case 'a': x = (x<=0) ? 9 : x-1; break;
                case 'w': y = (y<=0) ? 9 : y-1; break;
                case 's': y = (y>=9) ? 0 : y+1; break;
                case 'в' : x = (x>=9) ? 0 : x+1; break;
                case 'ф': x = (x<=0) ? 9 : x-1; break;
                case 'ц': y = (y<=0) ? 9 : y-1; break;
                case 'ы': y = (y>=9) ? 0 : y+1; break;
                case 'ArrowRight' : x = (x>=9) ? 0 : x+1; break;
                case 'ArrowLeft': x = (x<=0) ? 9 : x-1; break;
                case 'ArrowUp': y = (y<=0) ? 9 : y-1; break;
                case 'ArrowDown': y = (y>=9) ? 0 : y+1; break;
                default: break;
            }
            state.snakeHead = {x, y}
            state.snake.push({x, y});
            state.snake = state.snake.slice(- state.snakeSize);
        }, 
        saveKey (state, action){
            for(let [a, b] of state.stopKeyCombinations){
                if(a === state.direction && b === action.payload){
                    return
                }
            }
            if(state.allowedKeys.find((el)=> el===action.payload)){
                state.savedKey = action.payload;
            }
            else{
                return;
            }
        },
        setDirection(state){
            state.direction = state.savedKey
        },
        checkApple(state){
            let {apple, snakeHead, snake} = state;
            if(apple.x === snakeHead.x && apple.y === snakeHead.y){
                let isOnSnake = null;
                console.log("съели яблоко")
                state.score += 100;
                state.gameSpeed *= 1.1;
                do{
                    apple.x = Math.floor(Math.random()*10)
                    apple.y = Math.floor(Math.random()*10)
                    isOnSnake = snake.find(snakeElem => snakeElem.x === apple.x && snakeElem.y === apple.y);
                }while(isOnSnake);
                state.apple = apple;
                state.snakeSize++;
            }
        },
        checkGameOver(state){
            let {x, y} = state.snakeHead;
            let snakeHeadless = state.snake.slice();
            snakeHeadless.pop();
            let bitPlace = null;
            bitPlace = snakeHeadless.find(s => s.x === x && s.y === y)
            if(bitPlace){
                state.status = 'Restart';
                console.log("укусились")
            }
        },
    }
})

export const {changeStatus, moveSnake, saveKey, setDirection, checkApple, checkGameOver} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;