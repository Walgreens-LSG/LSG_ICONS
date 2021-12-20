//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconSearch } from "../component/Search";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Actions Icons / Search",
  component: WagIconSearch,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconSearch
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconSearch
  />
);

export const Larger_Size = () => (
  <WagIconSearch
    size="sixty-four"
  />
);




