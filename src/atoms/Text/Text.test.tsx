import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  it("renders children", () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders a <p> by default (body variant)", () => {
    render(<Text>content</Text>);
    expect(screen.getByText("content").tagName).toBe("P");
  });

  it.each([
    ["h1", "H1"],
    ["h2", "H2"],
    ["h3", "H3"],
    ["lead", "P"],
    ["body", "P"],
    ["small", "P"],
    ["caption", "SPAN"],
  ] as const)("variant='%s' renders the correct HTML element <%s>", (variant, tag) => {
    render(<Text variant={variant}>text</Text>);
    expect(screen.getByText("text").tagName).toBe(tag);
  });

  it("applies the variant CSS class", () => {
    render(<Text variant="h2">heading</Text>);
    expect(screen.getByText("heading")).toHaveClass("h2");
  });

  it("applies the color CSS class", () => {
    render(<Text color="muted">content</Text>);
    expect(screen.getByText("content")).toHaveClass("muted");
  });

  it("applies both variant and color classes together", () => {
    render(<Text variant="h1" color="accent">title</Text>);
    const el = screen.getByText("title");
    expect(el).toHaveClass("h1");
    expect(el).toHaveClass("accent");
  });

  it("'as' prop overrides the default HTML element", () => {
    render(<Text variant="body" as="span">text</Text>);
    expect(screen.getByText("text").tagName).toBe("SPAN");
  });

  it("'as' prop can render semantic elements like <time>", () => {
    render(<Text as="time" variant="caption">2025-01-01</Text>);
    expect(screen.getByText("2025-01-01").tagName).toBe("TIME");
  });

  it("forwards extra className alongside variant classes", () => {
    render(<Text className="extra">text</Text>);
    const el = screen.getByText("text");
    expect(el).toHaveClass("extra");
    expect(el).toHaveClass("body");
  });
});
