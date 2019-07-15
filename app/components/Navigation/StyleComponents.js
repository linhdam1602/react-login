import styled, { css } from 'styled-components';
import colorConfig from 'config/style';

const tabNavigationStyle = css`
  .RRT__panel {
    display: none;
  }

  .RRT__tab {
    z-index: 1;
    padding: 12px 0;
    border: none;
    border-right: 1px solid white;

    :last-of-type {
      border: none;
    }

    :hover {
      color: ${colorConfig.darkPrimary};
      background-color: white;
    }

    :focus {
      color: ${colorConfig.darkPrimary};
    }

    a {
      color: #4a4a4a;
      font-size: 20px;
      background-color: transparent;
      padding: 14px 24px;
    }
  }

  .RRT__tabs {
    flex-wrap: none;
  }

  .RRT__tab--selected {
    a {
      color: ${colorConfig.primary};
    }
  }

  .RRT__showmore {
    z-index: 3;
    padding: 12px 24px;
    border: none;
    background: #eee;
    border-left: 1px solid white;

    :hover {
      background: white;
      color: ${colorConfig.darkPrimary};
    }
  }

  .RRT__showmore--selected {
    color: ${colorConfig.primary};
    background-color: white;
  }

  .RRT__showmore-label {
    background: transparent;
    padding: 0;
    height: 20px;
    font-size: 24px;
  }

  .RRT__showmore,
  .RRT__showmore-list {
    :focus {
      outline: none;
    }
  }

  .RRT__showmore-list {
    padding: 12px;
    background-color: white;
    border-radius: 5px;
    cursor: default;
    box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.2);
    top: 120%;

    .RRT__tab {
      padding: 0;
      display: flex;
      background: transparent;

      a {
        width: 100%;
      }

      :hover {
        a {
          color: ${colorConfig.darkPrimary};
        }
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: -7px;
      right: 24px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid rgba(0, 0, 0, 0.1);
    }

    &:after {
      content: '';
      position: absolute;
      top: -6px;
      right: 24px;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid white;
    }
  }
`;

const topMenuNavigationStyle = css`
  margin: 30px;
  margin-bottom: 40px;
  border: none;

  .RRT__tab {
    background: transparent;
    padding: 0;
    border: none;

    :hover {
      background-color: transparent;
    }

    a {
      padding: 0 12px 12px 12px;
      font-size: 16px;

      :hover {
        border-bottom: 2px solid ${colorConfig.darkPrimary};
      }
    }
  }

  .RRT__showmore--selected {
    color: ${colorConfig.darkPrimary};
  }

  .RRT__tab--selected {
    a {
      border-bottom: 2px solid ${colorConfig.darkPrimary};
    }
  }

  .RRT__showmore {
    padding: 5px 12px;
    margin-top: -5px;
    z-index: 4;
    background: transparent;
    border: none;

    :hover {
      background: transparent;
      color: ${colorConfig.darkPrimary};
    }
  }

  .RRT__showmore-list {
    .RRT__tab {
      height: 40px;
      margin-top: 12px;
      display: flex;

      :hover {
        a {
          border: none;
        }
      }
    }

    .RRT__tab--selected {
      a {
        border: none;
      }
    }
    &:before {
      top: -7px;
      right: 14px;
    }

    &:after {
      top: -6px;
      right: 14px;
    }
  }
`;

const smallTabNavigationStyle = css`
  margin-bottom: 40px;
  border: none;

  .RRT__tabs {
    border-bottom: 2px solid ${colorConfig.darkPrimary};
  }

  .RRT__tab {
    padding: 8px 40px;
    height: 34px;

    :hover {
      background-color: ${colorConfig.primary};
      a {
        color: white;
      }
    }

    a {
      padding: 9px 40px;
      font-size: 14px;
      margin: 0 -40px;
    }
  }

  .RRT__tab--selected {
    background-color: ${colorConfig.primary} !important;

    a {
      color: white !important;
    }
  }

  .RRT__showmore {
    padding: 5px 12px;
    z-index: 4;
    background: transparent;
    border: none;
  }

  .RRT__showmore--selected {
    background-color: ${colorConfig.darkPrimary};
    color: white;

    :hover {
      background-color: ${colorConfig.darkPrimary};
      color: white;
    }
  }

  .RRT__showmore-list {
    .RRT__tab--selected {
      a {
        color: ${colorConfig.darkPrimary};
      }
    }

    .RRT__tab {
      height: auto;
      padding: 0;

      :hover {
        background-color: transparent;
        color: ${colorConfig.darkPrimary};
      }
    }
  }
`;

export const TabNavigationContainer = styled.div`
   /* base style */
  ${tabNavigationStyle}

  ${({ type }) => type === 'topMenu' && topMenuNavigationStyle}

  ${({ type }) => type === 'smallTab' && smallTabNavigationStyle}
`;
