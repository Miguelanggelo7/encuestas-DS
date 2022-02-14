import { Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


import { useHistory } from "react-router-dom";
import { getPublicSurveys } from '../firebase/functions';
import "./user_form.css";

function User_form() {
  const quest = [];
  const post_answer = [];
  const history = useHistory();

  const [answer, setAnswer] = useState([]);
  // var [{ questions, doc_name, doc_desc }, dispatch] = useStateValue();

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await getPublicSurveys();
  //     console.log(data);
  //   }

  //   getData()
  // }, [])

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

  return (
    <div className="submit">
      <div className="user_form">
        <div className="user_form_section">
          <div className="user_title_section">
            <Typography style={{ fontSize: "26px", textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nonwrap' }}>Titasdasjkdaskldjaskdjlkasdjlkasjdlkasjlkasdjlaskdjlkasdjlasdjlksjdlksajdlkasjdlksaulo</Typography>
            <Typography style={{ fontSize: "15px" }}>Descripción</Typography>
          </div>

         {/*{questions.map((question, qindex) => (*/}
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
                {/* {qindex + 1}. {question.questionText} */} 1. ¿Capital de Venezuela?
              </Typography>
              {/*{question.options.map((ques, index) => (*/}
                <div style={{ marginBottom: "5px" }}>
                  <div style={{ display: "flex" }}>
                    <div className="form-check">
                      {"redio" != "radio" ? (
                        "redio" != "text" ? (
                          <label>
                            <input
                              type="radio"
                              name="nombre"
                              value="valor"
                              className="form-check-input"
                              required={false}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              // onChange={(e) => {
                              //   selectcheck(
                              //     e.target.checked,
                              //     question.questionText,
                              //     ques.optionText
                              //   );
                              // }}
                            />{" "}
                            {/* {ques.optionText} */}
                          </label>
                        ) : (
                          <label>
                            <input
                              type="checkbox"
                              name="nombre2"
                              value="valor2"
                              className="form-check-input"
                              required={false}
                              style={{ margnLeft: "5px", marginRight: "5px" }}
                              // onChange={(e) => {
                              //   selectinput(
                              //     question.questionText,
                              //     e.target.value
                              //   );
                              // }}
                            />{" "}
                            {/* {ques.optionText} */}
                          </label>
                        )
                      ) : (
                        <label>
                          {/* <input
                            type={question.questionType}
                            name={qindex}
                            value={ques.optionText}
                            className="form-check-input"
                            required={question.required}
                            style={{ margnLeft: "5px", marginRight: "5px" }}
                            onChange={() => {
                              select(question.questionText, ques.optionText);
                            }}
                          />
                          {ques.optionText} */}
                          <p>:p</p>
                        </label>
                      )}
                    </div>
                  </div>
                </div>
             {/* ))} */}
            </div>
        {/*  ))} */}

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
    </div>
  );
}

export default User_form;
