import { Add, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Input,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface People {
  name: string;
  partner: string;
  group: number;
  partnerGroup: number;
}

const colors = [
  "darkred",
  "darkblue",
  "darkgreen",
  "rebeccapurple",
  "darkgoldenrod",
  "darkgrey",
  "sienna",
  "darkmagenta",
];

export default function RandomHat() {
  const [groupMode, setGroupMode] = useState(false);
  const [addPersonMode, setAddPersonMode] = useState(false);
  const [people, setPeople] = useState<People[]>([]);
  const [beenAssigned, setBeenAssigned] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [groupInput, setGroupInput] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handelGroupModeChange = () => {
    setGroupMode(!groupMode);
  };

  const handelAddPersonModeChange = () => {
    setAddPersonMode(!addPersonMode);
    setGroupInput(0);
    setNameInput("");
  };

  const addPerson = () => {
    if (nameInput !== "") {
      setErrorMessage("");
      let canRun = true;
      for (let i = 0; i < people.length; i++) {
        if (people[i].name === nameInput) {
          setErrorMessage("Name already exists in list of names.");
          canRun = false;
        }
      }
      if (canRun) {
        const person = {
          name: nameInput,
          partner: "",
          group: groupInput,
          partnerGroup: 0,
        };
        setPeople([...people, person]);
        setNameInput("");
      }
    } else {
      setAddPersonMode(false);
    }
    setBeenAssigned(false);
  };

  const assignPartners = () => {
    if (addPersonMode) {
      setAddPersonMode(false);
    }
    //If not in group mode
    if (!groupMode) {
      //Randomly assign secret santa partners
      const assigned = [];
      const unassigned = [];
      for (let i = 0; i < people.length; i++) {
        unassigned.push(people[i]);
      }
      while (assigned.length < people.length) {
        //Loop through all people
        for (let i = 0; i < people.length; i++) {
          //Get person that needs to be assigned
          let person = Math.floor(Math.random() * unassigned.length);
          if (unassigned.length === 1 && unassigned[person] === people[i]) {
            const ranIdx = Math.floor(Math.random() * assigned.length);
            const temp = assigned[ranIdx];
            people[i].partner = temp.partner;
            people[i].partnerGroup = temp.partnerGroup;
            assigned[ranIdx].partner = unassigned[person].name;
            assigned[ranIdx].partnerGroup = unassigned[person].partnerGroup;
            assigned.push(people[i]);
            unassigned.splice(person, 1);
          } else {
            while (unassigned[person] === people[i]) {
              person = Math.floor(Math.random() * unassigned.length);
            }
            people[i].partner = unassigned[person].name;
            people[i].partnerGroup = unassigned[person].group;
            assigned.push(people[i]);
            unassigned.splice(person, 1);
          }
        }
        setPeople(assigned);
      }
    } else {
      //If there are more people in the largest group, then there are in all other groups combined, throw an error
      let maxGroupCount = 0;
      let maxGroupNum = 0;
      const groupCount: number[] = [];
      for (let i = 0; i <= 8; i++) {
        const temp = people.filter((person) => person.group === i).length;
        groupCount.push(temp);
        if (temp > maxGroupCount) {
          maxGroupCount = temp;
          maxGroupNum = i;
        }
      }
      const others = people.length - maxGroupCount;
      if (maxGroupCount > others) {
        setErrorMessage(
          `${maxGroupCount} in largest group, only ${others} partners available`
        );
        return;
      } else {
        setErrorMessage("");
        const assigned = [];
        const unassigned = [];
        for (let i = 0; i < people.length; i++) {
          unassigned.push(people[i]);
        }
        people.sort((a: People, b: People) => {
          if (a.group === maxGroupNum) {
            return -1;
          } else {
            if (groupCount[a.group] >= groupCount[b.group]) {
              return 0;
            } else {
              return 1;
            }
          }
        });
        for (let i = 0; i < people.length; i++) {
          const possiblePartners = unassigned.filter(
            (item) => item.group !== people[i].group
          );
          if (possiblePartners.length > 0) {
            const person =
              possiblePartners[
                Math.floor(Math.random() * possiblePartners.length)
              ];
            const unassignedIdx = unassigned.indexOf(person);
            people[i].partner = person.name;
            people[i].partnerGroup = person.group;
            assigned.push(people[i]);
            unassigned.splice(unassignedIdx, 1);
          } else {
            const group = people[i].group;
            const unassignedIdx = unassigned.indexOf(people[i]);
            const options = [];
            for (let j = 0; j < assigned.length; j++) {
              if (
                assigned[j].partnerGroup === group ||
                assigned[j].group === group
              ) {
                console.log(`${assigned[j].partner} is not available`);
              } else {
                options.push(assigned[j]);
              }
            }
            const selection =
              options[Math.floor(Math.random() * options.length)];
            const idx = assigned.indexOf(selection);
            const temp = selection;
            people[i].partner = temp.partner;
            people[i].partnerGroup = temp.partnerGroup;
            assigned[idx].partner = people[i].name;
            assigned[idx].partnerGroup = people[i].group;
            assigned.push(people[i]);
            unassigned.splice(unassignedIdx, 1);
          }
        }
        setPeople(assigned);
      }
    }
    setBeenAssigned(true);
  };

  return (
    <div>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          margin: "auto",
        }}
      >
        Random Name Selector
      </Typography>
      <Typography
        variant="body2"
        sx={{
          width: { xs: "80%", sm: "50%" },
          margin: "auto",
        }}
      >
        This is an application that helps pair random people in a group of
        people together. It is used suppose to simulate the process of pulling
        random names out of a hat. This can be done generally or in groups. In
        general, anyone can be paired with anyone. In groups a person can only
        be pair with someone from a different group.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "lightgray",
          width: "80%",
          margin: "auto",
          padding: "10px",
        }}
      >
        <Typography variant="h6">Total: {people.length}</Typography>
        <FormControlLabel
          label="Group Mode"
          control={
            <Checkbox checked={groupMode} onChange={handelGroupModeChange} />
          }
        />
        <Button color="primary" variant="contained" onClick={assignPartners}>
          Randomize
        </Button>
      </Box>
      <Box marginBottom="20px">
        {!addPersonMode ? (
          <Box
            sx={{
              backgroundColor: "secondary.main",
              width: "80%",
              maxWidth: "470px",
              margin: "auto",
              marginTop: "10px",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <IconButton onClick={handelAddPersonModeChange}>
              <Add />
            </IconButton>
            <Typography variant="caption">Add more people</Typography>
          </Box>
        ) : (
          <Box
            sx={{
              backgroundColor: "secondary.main",
              width: "fit-content",
              margin: "auto",
              marginTop: "10px",
              padding: "5px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
            }}
          >
            <IconButton
              sx={{
                alignSelf: "start",
              }}
              onClick={handelAddPersonModeChange}
            >
              <Close />
            </IconButton>
            <Typography marginLeft="10px" variant="caption">
              Name:
            </Typography>
            <Input
              value={nameInput}
              autoFocus
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && nameInput !== "") {
                  addPerson();
                }
              }}
              sx={{
                marginLeft: "10px",
              }}
            />
            {groupMode && (
              <>
                <Typography
                  marginTop={{ xs: "10px", sm: "0" }}
                  marginLeft="10px"
                  variant="caption"
                >
                  Group:
                </Typography>
                <Input
                  type="number"
                  value={groupInput}
                  onChange={(e) => setGroupInput(parseInt(e.target.value))}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && nameInput !== "") {
                      addPerson();
                    }
                  }}
                  sx={{
                    marginLeft: "10px",
                    width: "40px",
                  }}
                  inputProps={{ min: 0, max: Math.min(people.length + 1, 8) }}
                />
              </>
            )}
            <Button
              sx={{
                marginLeft: "10px",
                marginTop: { xs: "10px", sm: "0" },
              }}
              color="success"
              variant="contained"
              size="small"
              onClick={addPerson}
            >
              Save
            </Button>
          </Box>
        )}
        {errorMessage !== "" && (
          <Typography variant="h6" color="error" textAlign="center">
            {errorMessage}
          </Typography>
        )}
        <Box
          sx={{
            width: "50%",
            margin: "auto",
          }}
        >
          {beenAssigned && (
            <Box display="flex">
              <Box
                sx={{
                  display: "flex",
                  margin: "5px",
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "45%",
                  justifyContent: "center",
                }}
              >
                <Typography>Name</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  margin: "5px",
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                  borderRadius: "5px",
                  width: "45%",
                  justifyContent: "center",
                }}
              >
                <Typography>Partner</Typography>
              </Box>
            </Box>
          )}
          {people.map((person) => (
            <div key={person.name}>
              {beenAssigned ? (
                <Box display="flex">
                  <Box
                    sx={{
                      display: "flex",
                      margin: "5px",
                      color: "white",
                      backgroundColor: groupMode
                        ? colors[person.group]
                        : "black",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "45%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>{person.name}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      margin: "5px",
                      color: "white",
                      backgroundColor: groupMode
                        ? colors[person.partnerGroup]
                        : "primary.main",
                      padding: "10px",
                      borderRadius: "5px",
                      width: "45%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>{person.partner}</Typography>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    margin: "5px",
                    color: "white",
                    backgroundColor: groupMode ? colors[person.group] : "black",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  <Typography>
                    {groupMode
                      ? person.name + " - " + person.group
                      : person.name}
                  </Typography>
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Box>
    </div>
  );
}
