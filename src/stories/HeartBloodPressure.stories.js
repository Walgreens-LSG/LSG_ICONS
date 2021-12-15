//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconHeartBloodPressure } from "../component/HeartBloodPressure";

//import icon below

//👇 This default export determines where your story goes in the story list
export default {
  title: "Health Icons/ Heart - Blood pressure",
  component: WagIconHeartBloodPressure,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconHeartBloodPressure
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconHeartBloodPressure
  />
);

export const Larger_Size = () => (
  <WagIconHeartBloodPressure
    size="sixty-four"
  />
);




