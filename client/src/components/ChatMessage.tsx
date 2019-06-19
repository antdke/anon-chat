import React, { CSSProperties } from "react";

interface Props {
  text: string;
  userIndex: number;
  styleProp: string;
}

// const messageStyle = {
//   display: "flex",
//   flexDirection: "column" as "column",
//   width: "200px",
//   alignItems: "flex-end",
//   padding: "10px",
//   borderRadius: "10px",
//   backgroundColor: "#09f",
//   margin: "10px"
// };

const ChatMessage: React.FunctionComponent<Props> = ({
  text,
  userIndex,
  styleProp
}) => {
  const { textColor, bgColor } = styleProp;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column" as "column",
          width: "200px",
          alignItems: "flex-end",
          padding: "10px",
          borderRadius: "10px",
          margin: "10px",
          color: textColor,
          backgroundColor: bgColor
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
