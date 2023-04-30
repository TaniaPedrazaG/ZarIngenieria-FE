import { NextPage } from 'next';
import { Layout } from '@/components/layouts'
import { LandingInfo } from '@/components/ui';

const HomePage:NextPage = () => {
  const data = [
    {
      direction: 'left',
      flexDirection: 'row-reverse',
      title: 'Misión',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/logo.jpg'
    },
    {
      direction: 'right',
      flexDirection: 'row',
      title: 'Visión',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      image: '/logo.jpg'
    }
  ]
  return (
    <>
      <Layout title='Zar Ingeniería S.A.S' pageDescription={'Los mejores productos de la industria de metales'}>
        {
          data.map(({direction, flexDirection, title, description, image}) => (
            <LandingInfo
              key={title}
              direction={direction}
              flexDirection={flexDirection}
              title={title}
              description={description}
              image={image}
            />
          ))
        }
      </Layout>
    </>
  )
}

export default HomePage;
