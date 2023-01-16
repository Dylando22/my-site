import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Categories from '../db/Categories';

var date = new Date();
//gets the category played
const getCategory = (value) => {
    let ans = 'any'
    for(let i = 0; i < Categories.length; i++){
        if(Categories[i].value === value){
            ans = Categories[i].label;
        }
    }
    return ans;
}
// gets the date in the format yyyy-mm-dd needed for postgres
const getDatePlayed = () => {
    // get year, month, and day
    let year = date.getFullYear();
    let month = date.getUTCMonth()+1;
    let day = date.getDate();
    // add 0's in front. 
    if(month < 10){
        month = "0" + month;
    }
    if(day < 10){
        day = "0" + day;
    }
    return year + "-" + month + "-" + day;
}

const GameOverBox = styled(Box)({
    width:"auto",
    height:350,
    margin:25,
    padding:15,
    textAlign:"center",
    justifyContent:"center",
});

function TriviaGameOver(props) {

    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState({
        player_name: "",
        category: "",
        difficulty: "",
        score: "",
        percent: 0.0,
        date_played: "",
    });

    // gets all data from the navigate and stores it in the correct form for the postgres database
    const getAllData = () => {
        //get category
        let category = getCategory(location.state.Category);
        //get date for
        let date_played = getDatePlayed()
        // get score
        let score = location.state.Score + "/" + location.state.Total;
        // get percentage
        let percent = location.state.Score / location.state.Total;
        percent = percent.toFixed(2);
        percent *= 100;
        let player_name = location.state.playerName
        let difficulty = location.state.Difficulty;
        setData({
            player_name: player_name,
            category: category,
            difficulty: difficulty,
            score: score,
            percent: percent,
            date_played: date_played
        });
    }
    // When the page is loaded, this gets all the data from the past Trivia round
    useEffect(() => {
        getAllData();
        // eslint-disable-next-line
      }, []);

    // This function puts data into the database and then changes page to leader-board
    const AddDataToLeaderboard = async (e) => {
        e.preventDefault();
        try {
            getAllData();
            const body = JSON.stringify(data);
            // put in database
            await fetch("http://localhost:5000/trivia", {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: body,
              });
              navigate("/game-library/leader-board");
        } catch (error) {
        console.error(error); 
        }
    }

    return (
        <GameOverBox>
            <Typography variant='h3'sx={{backgroundColor:"primary.main", color:"common.white", borderRadius:"15px", margin:'50px'}} >Game Over</Typography>
            <Typography variant='h5' sx={{fontSize:25, fontFamily:"monospace", justifyContent:"center", padding:"25px", margin:"10px", border:"solid", borderColor:"primary.main", backgroundColor:"black", color:"common.white"}}>{location.state.playerName} your Score is {location.state.Score} / {location.state.Total}</Typography>
            <Box sx={{display:'flex', justifyContent:{xs:'space-between', md:'center'}, marginLeft:1, marginRight:1}}>
            <Button variant="contained" sx={{marginTop:1}} onClick={() => {navigate("/game-library/trivia-home");}}>Play Again?</Button>
            <Button variant="contained" sx={{marginLeft:5, marginTop:1}} onClick={(e) => {AddDataToLeaderboard(e)}}>Add to LeaderBoard</Button>
            </Box>
        </GameOverBox>
    );
}

export default TriviaGameOver;