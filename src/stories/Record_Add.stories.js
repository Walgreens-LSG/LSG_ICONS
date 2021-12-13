//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRecordAdd } from "../component/Record_Add";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Document Icons / Record - Add",
  component: WagIconRecordAdd,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconRecordAdd
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconRecordAdd
  />
);

export const Larger_Size = () => (
  <WagIconRecordAdd
    size="sixty-four"
  />
);




