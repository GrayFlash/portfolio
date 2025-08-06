import React from 'react'
import Link from 'next/link';

function card(item, index){
    return(
        <Link href={item.link} key={index} className="row list" target="_blank">
            <div className="card__blog">
            <div>
                <h4>{item.title}</h4>
                <div className="card__blog__date">{item.date} - {item.rtime} min read</div>
                <div className="card__blog__sub">{item.description}</div>
            </div>
            </div>
        </Link>
    )
}

export default function CodingCommunities(){
    var BlogList = [
        {
            title: 'odpf/meteor - Metadata Extractor',
            date: '20 Sep, 2021',
            link: 'https://gaurav-kumar-1705.medium.com/odpf-meteor-metadata-extractor-b42063c53f23',
            rtime: 4,
            description: 'Before getting into meteor, lets build some context around what its purpose is and get familiar with some terms. Metadata is a self-referential form of information that describes the entire data contained in a data source...',
        },
        {
            title: 'Semantic Web',
            date: '17 Jun, 2021',
            link: 'https://gaurav-kumar-1705.medium.com/semantic-web-dc95f6fe486f',
            rtime: 3,
            description: 'We all have been through Wikipedia to read an article about any topic, and for a major part of us seem to find most of our searches being answered by Wikipedia and it is always on the top of your every search result, right!!...',
        },
        {
            title: 'Integration of Blockchain with IoT',
            date: '06 Apr, 2020',
            link: 'https://cevgroup.org/day18-why-what-in-security-blockchain-md/',
            rtime: 5,
            description:'Internet of things is an environment of connected physical devices embedded in various systems and accessible on the Internet, thus rendering these devices to become autonomous and can be controlled through...',
        },
    ]
    return(
        <div className='blog-list'>
                {BlogList.map((item, index) =>
                    <div key={index}>
                        {card(item, index)}
                        {/* <br/> */}
                    </div>
                )}
        </div>
    )
}
