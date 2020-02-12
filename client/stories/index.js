import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Garden from "../src/components/Garden";

// garden
storiesOf("Garden", module).add("Garden", () => <Garden />);
