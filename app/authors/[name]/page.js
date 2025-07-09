import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByAuthor } from "@/components/utils/doc-util";
import { getDocuments } from "@/lib/doc";


const AuthorPage = ({params: {name}}) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return (
    <ContentDisplay id={matchedDocs[0].id} />
  )
}

export default AuthorPage