import React from 'react';
import {Image,Transformation} from 'cloudinary-react';

export class ItemCols extends React.Component {
    render(){
        return (
            <div>
                <div>
                
                  <Image cloudName="rxghost" publicId="diningslug.png" width="300" crop="scale" >
                   <Transformation height="200" width="200" crop="fill" effect="sepia" radius="50" />
                   <Transformation overlay="text:impact_70:Welcome to Dining Slug" gravity="north" y="300" />
                   <Transformation angle="0" />
                  </Image>
                </div>
    
            </div>
        )
    } 
}
