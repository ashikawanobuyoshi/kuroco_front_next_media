import { Suspense } from 'react'
import Banner from '@/components/common/Banner'
import TagArea from '@/components/common/TagArea'
import TagKeyword from '@/components/common/TagKeyword'
import Feature from '@/components/section/feature/Feature'
import Article from '@/components/section/article/Article'

export default function Page() {
  return (
    <div className="l-container">
      <Suspense>
        <Article>
          <div className="l-container--col-2__side">
            <Banner />
            <Feature />
            <TagArea />
            <TagKeyword />
          </div>
        </Article>
      </Suspense>
    </div>
  )
}
