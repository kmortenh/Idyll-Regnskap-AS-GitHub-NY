interface DefaultProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LinkProps extends DefaultProps {
  id: string;
  href: string;
  ariaLabel: string;
  target?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}
