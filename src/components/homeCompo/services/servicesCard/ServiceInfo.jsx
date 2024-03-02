import React, { Fragment } from 'react'
import { serviceInfo } from '../../../../data/data'
import ServiceCard from './ServiceCard'

function ServiceInfo() {
  return (
    <>
        <div style={{width: "85%", margin: "auto"}}>
        <div style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: "30px", padding: "20px 0"}}>
            {serviceInfo.map((item , index) => 
                <Fragment key={index}>
                    <ServiceCard 
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                </Fragment>
            )}
        </div>
        </div>
    </>
  )
}

export default ServiceInfo