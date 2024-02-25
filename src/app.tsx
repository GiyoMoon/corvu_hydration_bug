// @refresh reload
import { JSX, Show, createMemo } from "solid-js";
import { Portal } from 'solid-js/web';

const Wrapper = (props: { children: JSX.Element}) => {
  return (
    <Show when={true}>
      {(() => {
        const memoizedChildren = createMemo(() => props.children)
        return (
          <Show when={true}>
           <Portal>{memoizedChildren()}</Portal>
          </Show>
        )
      })()}
    </Show>
  )
}
export default function App() {
  return (
    <Wrapper>
      <div>Test</div>
    </Wrapper>
  );
}
