import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

describe("Link", () => {
  it("renders children", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders an anchor element", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
  });

  it("sets the href attribute", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/about");
  });

  it("applies default variant class when no variant is given", () => {
    render(<Link href="/">Home</Link>);
    expect(screen.getByRole("link")).toHaveClass("default");
  });

  it.each(["default", "subtle", "muted", "unstyled"] as const)(
    "applies variant class for variant='%s'",
    (variant) => {
      render(<Link href="/" variant={variant}>{variant}</Link>);
      expect(screen.getByRole("link")).toHaveClass(variant);
    }
  );

  it("always applies the base class regardless of variant", () => {
    render(<Link href="/">Home</Link>);
    expect(screen.getByRole("link")).toHaveClass("base");
  });

  it("forwards extra className alongside variant classes", () => {
    render(<Link href="/" className="extra">link</Link>);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("extra");
    expect(link).toHaveClass("base");
  });

  it("supports external URLs", () => {
    render(<Link href="https://example.com">External</Link>);
    expect(screen.getByRole("link")).toHaveAttribute("href", "https://example.com");
  });

  it("can apply link styles onto a child anchor element", () => {
    render(
      <Link asChild variant="unstyled" className="extra">
        <a href="/about">About</a>
      </Link>
    );

    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
    expect(link).toHaveClass("unstyled");
    expect(link).toHaveClass("extra");
  });
});
