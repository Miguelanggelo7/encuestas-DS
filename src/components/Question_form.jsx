import React, { useState, useEffect } from "react";
import "../components/Question_form.css";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { styled } from "@mui/material/styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InsertIconPhoto from "@mui/icons-material/InsertPhoto";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import ShortTextIcon from "@mui/icons-material/ShortText";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import SubjectIcon from "@mui/icons-material/Subject";
import BackupIcon from "@mui/icons-material/Backup";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import AppsIcon from "@mui/icons-material/Apps";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton, Avatar } from "@material-ui/core";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ImageIcon from '@mui/icons-material/Image';

// ------------------------------------------

import { Grid } from "@material-ui/core";
import { BsFileText } from "react-icons/bs";
import { Paper, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Button from "@material-ui/core/Button";
import { FcRightUp } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@material-ui/core/Radio";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionActions from "@material-ui/core/AccordionActions";
import Divider from "@material-ui/core/Divider";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

import SaveIcon from "@mui/icons-material/Save";
import {
  KeyboardVoice,
  LockOpenOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { v4 as uuid } from "uuid";
import { saveSurvey, getCurrentUser, getSurveysByUser, saveSurveyImage } from "../firebase/functions";

// ESTILOS
const useStyles = makeStyles({
  topSeparator: {
    "@media (min-width: 600pt)": {
      marginLeft: '58%',
    },
    "@media (min-width: 800pt)": {
      marginLeft: '64%',
    },
    "@media (min-width: 1000pt)": {
      marginLeft: '72%',
    },
    marginLeft: '180pt',
  }
});

const Question_form = () => {
    const classes = useStyles();
    const [questions,setQuestions] =useState([]); 
    const [grade,setGrade] =useState(false); 
    const [documentName, setDocName] =useState("untitled Document"); 

  const [documentDescription, setDocDesc] = useState("Add Description");

  const [questionType, setType] = useState("radio");
  const [questionRequired, setRequired] = useState("true");

  const [isPublic, setIsPublic] = useState(true);
  const [image, setImage] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAAAXNSR0IArs4c6QAAAflJREFUaEPtmbGrwjAQxk8oODg4OBTqIDg4OHQodOyf7uQoKDg4OAgVOjh06CBYKLzHdZA+rfEleSbh5bvFoT1zv/vu0vYyWK1WX+ShDQDumepQ3DPBCYpDcU8ygFL3ROg7JhSH4p5kAKXuidDY3P6k1MMwpOl0SqPR6KOFc71eqSgKulwu2utogzP0YrHQDkTmDw6HA5VlKePydK82eJIkH1f6MWpWfrvd2gXPskwrAFXn9Xqt6tr6aSsOcK38yztDcfmcodS15uroccWSU3VDjytmDo8zxcQRelw1c4p+6HHFxDnT41VVtV9c8/n8Vyj/QvGmaWiz2RD/LpdLmkwmb+GdB2eYuq6Fn677/Z5YcbYgCIg/dYfDoRDeefDj8diWcJqmLdSjnU6ndqrSNZ7kMLzInAbnERGDszFMHMc/4DkhPE3pMx5lifrdWfC+KUl3TMXXucS5FV6ZqN+dBGeY3W5Ht9vtiWk2m1EURS00w4tM1O9Ognc3qz6w8Xh838zebd+v+t058PP5THmev+ORut7X706BizYrKdKemx/73SlwXTgZf4DLZKtzr/a7urcHCt4eIXH1mDw05CeG7rkZx6xd6ootZt0N4NYlMBwAFDeccOvLQXHrEhgOAIobTrj15aC4dQkMBwDFDSfc+nJQ3LoEhgPwVvFvqK6fYrFZR1EAAAAASUVORK5CYII=");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [surveyId, setSurveyId] = useState(uuid());

  const ClickPublicOrPrivate = () => {
    setIsPublic(!isPublic);
  };

  useEffect(() => {
    const newQuestion = {
      questionText: "Pregunta",
      answer: false,
      answerKey: "",
      questionType: "radio",
      options: [{ optionText: "Opción 1" }],
      open: true,
      required: false,
    };

    setQuestions([...questions, newQuestion]);
  }, []);

  const changeType = (e) => {
    // dispatch({
    //   type:"CHANGE_TYPE",
    //   questionType:e.target.id
    // })
    setType(e.target.id);
  };

  useEffect(() => {
    setType(questionType);
  }, [changeType]);

  const saveQuestions = async () => {
    try {
      const data = {
        questions: questions.map(item => ({
          title: item.questionText,
          type: item.questionType,
          options: item.options.map(op => op.optionText),
          required: item.required,
          public: isPublic
        })),
        title,
        description
      }
      await saveSurvey(surveyId ,data);
      alert("Encuesta guardada correctamente");
    } catch (err) {
      alert("No se pudo guardar la encuesta");
      console.log(err)
    }

  };

  const selectImage = async (e) => {
      const foto = e.target.files[0];
      const url = await saveSurveyImage(surveyId, foto);
      setImage(url);
  };

  const addMoreQuestionField = () => {
    expandCloseAll();

    setQuestions((questions) => [
      ...questions,
      {
        questionText: "Pregunta",
        questionType: "radio",
        options: [{ optionText: "Opción 1" }],
        open: true,
        required: false,
      },
    ]);
  };

  const addQuestionType = (i, type) => {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;

    setQuestions(qs);
  };

  const copyQuestion = (i) => {
    expandCloseAll();
    let qs = [...questions];
    const newQuestion = qs[i];

    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (i) => {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  };

  const handleOptionValue = (text, i, j) => {
    const optionsOfQuestion = [...questions];
    optionsOfQuestion[i].options[j].optionText = text;
    //newMembersEmail[i]= email;
    setQuestions(optionsOfQuestion);
  };

  const handleQuestionValue = (text, i) => {
    const optionsOfQuestion = [...questions];
    optionsOfQuestion[i].questionText = text;
    setQuestions(optionsOfQuestion);
  };

  const editableGrade = () => {
    setGrade(!grade);
  }

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const itemgg = [...questions];
    const itemF = reorder(
      itemgg,
      result.source.index,
      result.destination.index
    );
    setQuestions(itemF);
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const showAsQuestion = (i) => {
    let qs = [...questions];
    qs[i].open = false;
    setQuestions(qs);
  };

  const addOption = (i) => {
    const optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length < 5) {
      optionsOfQuestion[i].options.push({
        optionText: "Opción " + (optionsOfQuestion[i].options.length + 1),
      });
    } else {
      alert("Máximo 5 opciones ");
    }
    //console.log(optionsOfQuestion);
    setQuestions(optionsOfQuestion);
  };

  const setOptionAnswer = (ans, qno) => {
    const Questions = [...questions];

    Questions[qno].answer = ans;

    setQuestions(Questions);
    console.log(qno + " " + ans);
  };

  const setOptionPoints = (points, qno) => {
    const Questions = [...questions];

    Questions[qno].points = points;

    setQuestions(Questions);
    console.log(qno + " " + points);
  };
  const addAnswer = (i) => {
    const answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion);
  };

  const doneAnswer = (i) => {
    const answerOfQuestion = [...questions];

    answerOfQuestion[i].answer = !answerOfQuestion[i].answer;

    setQuestions(answerOfQuestion);
  };

  const requiredQuestion = (i) => {
    const requiredQuestion = [...questions];

    requiredQuestion[i].required = !requiredQuestion[i].required;

    console.log(requiredQuestion[i].required + " " + i);
    setQuestions(requiredQuestion);
  };

  const removeOption = (i, j) => {
    const optionsOfQuestion = [...questions];
    if (optionsOfQuestion[i].options.length > 1) {
      optionsOfQuestion[i].options.splice(j, 1);
      setQuestions(optionsOfQuestion);
      console.log(i + "__" + j);
    }
  };

  const expandCloseAll = () => {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      qs[j].open = false;
    }
    setQuestions(qs);
  };

  const handleExpand = (i) => {
    let qs = [...questions];
    for (let j = 0; j < qs.length; j++) {
      if (i === j) {
        qs[i].open = true;
      } else {
        qs[j].open = false;
      }
    }
    setQuestions(qs);
  };

  const questionsUI = () => {
    return questions.map((ques, i) => (
      <Draggable key={i} draggableId={i + "id"} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div>
              <div style={{ marginBottom: "0px" }}>
                <div style={{ width: "100%", marginBottom: "0px" }}>
                  <DragIndicatorIcon
                    style={{
                      transform: "rotate(-90deg)",
                      color: "#DAE0E2",
                      position: "relative",
                      left: "48%",
                    }}
                    fontSize="small"
                  />
                </div>

                <Accordion
                  style={{ minWidth: "350pt", margin: "auto" }}
                  onChange={() => {
                    handleExpand(i);
                  }}
                  expanded={questions[i].open}
                  className={questions[i].open ? "add_border" : ""}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    elevation={1}
                    style={{ width: "100%" }}
                  >
                    <TextField
                      id="outlined-number"
                      label="Nota"
                      type="number"
                      disabled={!grade}
                      style={{position: 'absolute', right: '0', top: '0', marginRight: '30pt', marginTop: '5pt'}}
                      InputProps={{ inputProps: { min: 0, max: 100 } }}
                    />
                    
                    { !questions[i].open ? (


                        
                  <div className="saved_questions">
                    
                   

                    <Typography  style={{fontSize:"15px",fontWeight:"400",letterSpacing: '.1px',lineHeight:'24px',paddingBottom:"8px"}} >{i+1}.  {ques.questionText}</Typography>
    
                    
                    {ques.options.map((op, j)=>(
                     
                     <div key={j} >
                       <div style={{display: 'flex',}}>
                        <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType} color="primary" style={{marginRight: '3px', }} required={ques.type}/>} label={
                            <Typography style={{fontFamily:' Roboto,Arial,sans-serif',
                                fontSize:' 13px',
                                fontWeight: '400',
                                letterSpacing: '.2px',
                                lineHeight: '20px',
                                color: '#202124'}}>
                              {ques.options[j].optionText}
                            </Typography>
                          } />
                       </div>
    
                     
                     </div>

                         

                    ))}  
                  </div>            
                  ): ""}   
                  </AccordionSummary>
                  
                      <div className="question_boxes">
                        
                      {!ques.answer ? (<AccordionDetails className="add_question" >
                      
                        <div >
                            <div className="add_question_top">
                                <input type="text" className="question" placeholder="Pregunta"    value={ques.questionText} onChange={(e)=>{handleQuestionValue(e.target.value, i)}}></input>
                                <IconButton>
                                  <CropOriginalIcon style={{color:"#5f6368"}} />
                                </IconButton>
                                
                                <Select defaultValue={"Radio"} className="select" style={{color:"#5f6368",fontSize:"13px"}} >
                                    {/* <MenuItem value="radio" className="menuitem" >
                                     <ShortTextIcon style={{marginRight:"10px"}} /> <span style={{marginBottom:"10px"}}>Short Paragraph</span></MenuItem>
                                     */}
                              <MenuItem
                                id="text"
                                value="Text"
                                onClick={() => {
                                  addQuestionType(i, "text");
                                }}
                              >
                                {" "}
                                <SubjectIcon
                                  style={{ marginRight: "10px" }}
                                />{" "}
                                Texto
                              </MenuItem>

                              {/* <MenuItem id="checkbox"><RadioButtonCheckedIcon checked style={{marginRight:"10px", color:"#70757a"}}/> Multiple Choice</MenuItem> */}
                              <MenuItem
                                id="checkbox"
                                value="Checkbox"
                                onClick={() => {
                                  addQuestionType(i, "checkbox");
                                }}
                              >
                                <CheckBoxIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />{" "}
                                Selección múltiple
                              </MenuItem>
                              <MenuItem
                                id="radio"
                                value="Radio"
                                onClick={() => {
                                  addQuestionType(i, "radio");
                                }}
                              >
                                {" "}
                                <RadioButtonCheckedIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                  checked
                                />{" "}
                                Selección simple
                              </MenuItem>
                              <MenuItem
                                value="File"
                                onClick={() => {
                                  addQuestionType(i, "file");
                                }}
                              >
                                {" "}
                                <BackupIcon
                                  style={{
                                    marginRight: "10px",
                                    color: "#70757a",
                                  }}
                                />{" "}
                                Carga de archivo{" "}
                              </MenuItem>

                              {/* <MenuItem value="aate"  onClick= {(e)=>{setType(e.target.id)}}> <EventIcon style={{marginRight:"10px"}} /> Date</MenuItem>
                                    <MenuItem value="date"  onClick= {(e)=>{setType(e.target.id)}}> <ScheduleIcon style={{marginRight:"10px"}} /> Time</MenuItem>
 */}
                            </Select>
                          </div>

                          {ques.options.map((op, j) => (
                            <div className="add_question_body" key={j}>
                              {/* <Checkbox  color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} disabled/> */}
                              {ques.questionType != "text" ? (
                                <input
                                  type={ques.questionType}
                                  style={{ marginRight: "10px" }}
                                />
                              ) : (
                                <ShortTextIcon
                                  style={{ marginRight: "10px" }}
                                />
                              )}
                              <div>
                                <input
                                  type="text"
                                  className="text_input"
                                  style={{ width: "197.5pt" }}
                                  placeholder="Opción"
                                  value={ques.options[j].optionText}
                                  onChange={(e) => {
                                    handleOptionValue(e.target.value, i, j);
                                  }}
                                ></input>
                              </div>

                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  removeOption(i, j);
                                }}
                              >
                                <CloseIcon />
                              </IconButton>
                            </div>
                          ))}

                          {ques.options.length < 5 ? (
                            <div className="add_question_body">
                              <FormControlLabel
                                disabled
                                control={
                                  ques.questionType != "text" ? (
                                    <input
                                      type={ques.questionType}
                                      color="primary"
                                      inputProps={{
                                        "aria-label": "secondary checkbox",
                                      }}
                                      style={{
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                      }}
                                      disabled
                                    />
                                  ) : (
                                    <ShortTextIcon
                                      style={{ marginRight: "10px" }}
                                    />
                                  )
                                }
                                label={
                                  <div>
                                    <input
                                      type="text"
                                      className="text_input"
                                      style={{
                                        fontSize: "13px",
                                        width: "60px",
                                      }}
                                      placeholder="Otra"
                                    ></input>
                                    <Button
                                      size="small"
                                      onClick={() => {
                                        addOption(i);
                                      }}
                                      style={{
                                        textTransform: "none",
                                        color: "#4285f4",
                                        fontSize: "13px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      Añadir opción
                                    </Button>
                                  </div>
                                }
                              />
                            </div>
                          ) : (
                            ""
                          )}
                          <div className="add_footer">
                            <div className="add_question_bottom_left">
                              <Button
                                size="small"
                                onClick={() => {
                                  addAnswer(i);
                                }}
                                style={{
                                  textTransform: "none",
                                  color: "#4285f4",
                                  fontSize: "13px",
                                  fontWeight: "600",
                                }}
                              >
                                {" "}
                                <FcRightUp
                                  style={{
                                    border: "2px solid #4285f4",
                                    padding: "2px",
                                    marginRight: "8px",
                                  }}
                                />{" "}
                                Seleccionar respuestas{" "}
                              </Button>
                            </div>

                            <div className="add_question_bottom">
                              <IconButton
                                aria-label="Copy"
                                onClick={() => {
                                  copyQuestion(i);
                                }}
                              >
                                <FilterNoneIcon />
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                onClick={() => {
                                  deleteQuestion(i);
                                }}
                              >
                                <BsTrash />
                              </IconButton>
                              <span
                                style={{ color: "#5f6368", fontSize: "13px" }}
                              >
                                Requerida{" "}
                              </span>{" "}
                              <Switch
                                name="checkedA"
                                color="primary"
                                checked={ques.required}
                                onClick={() => {
                                  requiredQuestion(i);
                                }}
                              />
                              <IconButton>
                                <MoreVertIcon />
                              </IconButton>
                            </div>
                          </div>
                        </div>
                      </AccordionDetails>
                    ) : (
                      <AccordionDetails className="add_question">
                        <div className="top_header">
                          Selecciona la respuesta correcta
                        </div>
                        <div>
                          <div className="add_question_top">
                            <input
                              type="text"
                              className="question "
                              placeholder="Pregunta"
                              value={ques.questionText}
                              onChange={(e) => {
                                handleQuestionValue(e.target.value, i);
                              }}
                              disabled
                            />
                            <input
                              type="number"
                              className="points"
                              min="0"
                              step="1"
                              placeholder="0"
                              onChange={(e) => {
                                setOptionPoints(e.target.value, i);
                              }}
                            />
                          </div>

                          {ques.options.map((op, j) => (
                            <div
                              className="add_question_body"
                              key={j}
                              style={{
                                marginLeft: "8px",
                                marginBottom: "10px",
                                marginTop: "5px",
                              }}
                            >
                              <div key={j}>
                                <div style={{ display: "flex" }} className="">
                                  <div className="form-check">
                                    <label
                                      style={{ fontSize: "13px" }}
                                      onClick={() => {
                                        setOptionAnswer(
                                          ques.options[j].optionText,
                                          i
                                        );
                                      }}
                                    >
                                      {ques.questionType != "text" ? (
                                        <input
                                          type={ques.questionType}
                                          name={ques.questionText}
                                          value="option3"
                                          className="form-check-input"
                                          required={ques.required}
                                          style={{
                                            marginRight: "10px",
                                            marginBottom: "10px",
                                            marginTop: "5px",
                                          }}
                                        />
                                      ) : (
                                        <ShortTextIcon
                                          style={{ marginRight: "10px" }}
                                        />
                                      )}

                                      {ques.options[j].optionText}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="add_question_body">
                            <Button
                              size="small"
                              style={{
                                textTransform: "none",
                                color: "#4285f4",
                                fontSize: "13px",
                                fontWeight: "600",
                              }}
                            >
                              {" "}
                              <BsFileText
                                style={{ fontSize: "20px", marginRight: "8px" }}
                              />
                              Añadir respuesta
                            </Button>
                          </div>

                          <div className="add_question_bottom">
                            <Button
                              variant="outlined"
                              color="primary"
                              style={{
                                textTransform: "none",
                                color: "#4285f4",
                                fontSize: "12px",
                                marginTop: "12px",
                                fontWeight: "600",
                              }}
                              onClick={() => {
                                doneAnswer(i);
                              }}
                            >
                              Hecho
                            </Button>
                          </div>
                        </div>
                      </AccordionDetails>
                    )}
                    {!ques.answer ? (<div className="question_edit">
                                <AddCircleOutlineIcon onClick={addMoreQuestionField} className="edit"/>
                                <CropOriginalIcon className="edit"/>
                    </div>): "" }
                    </div>
                            
                </Accordion>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    ));
  };

  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_form_top">
            <span style={{color:"#5f6368",fontSize:"13px"}}>Evaluada</span> <Switch name="checkedGrade" onClick={editableGrade} color="primary" />
            <IconButton
              onClick={ClickPublicOrPrivate}
              className={classes.topSeparator}
            >
              {isPublic ? (
                <LockOpenOutlined style={{ color: "#00d49c" }} />
              ) : (
                <LockOutlined style={{ color: "#FF005C" }} />
              )}
            </IconButton>
            
            <div className="photo_form"> 
              <label htmlFor="select-image" className="photo_form">
                <Avatar
                  style={{ margin: "auto", width: "50pt", height: "50pt" }}
                  variant="rounded"
                  src={image}
                />
              </label>
              <input
                accept="image/*"
                type="file"
                style={{ display: "none" }}
                onChange={selectImage}
                id="select-image"
                className="photo_form"
              />
            </div>

            <TextField
              label="Titulo"
              className="question_form_top_name"
              style={{ marginBottom: "20pt" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              label="Descripción"
              multiline
              maxRows={4}
              className="question_form_top_desc"
              style={{ marginBottom: "50pt" }}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {questionsUI()}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <div className="save_form">
            <Button
              variant="contained"
              color="primary"
              style={{ fontSize: "14px" }}
              onClick={saveQuestions}
            >
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question_form;
