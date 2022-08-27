import React from "react";
export const Buttoncomp = ({Comp = "span",cssStyles,value})=>{
        return (
            <div>
              <button type="button">Click Me</button>
            </div>
          );
};
 

export const Dropdown = (props) => {
    return (
      <div>
        <select>
          <option value="">--SELECT--</option>
          <option value="">YES</option>
          <option value="">NO</option>
        </select>
      </div>
    );
  };



  export const TextComponent = ({
    label,
    styleProps,
    isMandatory,
    children,
    CustomTag = "div",
  }) => (
    <CustomTag style={styleProps}>
      {label}
      {isMandatory && <span>*</span>}
      {children}
    </CustomTag>
  );

  export const InputComponent = (props) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: props.type === "text" ? "column" : "row",
        }}
      >
        {props.type === "radio" && <input {...props}></input>}
        <TextComponent
          label={props.label}
          CustomTag={props.type === "text" ? "div" : "span"}
        />
        {props.type === "text" && <input {... props}></input>}
      </div>
    );
  };
