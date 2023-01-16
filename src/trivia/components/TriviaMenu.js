import { TextField, Typography, List, ListItem, MenuItem, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import categories from '../db/Categories';
import difficulties from '../db/Difficulties';

function TriviaMenu(props) {

    //All state variables combined into this,
    const[userInput, setUserInput] = useState({
      name : "Player1",
      questionCount: 10,
      difficulty: "easy",
      category: "any",
    });

    //Updates the state category when the form is changed 
    const handleCategoryChange = (e) => {
      setUserInput({
        name: userInput.name,
        questionCount: userInput.questionCount,
        difficulty: userInput.difficulty,
        category: e.target.value
      })
    }
    //Updates the difficulty when the form is changed
    const handleDifficultyChange = (e) => {
      setUserInput({
        name: userInput.name,
        questionCount: userInput.questionCount,
        difficulty: e.target.value,
        category: userInput.category
      })
    }
    //Update the name of a player when inputted
    const handleNameChange = (e) => {
      console.log(e.target.value)
      setUserInput({
      name: e.target.value,
      questionCount: userInput.questionCount,
      difficulty: userInput.difficulty,
      category: userInput.category
      })
    }

    //Set up question variable for changes after API is called
    const Questions = {
      0: {
        QuestionText: "This is a test",
        Answer: "A",
        Option1: "B",
        Option2: "C",
        Option3: "D"
      }
    }

    //Get rid of funky symbols that the API give you
    const decodeHTML = function(string){
      const arry = string.split("");
      for(let i=0; i< arry.length;i++){
        if(arry[i] === "&"){
          arry[i] = `'`;
          arry[i + 1] = "";
          arry[i + 2] = "";
          arry[i + 3] = "";
          arry[i + 4] = "";
          arry[i + 5] = "";
        }
      }
      let str = arry.join("");
      return str;
    }

    //Shuffles an arry, to make the Answer appear in a different location during the trivia game
    const shuffle = function(array){
      for (var i = array.length - 1; i > 0; i--) {
   
        // Generate random number
        var j = Math.floor(Math.random() * (i + 1));
                    
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
        
    return array;
 }

    //API call that gets the question from opentdb.com
    const getQuestions = function(){
        let Data;
        let cat = '';
        if (userInput.category !== "any"){
          cat = "&category=" + userInput.category;
        }
        let diff = "&difficulty=" + userInput.difficulty;
        let questionCount = "amount=" + document.getElementById("number").value;
        let URL = `https://opentdb.com/api.php?${questionCount}${cat}${diff}&type=multiple`
        fetch(URL)
        .then((resp) => resp.json())
        .then((json) => {
          Data = json.results;
          for(let i= 0; i < Data.length; i++){
            let options = Data[i].incorrect_answers;
            options[3] = Data[i].correct_answer;
            options = shuffle(options);
            for(let i= 0; i < options.length; i++){
              options[i] = decodeHTML(options[i]);
            }

            Questions[i] = {
                QuestionText: decodeHTML(Data[i].question),
                Category: Data[i].category,
                Difficulty: Data[i].difficulty,
                Answer: decodeHTML(Data[i].correct_answer),
                Options: options,
            }
          }
          navigate("/my-site/trivia-game", {state:
            {questions: Questions,
            questionCount: userInput.questionCount,
            playerName: userInput.name,
            mainCategory: userInput.category,
          }});

        }).catch( () => {
          alert("Can not get data from API, Please check internet connection");
      });;

    }

    //used to navigate to TriviaGame and pass data
    const navigate = useNavigate()
    return (
        <Box component="form" sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography variant='h2' sx={{textAlign:"center", width:'100%', backgroundColor:"primary.main", color:"common.white"}} >TRIVIA MENU</Typography>

            <List dense sx={{ display:'flex', flexDirection:'column', justifyContent:'center', textAlign:"center", padding:"5px",}} >
              <ListItem>
                <TextField 
                required
                variant="standard" 
                label="name"
                defaultValue={userInput.name}
                onChange={handleNameChange}
                >
                </TextField>
                </ListItem>
                <ListItem>

                <TextField
                id="number"
                label="Number of Questions"
                type="number"
                defaultValue={userInput.questionCount}
                InputLabelProps={{
                    shrink: true,
                }}
                />
                </ListItem>
                <ListItem>
                <TextField
          id="difficulty"
          select
          label="Difficulty"
          value={userInput.difficulty}
          onChange={handleDifficultyChange}
          helperText="Please select difficulty level"
        >
             {difficulties.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}


        </TextField>
                </ListItem>
        <ListItem>
                 <TextField
          id="category"
          select
          label="Category"
          value={userInput.category}
          onChange={handleCategoryChange}
          helperText="Please select your category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </ListItem>
        <ListItem>
            <Button variant="contained" onClick={getQuestions} data-testid='submit-button' >START</Button>
        </ListItem>
            </List>
        </Box>
    );
}

export default TriviaMenu;