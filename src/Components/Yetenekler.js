import { Icon } from '@iconify/react'
import React from 'react'
import Navbar from './Navbar'

export default function Yetenekkler() {
  return (
    <div>
      <Navbar/>
      <div className='d-flex justify-content-center flex-column mb-5 vh-100 default-bg'>
      
      <div className='card border-0 w-100 d-flex justify-content-center'>
          <div className='card-body'>
            <div className='row m-0 d-flex justify-content-center'>
              <div className='col-2'>
              <Icon fontSize={100} icon="devicon:html5" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="devicon:css3" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="skill-icons:bootstrap" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="logos:javascript" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="vscode-icons:file-type-reactjs" />
              </div>
            </div>
          </div>
      </div>
      <div className='card border-0 w-100 d-flex justify-content-center'>
          <div className='card-body'>
            <div className='row m-0 d-flex justify-content-center'>
              <div className='col-2'>
              <Icon fontSize={40} icon="logos:looker" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="vscode-icons:file-type-excel2" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="mdi:google-spreadsheet" />
              </div>
              <div className='col-2'>
              <Icon fontSize={100} icon="logos:tableau-icon" />
              </div>
              
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}
