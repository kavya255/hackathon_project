import React, { useState } from "react";
import { Header } from "../src/Component/Header";
import { Newschedule } from "../src/Component/Newschedule";
import {
  TextComponent,
  InputComponent,
  Dropdown,
  DatePick,
} from "../src/Component/Button";

export const Createschedule = () => {
  const [branch, setBranch] = useState("");
  const [department, setDepartment] = useState("");
  const [examType, setExamType] = useState("");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [subject5, setSubject5] = useState("");
  const [lab1, setLab1] = useState("");
  const [lab2, setLab2] = useState("");
  ///const [branch, setBranch] = useState("");

  return (
    <div>
      <Header />
      <Newschedule />

      <div>
        <box header="">
          <div style={{ display: "flex" }}>
            <TextComponent
              label="Branch"
              styleProps={{
                display: "flex",
                flexDirection: "row",
                left: "12.01px",
                right: "80.69",
                top: "11.81",
                bottom: "87.23",
                fontSize: "16px",
                textAlign: "left",
                fontWeight: "700",
                lineHeight: "22px",
                padding: "8px 16px",
                isplay: "flex",
                flexaDirection: "row",
                gap: "8px",
                width: "200px",
                height: "30px",
                background: " #FFFFFF",
                borderRadius: "3px",
              }}
            />

            <Dropdown />

            <DatePick />

            <TextComponent
              label="Department"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",
              }}
            />

            <Dropdown />
            <DatePick />
            <InputComponent
              type="Semester"
              style={{ height: "2em" }}
              label={
                <TextComponent
                  label="Semester"
                  styleProps={{
                    fontsize: "16px",
                    textAlign: "left",
                    fontWeight: 700,
                    paddingTop: "10px",
                  }}
                />
              }
              placeholder="Semester"
              onChange={(a) => {
                console.log(a.target.value);
                setSemester(a.target.value);
              }}
            />
          </div>
          <TextComponent
            label="Exam Type"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Time Range"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <TextComponent
            label="Subject1"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Subject2"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Subject3"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Subject4"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Subject5"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />

          <Dropdown />
          <DatePick />

          <TextComponent
            label="Lab"
            styleProps={{
              fontSize: "16px",
              textAlign: "left",
              fontWeight: 700,
              paddingTop: "10px",
            }}
          />
          <div style={{ display: "flex" }}>
            <TextComponent
              label="Lab1"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",
              }}
            />

            <Dropdown />
            <DatePick />
          </div>

          <div style={{ display: "flex" }}>
            <TextComponent
              label="Lab2"
              styleProps={{
                fontSize: "16px",
                textAlign: "left",
                fontWeight: 700,
                paddingTop: "10px",
              }}
            />

            <Dropdown />
            <DatePick />
          </div>
        </box>
      </div>
    </div>
  );
};
