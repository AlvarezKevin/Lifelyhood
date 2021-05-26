import { useEffect } from "react";
// It's a hook to listen to your specific component. we have to pass the ref of that component. And whenever user click the outside of that specific component it will trigger.
function useOnClickOutside(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

export default useOnClickOutside;
