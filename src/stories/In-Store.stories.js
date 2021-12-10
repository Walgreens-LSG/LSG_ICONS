//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import {WagIconInStore} from "../component/In-Store";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Delivery Icons/ Sign In",
  component: WagIconInStore,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconInStore 
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconInStore
  />
);

export const Larger_Size = () => (
  <WagIconInStore
    size="sixty-four"
  />
);




