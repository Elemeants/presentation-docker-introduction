import { Layout, makeScene2D, Txt, View2D } from '@motion-canvas/2d';
import { all, beginSlide, createRef, waitFor } from '@motion-canvas/core';

export default makeScene2D(function* (view: View2D) {
  const title = createRef<Txt>();
  const creator = createRef<Txt>();

  view.fill('#111111');
  view.add(
    <Layout direction={"column"} gap={20} layout
      fontFamily={'"SF Pro Text"'} offset={[0.3, 0]}>
      <Txt ref={title} fontWeight={700} fontSize={100} fill={"#fcfcfc"} />
      <Txt ref={creator} fontWeight={500} fontSize={80} fill={"#fcfcfc"} />
    </Layout>
  );

  yield* all(
    title().text("Docker Introduction", 1),
    creator().text("Daniel Polanco", 0.5),
  );
  yield* beginSlide("title");
});
