import { NextPage } from 'next';
import { Layout } from '@/components/layouts'
import { LandingInfo } from '@/components/ui';
import { Box, Divider, Typography } from '@mui/material';

const HomePage:NextPage = () => {
  const data = [
    {
      direction: 'left',
      flexDirection: 'row-reverse',
      title: 'Misión',
      description: 'En Zar Ingeniería S.A.S., nos dedicamos a ofrecer soluciones integrales y personalizadas en el ámbito de la metalurgia, trabajando con hierro, acero inoxidable y aluminio para diseñar y fabricar productos ornamentales y estructurales de alta calidad. Nos esforzamos por impulsar el crecimiento y la innovación en nuestro sector, cumpliendo con las expectativas de nuestros clientes y contribuyendo al desarrollo de la región de Duitama y Boyacá.',
      image: '/landing/mision.jpg',
      pos: 1,
    },
    {
      direction: 'right',
      flexDirection: 'row',
      title: 'Visión',
      description: 'Ser líderes en la industria metalúrgica y de ornamentación a nivel departamental en Duitama y Boyacá, destacándonos por la excelencia en la calidad, diseño y durabilidad de nuestros productos. En Zar Ingeniería S.A.S., aspiramos a ser un referente en la innovación y el compromiso con nuestros clientes, colaboradores y la comunidad, consolidándonos como una empresa sostenible y socialmente responsable.',
      image: '/landing/vision.jpg',
      pos: 2,
    }
  ]
  return (
    <>
      <Layout title='Zar Ingeniería S.A.S' pageDescription={'Los mejores productos de la industria de metales'}>
        <Box
          sx={{
            mb: 3,
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Typography variant='h1'>¿Quienes somos?</Typography>
          <Typography
            variant='body2'
            sx={{
              mt: 3,
              width: { xs: '100%', sm: '70%' },
              lineHeight: '2',
              textAlign: { xs: 'justify', sm: 'center'}
            }}
            >
              Zar ingeniería s.a.s es una empresa metal metalúrgica dedicada a la realización de trabajos en hierro, acero inoxidable y aluminio. Esta empresa es fundada por el señor pedro alexander zarate Agudelo con el sueño de crecer como trabajador en innovar en la producción de trabajos en materiales ya mencionados, zar ingeniería s.a.s tiene como meta ser una de las empresas más grandes de ornamentación de Duitama y Boyacá ser los mejores a nivel departamental en todo tipo de ornamentaciones con calidad en cada uno de sus trabajos.
          </Typography>
        </Box>
        {
          data.map(({direction, flexDirection, title, description, image, pos}) => (
            <LandingInfo
              key={title}
              direction={direction}
              flexDirection={flexDirection}
              title={title}
              description={description}
              image={image}
              pos={pos}
            />
          ))
        }
      </Layout>
    </>
  )
}

export default HomePage;
