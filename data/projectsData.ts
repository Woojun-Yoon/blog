interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Advirtual',
    description: `Advirtual은 증강 현실 기술을 누구나 쉽고 빠르게 활용할 수 있도록 도와주는 서비스입니다. Spring Boot를 통한 Backend와 Infra, DevOps 등 다양한 역할을 맡고있습니다.`,
    imgSrc: '/static/images/advirtual-logo.png',
    href: 'https://advirtual.com',
  },
]

export default projectsData
