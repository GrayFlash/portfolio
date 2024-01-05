import React from 'react'
import Link from 'next/link';

function card(item, index){
    return(
        <div key={index}>
            <div className="row list">
                <div className="card__blog">
                <div>
                    <Link href={item.link}>
                        <a target='_blank' rel="noopener noreferrer">
                            <h4>{item.company} - {item.title}</h4>
                        </a>
                    </Link>
                    <div className="card__blog__date"><i>{item.date}</i> </div>
                    <div className="card__blog__sub">
                        {item.description}
                        <br/>
                        <p>
                            A link to project <i>(if open-sourced)</i>: <a href={item.opensource} target='_blank' rel="noopener noreferrer">{item.opensource}</a>
                        </p>
                    </div>
                    {/* <div>
                        {item.skills.map(item, index) => 
                            <strong key={index}>
                                {item}
                            </strong>
                        }
                    </div> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default function WorkExperiences(){
    var JobHistory = [
        {
            title: 'Software Engineer - Backend',
            company: 'Merpay',
            date: '10/2023-present',
            link: 'https://www.merpay.com/',
            description: 'I work with Internal Tooling team for Customer Platform as a Backend Engineer, owning products and features to handle critical aspects of Customer Support of our payment application',
            skills: ['golang', 'gcp', 'kubernetes', 'datadog', 'terraform' ],
            opensource: 'N/A'   
        },
        {
            title: 'Software Engineering Intern',
            company: 'Chargebee',
            date: '01/2023-07/2023',
            link: 'https://www.chargebee.com/',
            description: 'Worked in the SRE team, built reliable products to support and automate the cloud infrastructure.',
            skills: ['python', 'java', 'spring', 'aws', 'vuejs', 'docker' ],
            opensource: 'N/A'
        },
        {
            title: 'Tech Intern',
            company: 'Gojek',
            date: '02/2022-06/2022',
            link: 'https://www.gojek.io/',
            description: 'Worked on products of data discovery and lineage (Meteor, and Compass), also added monitoring and alerts for the deployed jobs. In this term, I also added support for more plugins meant for extraction as well as sink of the data. I also made a CLI for compass which is meant for generating data lineage and basically using the metadata we generate in meteor.',
            skills: ['gRPC', 'golang', 'docker'],
            opensource: 'https://github.com/odpf/compass',
        },
        {
            title: 'Product Engineering Intern - Full Stack',
            company: 'Gojek',
            date: '06/2021-10/2021',
            link: 'https://www.gojek.io/',
            description:'Worked in Data Platform, on the inception of the data discovery tool named Meteor. I initially started with adding extractors for various data sources and then moved on to add various CLI, CI/CD features as we all updating the docs for the project. I have also made some contributions to how the data and config files are generated and consumed.',
            skills: ['golang', 'TDD', 'sql', 'docker', 'automation'],
            opensource: 'https://github.com/odpf/meteor',
        },
    ]
    return(
        <div className='blog-list'>
                {JobHistory.map((item, index) =>
                    <div key={index}>
                        {card(item, index)}
                    </div>
                )}
        </div>
    )
}
