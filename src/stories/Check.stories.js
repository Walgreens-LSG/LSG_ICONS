//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCheck } from "../component/Check";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert Icons/ Check",
  component: WagIconCheck,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconCheck 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
    </div>
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconCheck
  />
);

export const Larger_Size = () => (
  <WagIconCheck
    size="sixty-four"
  />
);




