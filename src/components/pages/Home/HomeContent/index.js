import { Progress, Radio } from "antd";
import { Input } from "antd";
import { Switch } from "antd";
import { Button } from "antd";

import React from "react";
import CommonButton from "src/components/common/Button";
import CommonInputField from "src/components/common/Input";


const HomeContent = () => {
 

  return (
    <div className="m-3">
    <CommonButton child={"HomeContent"}  />
    <Radio/>
    <CommonInputField />
    <Switch/>



    </div>

  );
};

export default HomeContent;
