import ArticleCard from "./ArticleCard";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ArticleListingProps {
  Articles: Article[];
}

const ArticleListings: React.FC<ArticleListingProps> = ({ Articles }) => {
  return (
    <div>
      {Articles.map((Article) => (
        <div key={Article.id} className="mb-5">
          <ArticleCard
            id={Article.id}
            title={Article.title}
            description={Article.description}
            image={Article.image}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticleListings;
