import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;
const InputSpan = styled.span`
  min-width: 5px;
  height: min-content;
  display: inline-flex;
  border: none;
  outline: none;
  white-space: nowrap;
  cursor: text;

  &:empty::before {
    content: attr(aria-placeholder);
    color: var(--fg);
    pointer-events: none;
    opacity: 0.7;
    border-bottom: 1px solid var(--fg);
  }

  &:focus {
    border-bottom: none;
  }
`;
const Button = styled.button`
  padding: 2px 10px;
  border: 1px solid var(--fg);
  border-radius: 999px;
  background-color: transparent;
  width: max-content;
  height: min-content;
  & > p {
    white-space: nowrap;
  }
`;

export default function NewForm() {
  return (
    <>
      <Label>
        <p className="">Hello, my name is</p>
        <InputSpan
          role="textbox"
          contentEditable="true"
          aria-placeholder="your name"
          aria-required="true"
          inputMode="text"
          autoFocus={true}
          aria-multiline="false"
        />
      </Label>
      <Label>
        <p className="">and I would like to talk to you about</p>
        <Button>
          <p className="">a new project</p>
        </Button>
        <Button>
          <p className="">an existing website</p>
        </Button>
      </Label>
      <Label>
        <p className="">The project is a</p>
        <Button>
          <p className="">creative website</p>
        </Button>
        <Button>
          <p className="">e-store</p>
        </Button>
        <Button>
          <p className="">portfolio </p>
        </Button>
        <Button>
          <p className="">company website</p>
        </Button>
        <Button>
          <p className="">marketing website</p>
        </Button>
        <Button>
          <p className="">mobile app</p>
        </Button>
      </Label>
      <Label>
        <p className="">which requires</p>
        <Button>
          <p className="">content consultation</p>
        </Button>
        <Button>
          <p className="">design</p>
        </Button>
        <Button>
          <p className="">development</p>
        </Button>
      </Label>
      <Label>
        <p className="">and would need to be completed in</p>
        <Button>
          <p className="">ASAP</p>
        </Button>
        <Button>
          <p className="">3 months</p>
        </Button>
        <Button>
          <p className="">6 months</p>
        </Button>
        <Button>
          <p className="">no set deadline</p>
        </Button>
      </Label>
      <Label>
        <p className="">You can email me back at</p>
        <InputSpan
          role="textbox"
          contentEditable="true"
          aria-placeholder="your email"
          aria-required="true"
          inputMode="text"
          autoFocus={true}
          aria-multiline="false"
        />
      </Label>
      <Label>
        <p className="">p.s.</p>
        <InputSpan
          role="textbox"
          contentEditable="true"
          aria-placeholder="extra info"
          aria-required="true"
          inputMode="text"
          autoFocus={true}
          aria-multiline="false"
        />
      </Label>
    </>
  );
}
