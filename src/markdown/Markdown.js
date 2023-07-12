import { useCallback } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from 'remark-gfm';

const Markdown = React.memo(({linkStopPropagtion, ...props}) => {

  const handleLinkClick = useCallback((event) => {
    event.stopPropagtion();
  },[]);

  return (  <>
  </>);
})

export default Markdown;

