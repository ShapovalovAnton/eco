

import header from "./hd.json";
import './header.css'

function parseHeader(i){
    return header[i].array;
}
export function Header() {
    let title, section_title, points;
    title = parseHeader(0);
    section_title = parseHeader(1);
    points = parseHeader(2);
    return (
        
        <>
        <header class="header flex flex_column">
            <h1 class="header_h1">{title[0]}</h1>
            <nav class="flex nav">
               
                {section_title.map((text, index) => (
                     <div class="flex nav_point">
                            <a href={points[index]} key={index}>
                                {text}
                            </a>
                            </div>
                        ))}

                
            </nav>

        </header>
        
            
        </>
    );
}