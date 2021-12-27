//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconList } from "../component/List";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc Icons / List",
  component: WagIconList,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconList
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
  <WagIconList
  />
);

export const Larger_Size = () => (
  <WagIconList
    size="sixty-four"
  />
);




