import * as React from "react";
import { Slider } from "office-ui-fabric-react/lib/Slider";
import { IStackTokens, Stack } from "office-ui-fabric-react/lib/Stack";

export interface ISliderBasicExampleState {
  value: number;
}

// tslint:disable:jsx-no-lambda
export class SliderBasicExample extends React.Component<
  {},
  ISliderBasicExampleState
> {
  public state: ISliderBasicExampleState = { value: 0 };

  public render(): JSX.Element {
    const stackTokens: IStackTokens = { childrenGap: 20 };

    return (
      <Stack tokens={stackTokens} styles={{ root: { maxWidth: 300 } }}>
        <Slider
          min={0}
          max={100}
          step={5}
          defaultValue={50}
          showValue={true}
          onChange={(value: number) => console.log(value)}
          snapToStep
        />
        {/* <Slider
          label="Disabled example"
          min={50}
          max={500}
          step={50}
          defaultValue={300}
          showValue={true}
          disabled
        />*/}
      </Stack>
    );
  }
}
