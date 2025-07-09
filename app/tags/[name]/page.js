import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByTag } from "@/components/utils/doc-util";
import { getDocuments } from "@/lib/doc";



const TagPage = ({params: {name}}) => {
    const docs = getDocuments();
    const matchedDocuments = getDocumentsByTag(docs, name);

    return (
      <ContentDisplay id={matchedDocuments[0].id} />
    )
  }

  export default TagPage