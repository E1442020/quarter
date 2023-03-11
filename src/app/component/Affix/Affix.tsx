
import { useWindowScroll } from '@mantine/hooks';
import {AiOutlineArrowUp} from 'react-icons/ai'
import { Affix, Button, Text, Transition, rem } from '@mantine/core';
import { ButtonContainer } from './AffixStyle';

export function AffixComponent() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix  position={{ bottom: rem(20), right: rem(20) }} >
        <Transition  transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ButtonContainer
            
        
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
             <AiOutlineArrowUp size={20}/>
            </ButtonContainer>
          )}
        </Transition>
      </Affix>
    </>
  );
}