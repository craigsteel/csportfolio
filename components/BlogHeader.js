
import BlockContent from '@sanity/block-content-to-react';


export default function BlogHeader({author, title, subtitle, blogMainIntro, projectRole, date}) {
  return (
    <div className="blog-header">
      <h1 className="blog-header__title">{title}</h1>
      <h2 className="blog-header__subtitle">{subtitle}</h2>
      <BlockContent className="blog-header__project-role" blocks={projectRole}> </BlockContent>
      <BlockContent className="blog-header__main-introduction" blocks={blogMainIntro}> </BlockContent>
    </div>
  )
}
