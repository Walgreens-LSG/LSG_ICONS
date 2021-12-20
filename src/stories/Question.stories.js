//import { propNames } from "@chakra-ui/react";
import React from "react";

//import icon below
import { WagIconQuestion } from "../component/Question";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Alert Icons/ Question",
  component: WagIconQuestion,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconQuestion
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
  <WagIconQuestion
  />
);

export const Larger_Size = () => (
  <WagIconQuestion
    size="sixty-four"
  />
);




