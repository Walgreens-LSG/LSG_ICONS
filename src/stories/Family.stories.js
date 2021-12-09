import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import {WagIconFamily} from "../component/Family.js";

//👇 This default export determines where your story goes in the story list
export default {
  title: "General Icons/ Family",
  component: WagIconFamily,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <WagIconFamily 
      size={args.size}
      alt={args.alt}
    />
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconFamily
  />
);

export const Larger_Size = () => (
  <WagIconFamily
    size="sixty-four"
  />
);




