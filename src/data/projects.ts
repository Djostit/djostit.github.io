import { Project } from '../types/project';

// Проект 1: API Gateway на YARP
import p1Img1 from '../assets/projects/project-1/1.jpg';
import p1Img2 from '../assets/projects/project-1/2.jpg';
import p1Img3 from '../assets/projects/project-1/3.jpg';

// Проект 2: Микросервис OstCard
import p2Img1 from '../assets/projects/project-2/1.jpg';
import p2Img2 from '../assets/projects/project-2/2.jpg';
import p2Img3 from '../assets/projects/project-2/3.jpg';

// Проект 3: Банковские интеграции & SSO
import p3Img1 from '../assets/projects/project-3/1.jpg';
import p3Img2 from '../assets/projects/project-3/2.jpg';
import p3Img3 from '../assets/projects/project-3/3.jpg';

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'API Gateway на YARP',
    category: 'Архитектура & gRPC',
    col1Img1: p1Img1,
    col1Img2: p1Img2,
    col2Img: p1Img3,
  },
  {
    id: '02',
    title: 'Микросервис OstCard',
    category: 'Микросервисы & HighLoad',
    col1Img1: p2Img1,
    col1Img2: p2Img2,
    col2Img: p2Img3,
  },
  {
    id: '03',
    title: 'Банковские интеграции & SSO',
    category: 'Финтех & Безопасность',
    col1Img1: p3Img1,
    col1Img2: p3Img2,
    col2Img: p3Img3,
  },
];
