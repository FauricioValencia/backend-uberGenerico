export default {
  documentationPath: '/',
  basePath: '/api/',
  info: {
    title: 'UberGenerico Api',
    description: 'Uber Generico API',
    version: '1.0.0',
    contact: {
      name: ['Daniel Eslava', 'Fauricio Valencia'],
      email: 'peerpeeloficial@gmail.com'
    }
  },
  securityDefinitions: {
    'jwt': {
      'type': 'apiKey',
      'name': 'Authorization',
      'in': 'header'
    }
  },
  grouping: 'tags',
  sortEndpoints: 'ordered'
}