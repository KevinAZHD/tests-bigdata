import { ra1Questions } from './questions/sbd-ra1.js';
import { ra1Questions as bdaRa1Questions } from './questions/bda-ra1.js';
import { ra2Questions } from './questions/sbd-ra2.js';
import { ra3Questions } from './questions/sbd-ra3.js';
import { ra3Questions as bdaRa3Questions } from './questions/bda-ra3.js';
import { ra4Questions } from './questions/sbd-ra4.js';
import { ra4Questions as bdaRa4Questions } from './questions/bda-ra4.js';
import { ra5Questions } from './questions/bda-ra5.js';
import { ra2Questions as bdaRa2Questions } from './questions/bda-ra2.js';
import bdaImage from '../assets/BDA.png';
import sbdImage from '../assets/SBD.png';

export const modulesConfig = {
  bda: {
    id: 'bda',
    title: 'BDA',
    fullName: 'Big Data Aplicado',
    image: bdaImage,
    ras: [
      {
        id: 'ra1',
        title: 'Test RA1',
        quizTitle: 'Test RA1 de BDA',
        questions: bdaRa1Questions,
        infoTitle: 'RA1 — ¿De qué va?',
        info: 'Guardas datos. Eliges formato. Parquet, Avro, JSON, CSV. OLAP vs OLTP. Lakehouse. Si no sabes qué motor usar ni por qué, aquí vas a sudar.'
      },
      {
        id: 'ra2',
        title: 'Test RA2',
        quizTitle: 'Test RA2 de BDA',
        questions: bdaRa2Questions,
        infoTitle: 'RA2 — ¿De qué va?',
        info: 'Logs, clics, sensores IoT. Sistemas que fallan y siguen vivos. CAP, particiones, replicación, skew. Big Data en la vida real.'
      },
      {
        id: 'ra3',
        title: 'Test RA3',
        quizTitle: 'Test RA3 de BDA',
        questions: bdaRa3Questions,
        infoTitle: 'RA3 — ¿De qué va?',
        info: 'Integridad, fiabilidad, contratos de datos. Checksums, duplicados, reconciliación. ¿Consistencia eventual o desastre inminente? Tu dato está roto y no te has enterado.'
      },
      {
        id: 'ra4',
        title: 'Test RA4',
        quizTitle: 'Test RA4 de BDA',
        questions: bdaRa4Questions,
        infoTitle: 'RA4 — ¿De qué va?',
        info: 'Tu pipeline roto a las 3AM. Alertas, métricas, logs, postmortems. Si no lo ves, no lo puedes arreglar.'
      },
      {
        id: 'ra5',
        title: 'Test RA5',
        quizTitle: 'Test RA5 de BDA',
        questions: ra5Questions,
        infoTitle: 'RA5 — ¿De qué va?',
        info: 'BI, dashboards, KPIs. Datos sucios que mienten. Métricas que nadie definió bien. El negocio pide números, tú los haces correctos.'
      }
    ]
  },
  sbd: {
    id: 'sbd',
    title: 'SBD',
    fullName: 'Sistemas Big Data',
    image: sbdImage,
    ras: [
      {
        id: 'ra1',
        title: 'Test RA1',
        quizTitle: 'Test RA1 de SBD',
        questions: ra1Questions,
        infoTitle: 'RA1 — ¿De qué va?',
        info: 'Big O, conjuntos, probabilidad, Bayes. Grafos, scraping, Lambda vs Kappa, Kafka, Spark. Todo junto. Mucho temario. Buena suerte.'
      },
      {
        id: 'ra2',
        title: 'Test RA2',
        quizTitle: 'Test RA2 de SBD',
        questions: ra2Questions,
        infoTitle: 'RA2 — ¿De qué va?',
        info: 'Boxplots, histogramas, violines. Anscombe te recuerda que la media miente. Elige bien el gráfico o el dato engaña.'
      },
      {
        id: 'ra3',
        title: 'Test RA3',
        quizTitle: 'Test RA3 de SBD',
        questions: ra3Questions,
        infoTitle: 'RA3 — ¿De qué va?',
        info: 'Scraping web, XPath, CSS selectores, cookies, ética y legalidad. Extraes datos de webs sin que te bloqueen ni te metan en líos.'
      },
      {
        id: 'ra4',
        title: 'Test RA4',
        quizTitle: 'Test RA4 de SBD',
        questions: ra4Questions,
        infoTitle: 'RA4 — ¿De qué va?',
        info: 'Grafos de verdad. Neo4j, Cypher, nodos, relaciones. MATCH, MERGE, Dijkstra. Las bases de datos que no son tablas.'
      }
    ]
  }
};
