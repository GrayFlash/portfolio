import React from 'react'
import Link from 'next/link';

function card(item, index){
    return(
        <div key={index}>
            <div className="row list">
                <div className="card__blog">
                <div>
                    <Link href={item.link} target='_blank' rel="noopener noreferrer">
                        <h4>{item.company} - {item.title}</h4>
                    </Link>
                    <div className="card__blog__date"><i>{item.date}</i> </div>
                    <div className="card__blog__sub">
                        {item.description.split('\n').map((line, index) => (
                            <div key={index}>{line}</div>
                        ))}
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
            title: 'Software Engineer',
            company: 'Enexia LLC',
            date: 'November 2025 – Present',
            link: 'https://www.enexia.co.jp/',
            description: `• Designing and building intraday trading system in Golang for Japan's electricity market, expanding beyond spot trading for real-time risk mitigation
• Designing microservices architecture for automated bidding with sub-second latency and 99.9% uptime requirements
• Collaborate with MLOps, Data Engineering, Data Science, and Business Administration teams to align trading system requirements
• Implemented OIDC federation and restructured IAM permissions following least-privilege principles across cloud infrastructure
• Provisioned AlloyDB, Artifact Registry, Cloud Run, and Cloud Build pipelines for secure deployment of trading microservices
• Conducted design and code reviews for 3-person contractor team developing socket-based JEPX Gateway system`,
            skills: ['Go', 'Microservices Architecture', 'Python', 'Trading Systems', 'Google Cloud Platform', 'AlloyDB', 'CI/CD', 'OIDC Authentication', 'Infrastructure as Code'],
            opensource: 'N/A'
        },
        {
            title: 'Backend Engineer',
            company: 'Merpay (Mercari Group)',
            date: 'October 2023 – November 2025',
            link: 'https://www.merpay.com/',
            description: `• Spearheaded multiple projects that enhanced Customer Support Tools, leading to a reduction in Average Handling Time (AHT) by over 50 hours per month
• Planned and implemented multiple migrations to reduce tech debt and adopt company-wide policies
• Extended Japanese search to Traditional Chinese (zhTW), enhancing Help Center article search capabilities
• Discovered and mitigated potential Personal Information Leakage within the organization
• Analyzed and implemented cost-reduction strategies, cutting infrastructure expenses by approximately 66%`,
            skills: ['Go', 'Google Cloud Platform', 'Kubernetes', 'GraphQL', 'Terraform', 'Security Engineering', 'Next.js', 'gRPC'],
            opensource: 'N/A'
        },
        {
            title: 'Site Reliability Engineering Intern',
            company: 'ChargeBee',
            date: 'Jan 2023 – July 2023',
            link: 'https://www.chargebee.com/',
            description: `• Performed infrastructure cost estimation and development of a tool to reduce false/duplicate cloudwatch alarms by 40%
• Contributed to the initial design phase of SRE tool to provision read-replicas (auto-shard) on 70% memory utilization
• Handled DML query execution requests received by the SRE team, performing query analysis in the dev environment (~5 per day)`,
            skills: ['Python', 'Java', 'Spring Framework', 'AWS', 'CloudWatch', 'Site Reliability Engineering', 'MySQL'],
            opensource: 'N/A'
        },
        {
            title: 'Software Engineering Intern',
            company: 'Gojek (GoTo Group)',
            date: 'Feb 2022 - July 2022',
            link: 'https://www.gojek.io/',
            description: `• Worked in Data Platform developing Meteor to handle metadata collection across petabytes of data received per day
• Contributed to data discovery and lineage tools (Meteor and Compass) for multiple kinds (>5) of data sources at Gojek
• Added monitoring and alerts for deployed jobs, and developed CLI tools for generating data lineage`,
            skills: ['Go', 'gRPC', 'Docker', 'Data Engineering', 'Metadata Management', 'Big Data'],
            opensource: 'https://github.com/odpf/compass',
        },
        {
            title: 'Software Engineering Intern',
            company: 'Gojek (GoTo Group)',
            date: 'June 2021 – October 2021',
            link: 'https://www.gojek.io/',
            description: `• Worked in Data Platform on the inception of the data discovery tool named Meteor
• Started with adding extractors for various data sources and moved on to add various CLI, CI/CD features
• Updated project documentation and made contributions to how data and config files are generated and consumed`,
            skills: ['Go', 'Test-Driven Development', 'SQL', 'Docker', 'CI/CD', 'Data Engineering'],
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
