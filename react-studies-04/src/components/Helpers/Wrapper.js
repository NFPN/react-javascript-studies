// This is a workaround to avoid unecessary DIV nesting (div soup) when returning multiple JSX elements
// but "React.Fragment" could be used instead, or "<> </>", the latter being not supported everywhere

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
