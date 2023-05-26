import { Button } from "antd";
import React from "react";

const CommonButton = ({
  child,
  classname,
  topClass,
  width,
  height = "37.5px",
  background,
  borderRadius = "4.5px",
  border,
  color ,
  onClick,
  htmlType,
  disabled,
  type = "primary",
  fontSize = "12px",
  padding,
  icon,
}) => {
  return (
    <div className={`button-parent ${topClass || ""} `}>
      <Button
        icon={icon}
        type={type}
        style={{
          fontSize,
          width,
          height,
          background,
          borderRadius,
          color,
          border,
          padding,
        }}
        className={classname}
        onClick={onClick}
        htmlType={htmlType}
        disabled={disabled}
      >
        {child}
      </Button>
    </div>
  );
};

export default CommonButton;
