import YAML from 'yaml'
import React from 'react'


export default function YAMLBlogReader(filepath){
    console.log(__filename)
    const file = fs.readFileSync("./blogs.yml", 'utf-8')
    var out = YAML.parse(file)
    console.log(out)
    return(
        <div>
            out
        </div>
    )
}
