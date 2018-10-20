import * as React from "react";
import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "src/presentation/utility/Button";
import { H1 } from "src/presentation/utility/Heading";
import { Link, LinkDestinationKind } from "src/presentation/utility/Link";

export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <div>
        <H1>Dashboard</H1>
        <Link
          to={{
            destination: "/lesson/abcdefg",
            kind: LinkDestinationKind.INTERNAL
          }}
        >
          Lesson abcdefg
        </Link>
        <div>
          <Button
            onClick={{
              action: () => {
                alert("hi");
              },
              kind: ButtonTargetKind.FUNCTION
            }}
          >
            Say hi
          </Button>
          <Button
            onClick={{
              action: () => {
                alert("sup");
              },
              kind: ButtonTargetKind.FUNCTION
            }}
            role={ButtonRole.TEXT_ONLY}
          >
            Say sup
          </Button>
          <Button
            onClick={{ kind: ButtonTargetKind.SUBMIT, action: undefined }}
            role={ButtonRole.SECONDARY}
          >
            Submit
          </Button>
          <Button
            disabled={true}
            onClick={{
              kind: ButtonTargetKind.LINK,
              action: {
                destination: "/lesson/linklesson",
                kind: LinkDestinationKind.INTERNAL
              }
            }}
          >
            Link to lesson
          </Button>
          <Button
            disabled={true}
            onClick={{
              action: () => {
                alert("hi");
              },
              kind: ButtonTargetKind.FUNCTION
            }}
          >
            Say hi
          </Button>
        </div>
      </div>
    );
  }
}
