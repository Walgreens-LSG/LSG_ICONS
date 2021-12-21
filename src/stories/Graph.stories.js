//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconGraph } from "../component/Graph";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Misc / Graph",
  component: WagIconGraph,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

    <div>
      <WagIconGraph
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
  <WagIconGraph
  />
);

export const Larger_Size = () => (
  <WagIconGraph
    size="sixty-four"
  />
);




