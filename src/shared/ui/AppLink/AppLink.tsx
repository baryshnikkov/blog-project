import cls from "./AppLink.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED_PRIMARY = 'invertedPrimary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
          <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
          >
            {children}
          </Link>
  );
};