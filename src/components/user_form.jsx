import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useHistory, useParams } from "react-router-dom";
import { getSurveyById } from '../firebase/functions';
import { useQuery } from "./useQuery";
import "./user_form.css";
import NotFound from "../pages/NotFound";
import { Checkbox, CircularProgress, FormControl, RadioGroup, TextField, FormLabel } from "@mui/material";
import Radio from '@mui/material/Radio';
import { UploadFile } from "@mui/icons-material";


function User_form() {
  const quest = [];
  const post_answer = [];
  const history = useHistory();
  const { id } = useParams();
  const query = useQuery();
  const [answer, setAnswer] = useState([]);
  const [surveys, setSurveys] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleChange = (event) => {
    {console.log(event.target.value)}
    {console.log(selectedValue)}
    setSelectedValue([...selectedValue, event.target.value])
    {console.log('')}
    {console.log(selectedValue)}
  };


  // var [{ questions, doc_name, doc_desc }, dispatch] = useStateValue();

  useEffect(() => {
    const getData = async () => {
      const user = query.get("user");
      const state = (query.get("public") === "private") ? "privadas" : "publicas";
      const data = await getSurveyById(id, user, state);
      setSurveys(data);
      console.log(data);
      setLoading(false);
    }

    getData()
  }, [])

  function select(que, option) {
    // answer.map((ele)=>{
    //     ele.question==que ? ele.answer = option : console.log(" ")
    // })

  //   const k = answer.findIndex((ele) => ele.question == que);

  //   answer[k].answer = option;
  //   setAnswer(answer);
  //   console.log(answer);
  // }

  // const post_answer_data = {};

  // function selectinput(que, option) {
  //   var k = answer.findIndex((ele) => ele.question == que);

  //   answer[k].answer = option;
  //   setAnswer(answer);
  //   console.log(answer);
  }

  function selectcheck(e, que, option) {
    // var d = [];
    // var k = answer.findIndex((ele) => ele.question == que);
    // if (answer[k].answer) {
    //   d = answer[k].answer.split(",");
    // }

    // if (e == true) {
    //   d.push(option);
    // } else {
    //   var n = d.findIndex((el) => el.option == option);
    //   d.splice(n, 1);
    // }

    // answer[k].answer = d.join(",");

    // setAnswer(answer);
    // console.log(answer);
  }

  function submit() {
    // answer.map((ele) => {
    //   post_answer_data[ele.question] = ele.answer;
    // });

    // axios.post(`http://localhost:9000/student_response/${doc_name}`, {
    //   column: quest,
    //   answer_data: [post_answer_data],
    // });

    // history.push(`/submitted`);
  }

  function isCheckedFunction(qindex, ques) {
    selectedValue.map(item => {
      return item === qindex + ques ?
        true
      :
        false
    })
  }

  const typeInput = (question, ques, qindex) => {
    switch (question.type) {
      case "radio":
        return (
          <>
            <div style={{display: 'inline-flex'}}>
              <Radio
                value={ques}
              />
              <Typography
                style={{
                  marginTop: '6pt',
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontSize: "14px",
                }}
              > 
                {ques}
              </Typography>
            </div>
          </>
        );
      case "checkbox":
        return (
          <>
            <div style={{display: 'inline-flex'}}>
              <Checkbox color="primary" />
              <Typography
                style={{
                  marginTop: '6pt',
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontSize: "14px",
                }}
              > 
                {ques}
              </Typography>
            </div>
          </>
        );
      case "file":
        return (
          <>
           <div>
              <Typography
                style={{
                  marginTop: '6pt',
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontSize: "14px",
                }}
              > 
                {ques}
              </Typography>
                  <div style={{display: 'inline-flex'}}>
                    <Button
                      variant="contained"
                      component="label"
                      color="secondary"
                      style={{color: '#fff', marginRight: '10pt'}}
                    >
                      Cargar archivo
                      <input
                        type="file"
                        hidden
                        name={qindex+ques}
                      />
                    </Button>
                    <Typography
                      style={{
                        marginTop: '6pt',
                        fontSize: "20px",
                        fontWeight: "400",
                        letterSpacing: ".1px",
                        lineHeight: "24px",
                        paddingBottom: "8px",
                        fontSize: "14px",
                      }}
                    > 
                      {}
                    </Typography>
                  </div>
            </div>
          </>
        );
        case "text":
        return (
          <>
            <div>
              <Typography
                style={{
                  marginTop: '6pt',
                  fontSize: "20px",
                  fontWeight: "400",
                  letterSpacing: ".1px",
                  lineHeight: "24px",
                  paddingBottom: "8px",
                  fontSize: "14px",
                }}
              > 
                {ques}
              </Typography>
              <TextField
                color="primary"
                fullWidth
                style={{ marginBottom: "20pt" , width: "100%"}}
              />
            </div>
          </>
        );
      default:
        return;
    }
  };

  return (
    <div className="submit">
      {
          loading ? 
            <div style={{textAlign: 'center', margin: 'auto', marginTop: '50pt'}}>
              <CircularProgress style={{margin: 'auto'}}/>
            </div>
          : (
            surveys ? 
            <div className="user_form">
              <div className="user_form_section">
                <div className="user_title_section">
                  <Typography style={{ fontSize: "26px", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nonwrap' }}>{surveys.title}</Typography>
                  <Typography style={{ fontSize: "15px" }}>{surveys.description}</Typography>
                </div>

              {surveys.questions.map((question, qindex) => (
                  <div className="user_form_questions">
                    <Typography
                      style={{
                        fontSize: "15px",
                        fontWeight: "400",
                        letterSpacing: ".1px",
                        lineHeight: "24px",
                        paddingBottom: "8px",
                        fontSize: "14px",
                      }}
                    >
                      {qindex + 1}. {question.title}
                    </Typography>
                    {question.options.map((ques, index) => (
                      <div style={{ marginBottom: "5px" }}>
                        <div style={{ display: "flex" }}>
                          <div className="form-check">
                            {typeInput(question, ques, qindex)}
                          </div>
                        </div>
                      </div>
                   ))} 
                  </div>
                ))}

                <div className="user_form_submit">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={submit}
                    style={{ fontSize: "14px" }}
                  >
                    Enviar
                  </Button>
                </div>
              </div>
            </div> 
            : 
            <div style={{marginTop: '50pt'}}>
              <NotFound/>
            </div>
          )
        }
    </div>
  );
}

export default User_form;
