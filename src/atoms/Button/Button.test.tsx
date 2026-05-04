import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);

    await user.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(<Button onClick={onClick} disabled>Click</Button>);

    await user.click(screen.getByRole("button"));

    expect(onClick).not.toHaveBeenCalled();
  });

  it("has the disabled attribute when disabled prop is passed", () => {
    render(<Button disabled>Click</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies primary variant class by default", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("primary");
  });

  it.each(["primary", "secondary", "ghost"] as const)(
    "applies variant class for variant='%s'",
    (variant) => {
      render(<Button variant={variant}>Click</Button>);
      expect(screen.getByRole("button")).toHaveClass(variant);
    }
  );

  it("applies md size class by default", () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole("button")).toHaveClass("md");
  });

  it.each(["sm", "md", "lg"] as const)(
    "applies size class for size='%s'",
    (size) => {
      render(<Button size={size}>Click</Button>);
      expect(screen.getByRole("button")).toHaveClass(size);
    }
  );

  it("forwards type attribute", () => {
    render(<Button type="submit">Submit</Button>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("forwards aria-label attribute", () => {
    render(<Button aria-label="close dialog">x</Button>);
    expect(screen.getByRole("button", { name: "close dialog" })).toBeInTheDocument();
  });

  it("forwards extra className alongside base classes", () => {
    render(<Button className="extra">Click</Button>);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("extra");
    expect(btn).toHaveClass("base");
  });
});
