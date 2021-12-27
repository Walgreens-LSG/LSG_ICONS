//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconRedEye } from "../component/RedEye";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Photo Icons/ Red Eye",
  component: WagIconRedEye,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconRedEye
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
  <WagIconRedEye
  />
);

export const Larger_Size = () => (
  <WagIconRedEye
    size="sixty-four"
  />
);




