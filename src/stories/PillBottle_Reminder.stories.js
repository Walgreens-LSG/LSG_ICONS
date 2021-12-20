//import { propNames } from "@chakra-ui/react";
import React from "react";
import { WagIconPillBottleReminder } from "../component/PillBottle_Reminder";

//import icon below


//👇 This default export determines where your story goes in the story list
export default {
  title: "Rx Icons / Pill Bottle - Reminder",
  component: WagIconPillBottleReminder,
   subcomponent: {  },
  argTypes: {
    
    
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (

   
      <WagIconPillBottleReminder
      size={args.size}
      alt={args.alt}
      fill={args.fill}
    />
     
);

export const Default = Template.bind({});
Default.args = {
};

export const Smaller_Size = () => (
  <WagIconPillBottleReminder
  />
);

export const Larger_Size = () => (
  <WagIconPillBottleReminder
    size="sixty-four"
  />
);




