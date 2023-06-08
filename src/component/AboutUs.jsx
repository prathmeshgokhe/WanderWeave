import React from 'react'
import './about.scss'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className='cover'>
                <button><Link to="/">X</Link></button>
                <h1>South Africa</h1>
                <p>
                    South Africa, officially the Republic of South Africa, is the southernmost country in Africa. It is bounded to the south by 2,798 kilometres (1,739 mi) of coastline that stretches along the South Atlantic and Indian Oceans;[14][15][16] to the north by the neighbouring countries of Namibia, Botswana, and Zimbabwe; and to the east and northeast by Mozambique and Eswatini. It also completely enclaves the country Lesotho.[17] It is the southernmost country on the mainland of the Old World, and the second-most populous country located entirely south of the equator, after Tanzania. South Africa is a biodiversity hotspot, with unique biomes, plant and animal life. With over 60 million people, the country is the world's 24th-most populous nation and covers an area of 1,221,037 square kilometres (471,445 square miles). Pretoria is the administrative capital, while Cape Town, as the seat of Parliament, is the legislative capital. Bloemfontein has traditionally been regarded as the judicialacapital.[18] The largest city, and site of highest court is Johannesburg.
                    <br />
                    <br />
                    About 80% of the population are Black South Africans.[16] The remaining population consists of Africa's largest communities of European (White South Africans), Asian (Indian South Africans and Chinese South Africans), and multiracial (Coloured South Africans) ancestry. South Africa is a multiethnic society encompassing a wide variety of cultures, languages, and religions. Its pluralistic makeup is reflected in the constitution's recognition of 11 official languages, the fourth-highest number in the world.[16] According to the 2011 census, the two most spoken first languages are Zulu (22.7%) and Xhosa (16.0%).[8] The two next ones are of European origin: Afrikaans (13.5%) developed from Dutch and serves as the first language of most Coloured and White South Africans; English (9.6%) reflects the legacy of British colonialism and is commonly used in public and commercial life.
                    <br />
                    <br />
                    The country is one of the few in Africa never to have had a coup d'état, and regular elections have been held for almost a century. However, the vast majority of Black South Africans were not enfranchised until 1994. During the 20th century, the black majority sought to claim more rights from the dominant white minority, which played a large role in the country's recent history and politics. The National Party imposed apartheid in 1948, institutionalising previous racial segregation. After a long and sometimes violent struggle by the African National Congress and other anti-apartheid activists both inside and outside the country, the repeal of discriminatory laws began in the mid-1980s. Since 1994, all ethnic and linguistic groups have held political representation in the country's liberal democracy, which comprises a parliamentary republic and nine provinces. South Africa is often referred to as the "rainbow nation" to describe the country's multicultural diversity, especially in the wake of apartheid.[19]
                </p>
            </div>
        </div>
    )
}

export default AboutUs