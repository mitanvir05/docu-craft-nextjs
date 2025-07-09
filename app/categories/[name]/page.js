import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentsByCategory } from "@/components/utils/doc-util";
import { getDocuments } from "@/lib/doc";


const CategoriesPage = ({params: {name}}) => {
    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs, name);
    return (
        <ContentDisplay id={matchedDocs[0].id} />
    )
  }

  export default CategoriesPage