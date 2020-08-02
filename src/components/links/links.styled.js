import styled from 'styled-components';

export const StyledLinks = styled.button`

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;
}

  .icon:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  .icon > .label {
    display: none;
  }

  .icon.style2 {
    -moz-transition: all 0.2s ease;
    -webkit-transition: all 0.2s ease;
    -ms-transition: all 0.2s ease;
    transition: all 0.1s ease;
    border-radius: 100%;
    display: inline-block;
    padding: 0.5em;
    border: solid 1px rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.075);
    width: 2.5em;
    height: 2.5em;
  }

    .icon.style2:before {
      display: block;
      width: 2.25em;
      height: 2.25em;
      line-height: 1.25em;
      font-size: 1.35em;
    }

    .icon.style2:hover {
      background-color: rgba(255, 255, 255, 0.25);
    }

    @media screen and (max-width: 736px) {

      .icon.style2:before {
        font-size: 1em;
      }

    }

    ol {
      list-style: decimal;
      margin: 0 0 2em 0;
      padding-left: 1.25em;
    }
    
      ol li {
        padding-left: 0.25em;
      }
    
    ul {
      list-style: disc;
      margin: 0 0 2em 0;
      padding-left: 1em;
    }
    
      ul li {
        padding-left: 0.5em;
      }
    
      ul.alt {
        list-style: none;
        padding-left: 0;
      }
    
        ul.alt li {
          border-top: solid 1px rgba(255, 255, 255, 0.25);
          padding: 0.5em 0;
        }
    
          ul.alt li:first-child {
            border-top: 0;
            padding-top: 0;
          }
    
      ul.icons {
        cursor: default;
        list-style: none;
        padding-left: 0;
      }
    
        ul.icons li {
          display: inline-block;
          padding: 0 1em 0 0;
        }
    
          ul.icons li:last-child {
            padding-right: 0;
          }
    
      ul.actions {
        cursor: default;
        list-style: none;
        padding-left: 0;
      }
    
        ul.actions li {
          display: inline-block;
          padding: 0 1em 0 0;
          vertical-align: middle;
        }
    
          ul.actions li:last-child {
            padding-right: 0;
          }
    
        ul.actions.small li {
          padding: 0 0.5em 0 0;
        }
    
        ul.actions.vertical li {
          display: block;
          padding: 1em 0 0 0;
        }
    
          ul.actions.vertical li:first-child {
            padding-top: 0;
          }
    
          ul.actions.vertical li > * {
            margin-bottom: 0;
          }
    
        ul.actions.vertical.small li {
          padding: 0.5em 0 0 0;
        }
    
          ul.actions.vertical.small li:first-child {
            padding-top: 0;
          }
    
        ul.actions.fit {
          display: table;
          margin-left: -1em;
          padding: 0;
          table-layout: fixed;
          width: calc(100% + 1em);
        }
    
          ul.actions.fit li {
            display: table-cell;
            padding: 0 0 0 1em;
          }
    
            ul.actions.fit li > * {
              margin-bottom: 0;
            }
    
          ul.actions.fit.small {
            margin-left: -0.5em;
            width: calc(100% + 0.5em);
          }
    
            ul.actions.fit.small li {
              padding: 0 0 0 0.5em;
            }
    
        @media screen and (max-width: 480px) {
    
          ul.actions {
            margin: 0 0 2em 0;
          }
    
            ul.actions li {
              padding: 1em 0 0 0;
              display: block;
              text-align: center;
              width: 100%;
            }
    
              ul.actions li:first-child {
                padding-top: 0;
              }
    
              ul.actions li > * {
                width: 100%;
                margin: 0 !important;
              }
    
                ul.actions li > *.icon:before {
                  margin-left: -2em;
                }
    
            ul.actions.small li {
              padding: 0.5em 0 0 0;
            }
    
              ul.actions.small li:first-child {
                padding-top: 0;
              }
    
        }
    
    dl {
      margin: 0 0 2em 0;
    }
    
      dl dt {
        display: block;
        font-weight: 200;
        margin: 0 0 1em 0;
      }
    
      dl dd {
        margin-left: 2em;
      }
    
`;
