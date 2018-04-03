// @flow
import * as React from "react";
import type {Value, Change} from 'slate';
import styled from 'styled-components';
import {Container} from './components/item';

import {AlignCenter, AlignLeft, AlignRight} from '@canner/slate-icon-align';
import Blockquote from '@canner/slate-icon-blockquote';
import Bold from '@canner/slate-icon-bold';
import Clean from '@canner/slate-icon-clean';
import Code from '@canner/slate-icon-code';
import CodeBlock from '@canner/slate-icon-codeblock';
import FontBgColor from '@canner/slate-icon-fontBgColor';
import FontColor from '@canner/slate-icon-fontColor';
import {Header1, Header2, Header3} from '@canner/slate-icon-header';
import Hr from '@canner/slate-icon-hr';
import Image from '@canner/slate-icon-image';
import {Indent, Outdent} from '@canner/slate-icon-indent';
import Italic from '@canner/slate-icon-italic';
import Link from '@canner/slate-icon-link';
import {OlList, UlList} from '@canner/slate-icon-list';
import StrikeThrough from '@canner/slate-icon-strikethrough';
import Underline from '@canner/slate-icon-underline';
import Undo from '@canner/slate-icon-undo';
import Redo from '@canner/slate-icon-redo';
import Video from '@canner/slate-icon-video';

type Props = {
  value: Value,
  onChange: (change: Change) => void
}

const IconContainer = styled.div`
  display: inline-block;
  background: transparent;
  color: #222;
  cursor: pointer;
  -webkit-transition: background 0.2s ease 0s;
  border-bottom: 0.5px solid #ebebeb;

  &:hover {
    background: #ebebeb;
  }
`

const Seperator = styled.div`
  height: 35px;
  width: 1px;
  margin: 2px 0;
  background: #ebebeb;
  display: inline-block;
  vertical-align: top;
`;

export default class Toolbar extends React.Component<Props> {
  render() {
    const { value, onChange } = this.props;
    const options = [
      Header1,
      Header2,
      Header3,
      Blockquote,
      Hr,
      'seperator',
      AlignLeft,
      AlignCenter,
      AlignRight,
      Indent,
      Outdent,
      'seperator',
      OlList,
      UlList,
      'seperator',
      Undo,
      Redo,
      'seperator',
      Link,
      Image,
      Video,
      CodeBlock,
      'seperator',
      FontColor,
      FontBgColor,
      'seperator',
      Bold,
      Italic,
      Underline,
      StrikeThrough,
      Clean,
      Code
    ]

    return (
      <Container>
        {options.map((Type, i) => {
          if (Type === 'seperator')
            return <Seperator key={i}/>

          return (
            <IconContainer
              key={i}>
              <Type
                change={value.change()}
                onChange={onChange}
                className="topToolbarItem"
                strokeClassName="qlStroke"
                strokeMitterClassName="qlStrokeMitter"
                fillClassName="qlFill"
                evenClassName="qlEven"
                colorLabelClassName="qlColorLabel"
                thinClassName="qlThin"
                activeStrokeMitterClassName="qlStrokeMitterActive"
                activeClassName="topToolbarItem topToolbarItemActive"
                activeStrokeClassName="qlStrokeActive"
                activeFillClassName="qlFillActive"
                activeThinClassName="qlThinActive"
                activeEvenClassName="qlEvenActive"
              />
            </IconContainer>
          )
        })}
      </Container>
    );
  }
}
