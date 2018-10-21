import * as React from "react";
import {
  Button,
  ButtonRole,
  ButtonTargetKind
} from "src/presentation/utility/Button";
import { H2 } from "src/presentation/utility/Heading";
import { INavBarProps, NavBar } from "src/presentation/utility/layout/NavBar";
import { PageBody } from "src/presentation/utility/layout/PageBody";
import { Link, LinkDestinationKind } from "src/presentation/utility/Link";

const pageEntries: INavBarProps["entries"] = [
  {
    displayText: "Professional life",
    link: {
      kind: LinkDestinationKind.INTERNAL,
      destination: "#professional-life"
    }
  },
  {
    displayText: "Passions",
    link: { kind: LinkDestinationKind.INTERNAL, destination: "#passions" }
  },
  {
    displayText: "Get in touch",
    link: { kind: LinkDestinationKind.INTERNAL, destination: "#contact" }
  }
];
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <NavBar entries={pageEntries} />
        <PageBody>
          <H2>
            I create simple, effective tools that enable those around me to
            realize their goals.
          </H2>
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
        </PageBody>
      </>
    );
  }
}
