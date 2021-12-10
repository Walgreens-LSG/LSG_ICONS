//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import {WagIconNurse} from "../component/Nurse.js";

//👇 This default export determines where your story goes in the story list
export default {
  title: "General Icons/ Nurse",
  component: WagIconNurse,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconNurse
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconNurse
  />
);

export const Larger_Size = () => (
  <WagIconNurse
    size="sixty-four"
  />
);




