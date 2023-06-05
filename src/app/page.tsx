'use client';

import dynamic from 'next/dynamic';

// import { Navigation } from '@/components/navigation/Navigation';
import * as Styled from './styled';

const Map = dynamic(() => import('@/components/index').then((module) => module.Map), {
  ssr: false,
});

export default function Home() {
  return (
    <Styled.appContainer>
      {/* <Navigation /> */}
      <Map />
    </Styled.appContainer>
  );
}
