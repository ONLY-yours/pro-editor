import { createStyles } from '../../theme';

export const useStyle = createStyles(({ token, css, cx }, prefixCls) => ({
  app: css`
    height: 100%;
  `,
  main: cx(
    `${prefixCls}-main`,
    css`
      display: flex;
      flex-wrap: nowrap;
      height: 100%;
      position: relative;
      background-color: ${token.colorBgLayout};
    `,
  ),
  left: cx(
    `${prefixCls}-left`,
    css`
      flex-grow: 1;
    `,
  ),
}));
