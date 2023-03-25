import { Layout } from '@/components/layouts'
import { ProductList } from '@/components/products'
import { initialData } from '@/database/products';

export default function Home() {
  return (
    <>
      <Layout title='Home - Zar Ingenieria'>
        <ProductList products={initialData.products as any}/>
      </Layout>
    </>
  )
}
