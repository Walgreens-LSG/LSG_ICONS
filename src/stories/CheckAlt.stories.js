//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconCheckAlt } from "../component/CheckAlt";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert Icons/ Check - alt",
  component: WagIconCheckAlt,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconCheckAlt 
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
  <WagIconCheckAlt
  />
);

export const Larger_Size = () => (
  <WagIconCheckAlt
    size="sixty-four"
  />
);




