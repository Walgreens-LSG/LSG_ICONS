import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconAlert } from "../component/Alert";


//👇 This default export determines where your story goes in the story list
export default {
  title: "Component/ Alert",
  component: WagIconAlert,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconAlert 
      size={args.size}
      alt={args.alt}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconAlert
  />
);

export const Larger_Size = () => (
  <WagIconAlert
    size="sixty-four"
  />
);




