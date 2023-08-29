import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function Timeline() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center">
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2020 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Programador en Nemon</h3>
                        <h4 className="vertical-timeline-element-subtitle">Cargo actual</h4>
                        <p>
                            Desarrollo y mantenimiento de aplicaciones web.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date="2017 - 2020"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Programador en Eldine</h3>
                        <h4 className="vertical-timeline-element-subtitle">Finalizado</h4>
                        <p>
                            Desarrollo de aplicaciones empresariales.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                        date="2017 - 2018"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Desarrollo de Aplicaciones Web (DAW)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Finalizado</h4>
                        <p>
                            Aprendizaje de tecnologías web modernas y frameworks.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--education"
                        contentStyle={{ background: 'rgb(103, 58, 183)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(103, 58, 183)' }}
                        date="2015 - 2017"
                        iconStyle={{ background: 'rgb(103, 58, 183)', color: '#fff' }}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                        <h4 className="vertical-timeline-element-subtitle">Finalizado</h4>
                        <p>
                            Formación en desarrollo de aplicaciones para diferentes plataformas.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>
        </div>
    );
}

export default Timeline;
