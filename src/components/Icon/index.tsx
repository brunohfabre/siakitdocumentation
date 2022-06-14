import * as phosphorIcons from 'phosphor-react';

type IconProps = {
  name: keyof typeof phosphorIcons;
  size?: string | number | undefined;
  weight?: phosphorIcons.IconWeight | undefined;
};

export function Icon({ name, size, weight }: IconProps): JSX.Element {
  const icon = phosphorIcons[name] as any;

  return <>{icon.render({ size, weight })}</>;
}
