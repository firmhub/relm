export default function Nav (h, { styles, props, children }) {
  return (
    <nav {...props || {}} className={[styles.group, props.className]}>
      {children}
    </nav>
  );
}

Nav.styles = (css, { theme }) => css`
  .group {
    font-size: 14px;
  }

  .item {
    padding: 2px 10px 2px 25px;
    display: block;
    color: ${theme.grayColor};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .item:active, .item.active {
    background-color: #dcdfe1;
  }

  .item .icon {
    width: 19px; // Prevents a one pixel cutoff
    height: 18px;
    float: left;
    color: #737475;
    margin-top: -3px;
    margin-right: 7px;
    font-size: 18px;
    text-align: center;
  }

  .title {
    margin: 0;
    padding: 10px 10px 2px;
    font-size: 12px;
    font-weight: 500;
    color: lighten(${theme.grayColor}, 20%);
  }
`;
